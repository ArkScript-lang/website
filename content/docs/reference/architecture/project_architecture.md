---
title: "ArkScript architecture"
slug: "architecture"
description: ""
summary: ""
date: 2025-07-14T19:29:13+02:00
lastmod: 2025-07-14T19:29:13+02:00
draft: false
weight: 999
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

## Global architecture

The `src/` folder is divided in two subfolders:
- `arkreactor/`, the compiler and the runtime
- `arkscript/`, the CLI and the REPL

## Builtins

All the builtin functions (and constants) are located in `include/Ark/Builtins`. Those can be used with the bytecode instructions `BUILTIN id`. Adding one will need to reference it in `include/Ark/Builtins/Builtins.hpp` and in `src/arkreactor/Builtins/Builtins.cpp`, and then implementing it accordingly under `src/arkreactor/Builtins/<file>.cpp`.

For more details on how to implement a module see [the reference](/docs/reference/builtins).

## Compiler

All the compiler passes are located under `include/Ark/Compiler/`.

- the Welder calls the Parser on a given piece of code
    - the Parser returns an AST
- the ImportSolver is called to resolve any `import` left
    - the Parser returns an AST for each file
    - the AST are aggregated into one
- the Welder calls the Macro Processor on the ImportSolver final's AST, to process and remove macros from the AST
- the Welder calls the Name Resolver on the Macro Processor final's AST, to resolve names, prefixes and packages. It also checks for undefined symbols, constness violations and constant redefinitions
- the Welder calls the AST optimizer on the Name Resolver's AST to remove dead code
- the Compiler generates IR for the IR Optimizer from the modified AST
- the IR Optimizer replaces some groups of 2 or more instructions with super instructions (one instruction doing specialized work)
- the IR Compiler compiles the modified IR to bytecode, which can be used as is by the virtual machine, or be saved to a file

For more details on how it works, see [the implementation details](/docs/reference/architecture/compiler).

## REPL (read-eval-print-loop)

It is located under `include/CLI/REPL/`. Basically it's an abstraction level over `replxx` (external library for completion and coloration in the shell) and our virtual machine to run user inputs.

## Virtual Machine

It lies under `include/Ark/VM/` and all the folders under it.

TODO: check that the VM still uses shared_ptr for the closures scopes ; also add a word about the locals handling since it changed, to use a single backing array?

- it handles the Closures which capture whole Scopes through `shared_ptr`. Closures are functions with a saved scope, so they can retain information over multiple calls
- the Plugin loader is a generic DLL / SO / DYNLIB loader, used by the virtual machine to load ArkScript modules (`.arkm` files)
- the Scope is how we store our mapping `variable id => value`, heavily optimized for our needs
- the State is:
   - reading bytecode
   - decoding it
   - filling multiple tables with it (symbol table, value table, code pages), which are then used by the virtual machine. It allows us to load a single ArkScript bytecode file and use it in multiple virtual machines.
   - the State retains tables which are **never altered** by the virtual machines
   - it can also compile ArkScript code and files on the go, and run them right away
- the UserType is how we store C++ types unknown to our virtual machine, to use them in ArkScript code
- the Value is a very big proxy class to a `variant` to store our types (std::string, double, Closure, UserType and more), thus **it must stay small** because it's the primitive type of the virtual machine and the language. It provides proxy functions to the underlying `variant`.
- the virtual machine handles:
   - the stack, a single `array<Value, 8192>` (the stack size is a constexpr value, thus it can be changed only at compile time)
   - a reference to the State, to read the tables and code segments
   - a `void*` user_data, retrievable by modules and C++ user functions
   - the scopes, and their destruction
   - the instructions, executed in `safeRun` which is enclosed in a try/catch to display tracebacks when errors occur
   - external function calls through its private `call` method (to call modules' functions and builtins)
   - value resolving, useful for modules when a function receives an ArkScript function, through the public method `resolve`

For more details, see [the implementation details](/docs/reference/architecture/vm).

If you feel that this section is lacking information, please [open an issue](https://github.com/ArkScript-lang/website/issues/new).

