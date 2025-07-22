---
title: "Compiler architecture"
slug: "compiler"
description: ""
summary: ""
date: 2025-07-14T19:29:13+02:00
lastmod: 2025-07-14T19:29:13+02:00
draft: false
weight: 511
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

{{< highlight_scripts >}}

The compiler is divided in multiple parts, interacting with other in sequence:

- the parser, generating the AST from char predicates
- the import solver, calling the parser as many times as needed to get all the files AST's and piece them together
- the macro processor, applying macros in the AST
- the name resolver, resolving packages
- the optimizer, removing unused symbols from the AST
- the AST lowerer, generating IR from the AST
- the IR optimizer, enhancing the IR
- the IR compiler, generating bytecode from IR

There exists another compiler, the json compiler, converting a given code to JSON by iterating through the AST. It follows the same process as the compiler to generate the AST.

## Parser

It is generating the abstract syntax tree (AST) using character predicates in a "parser combinator" fashion.

## Import solver

Using the main script's AST, it retrieves the imports and resolves them relatively to the main script path. Say you have three files, `a.ark`, `foo/b.ark` and `foo/bar/c.ark`:

```
./
|__ a.ark
|__ foo/
    |__ b.ark
    |__ bar/
        |__ c.ark
```

To import `c.ark` from `a.ark` or `b.ark`, you will need to write

{{< highlight_arkscript >}}
(import foo.bar.c)
{{< /highlight_arkscript >}}

Then, it continues to resolve imports recursively, calling the parser on each new unimported package it finds. The final AST is the agglomeration of all ASTs, where every `import` directive is replaced by a Namespace node, which holds the file's AST, its name, path, and import attributes (is glob, symbols, prefix).

## Macro processor

Once the AST has been built, the macro processor kicks into action and goes over the AST, trying to find any macro node to register them and apply them. Macros are registered by block, so if we are at a current depth of 0 in the AST, and found a macro, it will available in every node. If we find a macro in a node at depth 2, the macro will get registered in applied in all the potential sub-nodes of the current node, but once we leave the depth 2 node, the macro will be removed from memory and won't be accessible in the other part of the script.

It is composed of different pieces:
- the processor, receiving the AST, keeping track of all the macros, and visiting every node, applying macros in them (it also does complex stuff with function macros like unifying the argument lists)
- the pipeline, holding all the different macro executors, trying to apply them one after another (until one matches) when the processor asks for a macro to be applied on a node
- the executors:
    - the conditional one works only with if macros and apply them regarding the value of the condition
    - the symbol one applies the value held by the macro
    - the list one applies predefined macros and user defined macros (function macros), it is arguably the most complex one but also the best one as well

Once it is done running, every macro definition and macro usage in the AST has been removed and/or replaced with the corresponding value, so we are left with an AST that the compiler could already work with.

## Name Resolver

Once macros have been processed, the name resolver visits the AST and updates each symbol, to fully qualify it.

Fully qualifying a symbol means finding the nearest namespace in which a symbol is declared ; in our input AST we have `(let foo 5)`, in the final AST we will have `(let package:foo 5)` or even `(let package:foo#hidden 5)` in the case of symbols that should be available but masked as they weren't explicitly imported (eg. `(import foo :bar)`], all symbols from the package `foo` are imported and suffixed with `#hidden`, and `bar` is imported as-is).

## AST Optimizer

Though before being able to compile the AST, we can optimize it a bit, by removing unused variable definition. For simple variables, like `(let a 12)`, this isn't really a problem if we leave them, but for functions it would create separate pages of bytecode for them, and the resulting bytecode would be a lot longer than just a variable declaration and assignment. Having a long bytecode isn't a problem in term of computing power, as we are only computing what we are asked to, but we are limited to 65'535 functions as our code segment indexes are on 2 bytes (and page 0 is for the global scope), and we are limited to 65'536 different symbols (and values). Those symbols and values could be used only in those functions we want to delete, and use substantial space in the symbols and values table.

So here comes the **AST optimizer**, reading only the first level of the AST, searching for variables and functions definition. Then, it visits the whole AST, counting how many times each gathered symbol has been used. In the end, if a symbol has been used only once (it correspond to its definition/declaration), then it gets removed from the AST.

## AST Lowerer

The AST Lowerer's role is to take a tree-like structure, the AST, and flatten it, lowering it to IR that will be linear, so that the virtual machine can just read one instruction after another, without having to dive in a nested structure (which is very inefficient).

It works recursively on the nodes, and sometimes even I have some trouble understanding why something works and why something else doesn't. In the end, it all boils down to "the IR has been badly generated".

First step is to run through the AST, running each node in the `ASTLowerer::compileExpression` recursive method, in charge of generating the IR.

### The compilation

Given an input node, we make a decision based on its type (`ASTLowerer::compileExpression`):

- if it's a symbol we will compile it to a `LOAD_SYMBOL <symbol>` (or `LOAD_SYMBOL_BY_INDEX <index>` if the symbol is in the current scope and can be accessed by its index in the scope stack)
- "get field operation", `GET_FIELD <symbol>`
- String, Number or nil, we push the value on the stack with `LOAD_CONST <const>`
    - an additional step is done here to avoid pushing the value on the stack **if** the value isn't being used (eg in a function call, variable assignment)
- Keywords:
    - If: first we compile the condition, then add a jump if true to go to the `ifTrue` branch. We compile the `ifFalse` branch, add a jump to the end of the if, and finally we compile the `ifTrue` branch.
    - Let, Mut, Set: we register the symbol, compile the value, add the corresponding instruction after it: `LET`, `MUT`, `STORE`
    - Fun: we start by checking if the function is a closure (has any Capture nodes) and emplace `CAPTURE` instructions in the callee page. Then we create a new page, dedicated to the function. If it's a closure, we'll add a `MAKE_CLOSURE` instruction instead of a `LOAD_CONST` to the callee page. Arguments are loaded by the function with series of `STORE` instructions, in the order the arguments appear. Then we compile the body of the function, marking it as used and terminal.
    - Begin: we take each node and compile them. An additional step is done here, to remove any unused value, except for the last node whose fate is decided by the caller (so that we don't always drop the last node in a begin, which may be the return value of a function).
    - While: much like the if, we compile the condition, add a jump to the end of the while if the condition is false, compile the body and add a jump to the beginning (right before the condition).
    - Import: this is used only to import modules at runtime, we put the module name (a string) on the stack and then the `IMPORT` instruction. The VM will do what's needed for us.
    - Del: this adds `DEL <symbol>` to the bytecode, to tell the virtual machine to remove `<symbol>` from memory.
- if none the previous cases matched, then we most likely have a function call (`ASTLowerer::handleCalls`)
    - we first check if the function call is a short-circuiting operator, `and` or `or`. If it is, we duplicate the first value, and add a `POP_JUMP_IF_FALSE` for `and`, otherwise a `POP_JUMP_IF_TRUE` for `or`, then a `POP` to remove the leftover value in case we didn't jump. The next value is added, and it's not the last one, we `DUP` it as well.
    - otherwise, if the function call isn't an operator, we check if the call is terminal and self-call (calling the function we are currently compiling). If it is, we replace the call by a jump to address 0 (relative to the current page), transforming the tail call into a loop. If it isn't, we compile the function call to a temporary page.
        - first we push a `PUSH_RETURN_ADDRESS` instruction, using a label that will be placed after the `CALL` instruction. This will tell the VM to push the instruction and page pointers
        - then we compile the arguments on the current page in reverse order, marking them as "no discard"
        - we push the computed expression for the function call and discard the temporary page
        - we add the `CALL` instruction, the number of arguments
    - finally, if we're here we have an operator call. We start by pushing arguments to the stack, check argument count for error reporting, and then add the operator.

Generated IR entities also have an attached source location, so that the **IR Compiler** can generate the filenames and instruction location tables, to provide better error messages at runtime.

## IR Optimizer

The **IR Optimizer** is given the IR blocks generated by the **ASTLowerer**, as well as the symbol and value tables. From there, it visits each page and see if it can merge 2 or 3 instructions together.

First, it tries to merge 2 instructions. Then, if no instruction were merged, it tries with 3. Finally, if no instructions were merged, it leaves the instruction untouched. Otherwise, the group of instructions is skipped over and the new instruction is kept in the final IR. The value table is particularly useful when compacting code like `(+ i 2)` to check if the value used for incrementing (or decrementing) is between 0 and 4095 (the maximum value we can encode on 12 bits in super instructions).

## IR Compiler

The **IR Compiler** takes optimized blocks of IR, with the symbol and value tables, and transform it into bytecode for the **virtual machine**. Its role is also to compute the jumps' positions from the labels in the IR blocks.

- The first step is to generate the file header: the string `ark\0`, followed by the version of the compiler (each number on two bytes), and then the timestamp (`IRCompiler::pushFileHeader`).
- We can continue to build our bytecode file header, with the symbols and the values table, respectively for a list of identifier used throughout the program, and for all the values used (a tag-value system is used here so that the VM knows what type the value is) (`IRCompiler::pushSymAndValTables`).
- Then we compute the list of distinct filenames that were used to generate the IR entities, and write the files table. The instruction location table is constructed by iterating over each IR block, skipping the labels. We keep only one pair of (page pointer, file, line) in the resulting table, to avoid putting useless data in it (as we would only match the first entry of the table, based on the instruction pointer).
- Finally, we add the different code pages to the bytecode file, generated by the `IRCompiler::compile` method call, and create the SHA256 used for integrity checking of the bytecode, in a spot in the file header.

## JSON Compiler

Given an input node, we generate the corresponding JSON structure:

- Symbol: `{"type": "Symbol", "name": "..."}`
- Spread: `{"type": "Spread", "name": "..."}`
- Capture: `{"type": "Capture", "name": "..."}`
- Field: `{"type": "Field", "children": [{"type": "Symbol", "name": "..."}, ...]}`
- String: `{"type": "String", "value": "..."}`
- Number: `{"type": "Number", "value": ...}`
- Function call: `{"type": "FunctionCall", "name": "...", "args": [{"type": "Symbol", "name": "..."} ...]}`
- Keywords:
    - Function declaration: `{"type": "Fun", "args": [{"type": "Symbol", "name": "..."} ...], "body": [...] | {...}}`
    - Variable declaration/modification: `{"type": "Let|Mut|Set", "name": {"type": "Symbol", "name": "..."}, "value": {...}}`
    - Condition: `{"type": "If", "condition": [...], "then": [...] | {}, "else": [...] | {}}`
    - While loop: `{"type": "While", "condition": [...], "body": [...] | {}}`
    - Begin: `{"type": "Begin", "children": [...]}`
    - Import: `{"type": "Import", "package": "foo.bar.egg", "glob": false, "symbols": ["a", "b", "c"]}`
    - Del: `{"type": "Del", "value": {"type": "Symbol", "name": "..."}}`
- Macros:
    - Macro value: `{"type": "Macro", "name": "...", "value": {...}}`
    - Macro function: `{"type": "Macro", "name": "...", "args": [...], "body": {...}}`
    - Macro condition: `{"type": "MacroCondition", "condition": {...}, "then": {...}, "else": {...}}`

Some fields have been filled to give you an idea of what the `value` should look like in most cases. One should note that function arguments can have `Capture` nodes as well as `Symbol` nodes.

Generic structure:

```
{
    "type": "<name>",
    "value": ... || "..." || {...},  // optional
    "name": "...",  // optional
    "args": [{...}, ...],  // optional
    "condition": [{...}, ...] || {...},  // optional
    "then": [{...}, ...] || {...},  // optional
    "else": [{...}, ...] || {...},  // optional
    "body": [{...}, ...] || {...},  // optional
    "children": [{...}, ...]  // optional
}
```

