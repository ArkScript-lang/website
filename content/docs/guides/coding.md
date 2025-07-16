---
title: "Coding guidelines"
slug: "coding_guidelines"
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

{{< highlight_scripts >}}

## Definitions

- *guideline*: general rule applying to ArkScript code, which must be followed when contributing to the standard library and examples of the main repository
- *standard library (aka lib)*: the files and functions in the `lib` folder
- *builtins*: functions and constants defined through C++ code, available without having to import anything
- *module*: C++ plugin for the ArkScript virtual machine, allowing use of C++ code (eg: the SFML)

## Precisions

Indentation matters to us, programmers (but not to the compiler): 4 spaces or a single tab, but it should stay consistent across a project/file.

The general rule of thumb is that a closing parenthesis should never be to the left of its matching opening parenthesis. All new lines should be a couple of spaces to the right of the opening parenthesis of the list they're in.

## Naming convention

Functions and constants (the ones in the lib and in the builtins) are named following the convention described in [the naming guidelines](/docs/guides/naming).

## Code formatting

- Indent the content of every `begin` block
- When using begin blocks in if (then, else), they should appear clearly as a block, each opening brace on its own line
- When using begin blocks in functions (body), they can appear as an independent block (initial `(begin` or `{` on its own line) or not (initial `(begin` or `{` on the same line as the `fun` keyword)
- Closing braces are stacked together, and never preceded by a newline
    - If the last instruction wasn't a function call but a variable, a space should be put between those two

Complete example:

{{< highlight_arkscript >}}
(let foo (fun (a) {
    (if (= a 2)
        {
            (print "a = 2")
            (egg (* 2 a))}
        {
            (print "a != 2")
            (egg 0)})}))

(let bar (fun (b c) {
    (let boop (+ b c))
    boop })
{{< /highlight_arkscript >}}

## Standard library functions and constants' documentation

Each function and constant defined in the standard library should be documented, using [ArkDoc](/docs/guides/arkdoc) format.

