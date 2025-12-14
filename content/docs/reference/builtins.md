---
title: "Builtins in ArkScript"
slug: "builtins"
description: ""
summary: ""
date: 2025-07-14T19:08:19+02:00
lastmod: 2025-07-14T19:08:19+02:00
draft: false
weight: 501
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

Those are C++ functions, using the ArkScript virtual machine API to communicate with it. They can be used as any other function in ArkScript code.

## Basic template of a builtin

```cpp
#include <Ark/VM/VM.hpp>
#include <Ark/VM/Value.hpp>

Ark::Value myBuiltin(std::vector<Ark::Value>& parameters, Ark::VM* vm)
{
    return Ark::Nil;
}
```

Inside the VM, they are all prefixed by `builtin__`, and then remapped in their corresponding category in the standard library.  
Eg `builtin__list:sort` will have a definition inside `std/List.ark` as `(let sort (fun (_L) (builtin__list:sort _L)))`.

See [the tutorial on embedding](/docs/tutorials/embedding) for more details on how to use them.

## Builtins category

We currently have a few categories for our builtins:

- IO, prefixed by `io:` in ArkScript
- List, prefixed by `list:` in ArkScript
- Mathematics, prefixed by `math:` in ArkScript
- String, prefixed by `string:` in ArkScript
- System, prefixed by `sys:` in ArkScript
- Time, prefixed by nothing in ArkScript

## Adding a builtin

1. You need to identify the category it belongs to
2. Then add its prototype in `include/Ark/Builtins/Builtins.hpp` under the right namespace
3. Add it to the builtins list in `src/arkreactor/Builtins/Builtins.cpp`, as follows: `{ "builtin__<name>", Value(category::functionName) }`
4. The implementation will have to be done in `src/arkreactor/Builtins/{category}.cpp`
5. Add a proxy inside `lib/std/{category}.ark` as `(let <name> (fun (args...) (builtin__<name> args...)))`
    - **Warning**: You **cannot** use *argument attributes* for those proxy functions!
6. Don't forget to document the new function **in the standard library**, using [ArkDoc](/docs/reference/arkdoc)

