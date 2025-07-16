---
title: "Bytecode specification"
slug: "bytecode"
description: "ArkScript bytecode specification"
summary: ""
date: 2025-07-14T18:00:50+02:00
lastmod: 2025-07-14T18:00:50+02:00
draft: false
weight: 999
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

You will find ArkScript bytecode specification on page, if you are interested in implementing your own virtual machine, or just want to learn more.

## ArkScript bytecode headers

| Name | Size | Description |
| ---- | ---- | ----------- |
| Magic number | 4 bytes | `6386283`, numeric version of `"ark\0"` |
| Compiler.Major | 2 bytes | Big endian layout |
| Compiler.Minor | 2 bytes | Big endian layout |
| Compiler.Patch | 2 bytes | Big endian layout |
| Timestamp | 8 bytes | Build time (Unix format), Big endian layout |
| SHA256 | 32 bytes | SHA256 of the tables and code segments for integrity check |

## Bytecode tables

### Symbols table

| Name | Size | Description |
| ---- | ---- | ----------- |
| Symbols.count | 2 bytes | Big endian layout |
| Symbol.value | Variable | Null-terminated string |

### Values table

| Name | Size | Description |
| ---- | ---- | ----------- |
| Values.count | 2 bytes | Big endian layout |
| Value.type | 1 byte | `F1` for number, `F2` for string, `F3` for function |
| Number.value | 12 bytes | Exponent on 4 bytes, mantissa on 8, null terminated, little endian |
| String.value | Variable | Null-terminated string |
| Function.value | 2 bytes | Big endian layout |

### Filenames table

| Name | Size | Description |
| ---- | ---- | ----------- |
| Filenames.count | 2 bytes | Big endian layout |
| Filename.value | Variable | Null-terminated string |

### Instruction location table

| Name | Size | Description |
| ---- | ---- | ----------- |
| InstLocs.count | 2 bytes | Big endian layout |
| InstLoc.page_pointer | 2 bytes | Big endian layout |
| InstLoc.instruction_pointer | 2 bytes | Big endian layout |
| InstLoc.filename_id (refer to the Filenames table) | 2 bytes | Big endian layout |
| InstLoc.source_line (line in the source file, starting at 0) | 4 bytes | Big endian layout |

## Code segments

| Name | Size | Description |
| ---- | ---- | ----------- |
| Instruction count | 2 bytes | Big endian layout, can be `0` |
| Instruction | 4 bytes | *See below* |

*Standard Instructions* with a single immediate arguments follow this layout: `iiiiiiii pppppppp dddddddd dddddddd`.
- `p` for padding (ignored), `i` for the instruction, `code d` for the immediate argument.

*Super Instructions*, with two immediate arguments, follow this layout: `iiiiiiii ssssssss ssssxxxx xxxxxxxx`.
- `s` for the second argument (on 12 bits), `x` for the primary argument (on 12 bits as well).

Using this representation, computing the primary argument is as easy as `arg_16_bits & 0x0fff`, with `arg_16_bits` the primary argument for instructions with a single argument.

## Note on builtins

Builtins are handled with `BUILTIN id`, with `id` being the id of the builtin function object. The ids of the builtins are listed below.

| Name | ID |
| ---- | -- |
| false | 0 |
| true | 1 |
| nil | 2 |

The other builtins are listed in [src/arkreactor/Builtins/Builtins.cpp](https://github.com/ArkScript-lang/Ark/blob/dev/src/arkreactor/Builtins/Builtins.cpp#L24).

## The stack and the locals

The stack is used for passing temporary values around, for example the arguments of a function. On the other end the locals are there to store long term values, the variables.
They are stored in a LIFO stack and should be referenced by there identifier (index in the symbols table, also used by instructions like `LOAD_SYMBOL`).

The locals are backed by a `std::array<ScopeView::pair_t, ScopeStackSize>`, and accessed through `ScopeView`, which allows locals to be contiguous, (instead of having a `std::vector<std::vector<pair_t>>`]). This allows us to have a specialized instruction `LOAD_SYMBOL_BY_INDEX` to load a local by its distance to the top of the locals stack (0 means the last local, 1 means the previous one, 2 the penultimate...).

![Scopes](/images/scopes.png)

## Function calling convention

If we want to call a function `foo`, eg by writing `(foo 1 2 3)`, the arguments will be pushed in reverse order on the stack.

First, push 3, then 2, then 1.

In the end, our stack looks like this:

```
1   <-- Top of the stack
2
3
... <-- Bottom of the stack
```

Hence, we can retrieve the arguments in the correct order. However, this has the effect of inverting the order of evaluation of the arguments, if we pass expressions to our function: `(foo (+ 1 2) (* 3 4) (- 5 6))`, the expression `(+ 1 2)` will be evaluated **last**, while `(- 5 6)` will be evaluated first.

## Instructions

`TS` represents the element at the top of the stack, `TS1` represents the element below it, and so on.

<!-- Insert generated content from ArkScript-lang/Ark/docs/gen_instructions_documentation.py here -->
| Code | Argument(s) | Job |
| ---- | ----------- | --- |
| `NOP` (0x00) |  | Does nothing, useful for padding |
| `LOAD_SYMBOL` (0x01) | symbol id | Load a symbol from its ID onto the stack |
| `LOAD_SYMBOL_BY_INDEX` (0x02) | stack index | Load a symbol from the locals stack by its index (starting from the end of the current scope) |
| `LOAD_CONST` (0x03) | constant id | Load a constant from its ID onto the stack |
| `POP_JUMP_IF_TRUE` (0x04) | absolute address to jump to | Jump to the provided address if the last value on the stack was equal to true. Remove the value from the stack no matter what it is |
| `STORE` (0x05) | symbol id | Take the value on top of the stack and create a variable in the current scope, named following the given symbol id (cf symbols table) |
| `SET_VAL` (0x06) | symbol id | Take the value on top of the stack and put it inside a variable named following the symbol id (cf symbols table), in the nearest scope. Raise an error if it couldn't find a scope where the variable exists |
| `POP_JUMP_IF_FALSE` (0x07) | absolute address to jump to | Jump to the provided address if the last value on the stack was equal to false. Remove the value from the stack no matter what it is |
| `JUMP` (0x08) | absolute address to jump to | Jump to the provided address |
| `RET` (0x09) |  | If in a code segment other than the main one, quit it, and push the value on top of the stack to the new stack; should as well delete the current environment. Otherwise, acts as a `HALT` |
| `HALT` (0x0a) |  | Stop the Virtual Machine |
| `PUSH_RETURN_ADDRESS` (0x0b) |  | push pp, then ip on the stack, preparing for a call instruction |
| `CALL` (0x0c) | argument count | Call function from its symbol id located on top of the stack. Take the given number of arguments from the top of stack and give them to the function (the first argument taken from the stack will be the last one of the function). The stack of the function is now composed of its arguments, from the first to the last one |
| `CAPTURE` (0x0d) | symbol id | Tell the Virtual Machine to capture the variable from the current environment. Main goal is to be able to handle closures, which need to save the environment in which they were created |
| `BUILTIN` (0x0e) | builtin id | Push the corresponding builtin function object on the stack |
| `DEL` (0x0f) | symbol id | Remove a variable/constant named following the given symbol id (cf symbols table) |
| `MAKE_CLOSURE` (0x10) | constant id | Push a Closure with the page address pointed by the constant, along with the saved scope created by CAPTURE instruction(s) |
| `GET_FIELD` (0x11) | symbol id | Read the field named following the given symbol id (cf symbols table) of a `Closure` stored in TS. Pop TS and push the value of field read on the stack |
| `PLUGIN` (0x12) | constant id | Load a plugin dynamically, plugin name is stored as a string in the constants table |
| `LIST` (0x13) | number of elements | Create a list from the N elements pushed on the stack. Follows the function calling convention |
| `APPEND` (0x14) | number of elements | Append N elements to a list (TS). Elements are stored in TS(1)..TS(N). Follows the function calling convention |
| `CONCAT` (0x15) | number of elements | Concatenate N lists to a list (TS). Lists to concat to TS are stored in TS(1)..TS(N). Follows the function calling convention |
| `APPEND_IN_PLACE` (0x16) | number of elements | Append N elements to a reference to a list (TS), the list is being mutated in-place, no new object created. Elements are stored in TS(1)..TS(N). Follows the function calling convention |
| `CONCAT_IN_PLACE` (0x17) | number of elements | Concatenate N lists to a reference to a list (TS), the list is being mutated in-place, no new object created. Lists to concat to TS are stored in TS(1)..TS(N). Follows the function calling convention |
| `POP_LIST` (0x18) |  | Remove an element from a list (TS), given an index (TS1). Push a new list without the removed element to the stack |
| `POP_LIST_IN_PLACE` (0x19) |  | Remove an element from a reference to a list (TS), given an index (TS1). The list is mutated in-place, no new object created |
| `SET_AT_INDEX` (0x1a) |  | Modify a reference to a list or string (TS) by replacing the element at TS1 (must be a number) by the value in TS2. The object is mutated in-place, no new object created |
| `SET_AT_2_INDEX` (0x1b) |  | Modify a reference to a list (TS) by replacing TS[TS2][TS1] by the value in TS3. TS[TS2] can be a string (if it is, TS3 must be a string). The object is mutated in-place, no new object created |
| `POP` (0x1c) |  | Remove the top of the stack |
| `SHORTCIRCUIT_AND` (0x1d) |  | Pop the top of the stack, if it's false, jump to an address |
| `SHORTCIRCUIT_OR` (0x1e) |  | Pop the top of the stack, if it's true, jump to an address |
| `CREATE_SCOPE` (0x1f) |  | Create a new local scope |
| `RESET_SCOPE_JUMP` (0x20) |  | Reset the current scope so that it is empty, and jump to a given location |
| `POP_SCOPE` (0x21) |  | Destroy the last local scope |
| `GET_CURRENT_PAGE_ADDR` (0x22) | symbol id (function name) | Push the current page address as a value on the stack |
| `ADD` (0x23) |  | Push `TS1 + TS` |
| `SUB` (0x24) |  | Push `TS1 - TS` |
| `MUL` (0x25) |  | Push `TS1 * TS` |
| `DIV` (0x26) |  | Push `TS1 / TS` |
| `GT` (0x27) |  | Push `TS1 > TS` |
| `LT` (0x28) |  | Push `TS1 < TS` |
| `LE` (0x29) |  | Push `TS1 <= TS` |
| `GE` (0x2a) |  | Push `TS1 >= TS` |
| `NEQ` (0x2b) |  | Push `TS1 != TS` |
| `EQ` (0x2c) |  | Push `TS1 == TS` |
| `LEN` (0x2d) |  | Push `len(TS)`, TS must be a list |
| `EMPTY` (0x2e) |  | Push `empty?(TS)`, TS must be a list or string |
| `TAIL` (0x2f) |  | Push `tail(TS)`, all the elements of TS except the first one. TS must be a list or string |
| `HEAD` (0x30) |  | Push `head(TS)`, the first element of TS or nil if empty. TS must be a list or string |
| `ISNIL` (0x31) |  | Push true if TS is nil, false otherwise |
| `ASSERT` (0x32) |  | Throw an exception if TS1 is false, and display TS (must be a string). Do not push anything on the stack |
| `TO_NUM` (0x33) |  | Convert TS to number (must be a string) |
| `TO_STR` (0x34) |  | Convert TS to string |
| `AT` (0x35) |  | Push the value at index TS (must be a number) in TS1, which must be a list or string |
| `AT_AT` (0x36) |  | Push the value at index TS (must be a number), inside the list or string at index TS1 (must be a number) in the list at TS2 |
| `MOD` (0x37) |  | Push `TS1 % TS` |
| `TYPE` (0x38) |  | Push the type of TS as a string |
| `HASFIELD` (0x39) |  | Check if TS1 is a closure field of TS. TS must be a Closure, TS1 a String |
| `NOT` (0x3a) |  | Push `!TS` |
| `LOAD_CONST_LOAD_CONST` (0x3b) | constant id, constant id | Load two consts (`primary` then `secondary`) on the stack in one instruction |
| `LOAD_CONST_STORE` (0x3c) | constant id, symbol id | Load const `primary` into the symbol `secondary` (create a variable) |
| `LOAD_CONST_SET_VAL` (0x3d) | constant id, symbol id | Load const `primary` into the symbol `secondary` (search for the variable with the given symbol id) |
| `STORE_FROM` (0x3e) | symbol id, symbol id | Store the value of the symbol `primary` into a new variable `secondary` |
| `STORE_FROM_INDEX` (0x3f) | symbol index, symbol id | Store the value of the symbol `primary` into a new variable `secondary` |
| `SET_VAL_FROM` (0x40) | symbol id, symbol id | Store the value of the symbol `primary` into an existing variable `secondary` |
| `SET_VAL_FROM_INDEX` (0x41) | symbol index, symbol id | Store the value of the symbol `primary` into an existing variable `secondary` |
| `INCREMENT` (0x42) | symbol id, count | Increment the variable `primary` by `count` and push its value on the stack |
| `INCREMENT_BY_INDEX` (0x43) | symbol index, count | Increment the variable `primary` by `count` and push its value on the stack |
| `INCREMENT_STORE` (0x44) | symbol id, count | Increment the variable `primary` by `count` and store its value in the given symbol id |
| `DECREMENT` (0x45) | symbol id, count | Decrement the variable `primary` by `count` and push its value on the stack |
| `DECREMENT_BY_INDEX` (0x46) | symbol index, count | Decrement the variable `primary` by `count` and push its value on the stack |
| `DECREMENT_STORE` (0x47) | symbol id, count | Decrement the variable `primary` by `count` and store its value in the given symbol id |
| `STORE_TAIL` (0x48) | symbol id, symbol id | Load the symbol `primary`, compute its tail, store it in a new variable `secondary` |
| `STORE_TAIL_BY_INDEX` (0x49) | symbol index, symbol id | Load the symbol `primary`, compute its tail, store it in a new variable `secondary` |
| `STORE_HEAD` (0x4a) | symbol id, symbol id | Load the symbol `primary`, compute its head, store it in a new variable `secondary` |
| `STORE_HEAD_BY_INDEX` (0x4b) | symbol index, symbol id | Load the symbol `primary`, compute its head, store it in a new variable `secondary` |
| `STORE_LIST` (0x4c) | number, symbol id | Create a list of `number` elements, and store it in a new variable `secondary` |
| `SET_VAL_TAIL` (0x4d) | symbol id, symbol id | Load the symbol `primary`, compute its tail, store it in an existing variable `secondary` |
| `SET_VAL_TAIL_BY_INDEX` (0x4e) | symbol index, symbol id | Load the symbol `primary`, compute its tail, store it in an existing variable `secondary` |
| `SET_VAL_HEAD` (0x4f) | symbol id, symbol id | Load the symbol `primary`, compute its head, store it in an existing variable `secondary` |
| `SET_VAL_HEAD_BY_INDEX` (0x50) | symbol index, symbol id | Load the symbol `primary`, compute its head, store it in an existing variable `secondary` |
| `CALL_BUILTIN` (0x51) | builtin id, argument count | Call a builtin by its id in `primary`, with `secondary` arguments. Bypass the stack size check because we do not push IP/PP since builtins calls do not alter the stack |
| `CALL_BUILTIN_WITHOUT_RETURN_ADDRESS` (0x52) | builtin id, argument count | Call a builtin by its id in `primary`, with `secondary` arguments. Bypass the stack size check because we do not push IP/PP since builtins calls do not alter the stack, as well as the return address removal |
| `LT_CONST_JUMP_IF_FALSE` (0x53) | constant id, absolute address to jump to | Compare `TS < constant`, if the comparison fails, jump to the given address. Otherwise, does nothing |
| `LT_CONST_JUMP_IF_TRUE` (0x54) | constant id, absolute address to jump to | Compare `TS < constant`, if the comparison succeeds, jump to the given address. Otherwise, does nothing |
| `LT_SYM_JUMP_IF_FALSE` (0x55) | symbol id, absolute address to jump to | Compare `TS < symbol`, if the comparison fails, jump to the given address. Otherwise, does nothing |
| `GT_CONST_JUMP_IF_TRUE` (0x56) | constant id, absolute address to jump to | Compare `TS > constant`, if the comparison succeeds, jump to the given address. Otherwise, does nothing |
| `GT_CONST_JUMP_IF_FALSE` (0x57) | constant id, absolute address to jump to | Compare `TS > constant`, if the comparison fails, jump to the given address. Otherwise, does nothing |
| `GT_SYM_JUMP_IF_FALSE` (0x58) | symbol id, absolute address to jump to | Compare `TS > symbol`, if the comparison fails, jump to the given address. Otherwise, does nothing |
| `EQ_CONST_JUMP_IF_TRUE` (0x59) | constant id, absolute address to jump to | Compare `TS == constant`, if the comparison succeeds, jump to the given address. Otherwise, does nothing |
| `EQ_SYM_INDEX_JUMP_IF_TRUE` (0x5a) | symbol index, absolute address to jump to | Compare `TS == symbol`, if the comparison succeeds, jump to the given address. Otherwise, does nothing |
| `NEQ_CONST_JUMP_IF_TRUE` (0x5b) | constant id, absolute address to jump to | Compare `TS != constant`, if the comparison succeeds, jump to the given address. Otherwise, does nothing |
| `NEQ_SYM_JUMP_IF_FALSE` (0x5c) | symbol id, absolute address to jump to | Compare `TS != symbol`, if the comparison fails, jump to the given address. Otherwise, does nothing |
| `CALL_SYMBOL` (0x5d) | symbol id, argument count | Call a symbol by its id in `primary`, with `secondary` arguments |
| `CALL_CURRENT_PAGE` (0x5e) | symbol id (function name), argument count | Call the current page with `secondary` arguments |
| `GET_FIELD_FROM_SYMBOL` (0x5f) | symbol id, field id in symbols table | Push the field of a given symbol (which has to be a closure) on the stack |
| `GET_FIELD_FROM_SYMBOL_INDEX` (0x60) | symbol index, field id in symbols table | Push the field of a given symbol (which has to be a closure) on the stack |
| `AT_SYM_SYM` (0x61) | symbol id, symbol id2 | Push symbol[symbol2] |
| `AT_SYM_INDEX_SYM_INDEX` (0x62) | symbol index, symbol index2 | Push symbol[symbol2] |
| `CHECK_TYPE_OF` (0x63) | symbol id, constant id | Check that the type of symbol is the given constant, push true if so, false otherwise |
| `CHECK_TYPE_OF_BY_INDEX` (0x64) | symbol index, constant id | Check that the type of symbol is the given constant, push true if so, false otherwise |
| `APPEND_IN_PLACE_SYM` (0x65) | symbol id, number of elements | Append N elements to a reference to a list (symbol id), the list is being mutated in-place, no new object created. Elements are stored in TS(1)..TS(N). Follows the function calling convention |
| `APPEND_IN_PLACE_SYM_INDEX` (0x66) | symbol index, number of elements | Append N elements to a reference to a list (symbol index), the list is being mutated in-place, no new object created. Elements are stored in TS(1)..TS(N). Follows the function calling convention |

