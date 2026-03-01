---
title: "Debugging ArkScript code"
slug: "debugging"
description: ""
summary: ""
date: 2026-01-17T19:25:20+02:00
lastmod: 2026-01-17T19:25:20+02:00
draft: false
weight: 302
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

{{< highlight_scripts >}}

ArkScript has a debugger built into its VM, that usually do not trigger, unless you pass the command flag `-fdebugger` to the CLI. It also doesn't trigger by default when using ArkScript as an embedded scripting language.

## Debugger's commands

- `help`: prints the available commands
- `c` or `continue`: resume execution
- `q` or `quit`: quit the debugger and stop the script execution
- `locals <n>`: display the last `n` locals in the current scope (default: 5)
- `stack <n>`: display the last `n` values on the stack (default: 5)

## Using the debugger on error

The most common way you will want to use the debugger is to diagnose crashes. If your script crashes, run it again like so: `arkscript -fdebugger script.ark <optional script arguments here>`.

When it crashes, the debugger will start, and you will be able to write ArkScript code to understand what happened.

Example input:

{{< highlight_arkscript >}}
(let a 5)
(print (@ a 0))
{{< /highlight_arkscript >}}

Shell output:

```text
arkscript -fdebugger script.ark
Function @ expected 2 arguments
Call
  ↳ (@ 5 0)
Signature
  ↳ (@ src idx)
Arguments
  → `src' (expected List), got 5 (Number)
  → `idx' (expected Number) ✓

Alternative 2:
Signature
  ↳ (@ src idx)
Arguments
  → `src' (expected String), got 5 (Number)
  → `idx' (expected Number) ✓

In file a.ark:2
    1 | (let a 5)
    2 | (print (@ a 0))
      | ^~~~~~~~~~~~~~
    3 |

At IP: 3, PP: 0, SP: 2
dbg[pp:0,ip:12]:000>
```

We can write `(print (type a))` to have more information:

```text
dbg[pp:0,ip:12]:000> (print (type a))
Number
nil
dbg[pp:0,ip:12]:001>
```

and the debugger will happily execute our code and wait for more. We can quit our session by entering `q` or `quit`.

## Placing breakpoints

The second usage of the debugger is to be able to step through code, to understand what's going on.

For this, we will place `breakpoint`s inside our code, to stop the execution of the code momentarily, and spawn the debugger to be able to inspect the variables' values and call some functions to verify our intuitions.

Example:

{{< highlight_arkscript >}}
(let a 5)
(let b 6)
(breakpoint)
(print (format "ark: after first breakpoint, a={}, b={}" a b))

(let foo (fun (x y z) {
  (breakpoint (= x 5))
  (print "ark: in (foo x y z), after second breakpoint")
  (+ x y z) }))

(print (foo a b 7))
(print "ark: end of script")
{{< /highlight_arkscript >}}

`(breakpoint)` and `(breakpoint cond)` do not push anything to the VM's stack, so we can more or less put them everywhere to stop execution whenever we want. The second form takes a boolean value to trigger (or not) the breakpoint, which is useful when debugging a loop or a function call with only a specific set of arguments.

If we run the debugger on this program, we can step through the code **and modify values as we want**:

```text
arkscript -fdebugger script.ark

In file a.ark:3
    1 | (let a 5)
    2 | (let b 6)
    3 | (breakpoint)
      | ^~~~~~~~~~~
    4 | (print (format "ark: after first breakpoint, a={}, b={}" a b))
    5 |

dbg[pp:0,ip:12]:000> (set b 10)
dbg[pp:0,ip:12]:001> (print (+ a b))
15
nil
dbg[pp:0,ip:12]:002> c
dbg: continue
ark: after first breakpoint, a=5, b=10
```

Here, we have updated the value of `b` from 6 to 10.

As said before, we can also call functions from the debugger:

```text
In file a.ark:7
    4 | (print (format "ark: after first breakpoint, a={}, b={}" a b))
    5 |
    6 | (let foo (fun (x y z) {
    7 |   (breakpoint (= x 5))
      |   ^~~~~~~~~~~~~~~~~~~
    8 |   (print "ark: in (foo x y z), after second breakpoint")
    9 |   (+ x y z) }))

dbg[pp:1,ip:28]:000> (foo 6 7 8)
ark: in (foo x y z), after second breakpoint
21
dbg[pp:1,ip:28]:001> c
dbg: continue
ark: in (foo x y z), after second breakpoint
22
ark: end of script
```

On the second breakpoint (inside the function `foo`), we called `(foo 6 7 8)`, and resumed execution with `c`.

