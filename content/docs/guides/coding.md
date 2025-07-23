---
title: "Coding guidelines"
slug: "coding_guidelines"
description: ""
summary: ""
date: 2025-07-14T19:29:13+02:00
lastmod: 2025-07-14T19:29:13+02:00
draft: false
weight: 201
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
- *standard library (aka lib)*: the files and functions in the `lib/std` folder of `ArkScript-lang/Ark`
- *builtins*: functions and constants defined through C++ code, available without having to import anything
- *module*: C++ plugin for the ArkScript virtual machine, allowing use of C++ code (eg: the SFML)

## Precisions

Indentation matters to us, programmers (but not to the compiler):

- for C++: 4 spaces,
- for ArkScript: 2 spaces.

The general rule of thumb is that a closing parenthesis should never be to the left of its matching opening parenthesis. All new lines should be a couple of spaces to the right of the opening parenthesis of the list they're in. Example:

{{< highlight_arkscript >}}
# demonstration of the creation of a function
# we create a constant named fact, and put a function in it
# taking a single argument, n
(let fact (fun (n) {
  (mut a 1)
  (mut acc 2)

  # then we use a loop (for loops doesn't exist in ArkScript)
  (while (<= acc n) {
    (set a (* a acc))
    # thus we need to increment the accumulator ourselves
    (set acc (+ 1 acc)) })
  # the return value
  a }))

# then we call the function we just created
(print "Factorial 6 (with loop and acc): " (fact 6))
{{< /highlight_arkscript >}}

## ArkScript guidelines

### Naming convention

Functions and constants (the ones in the lib and in the builtins) are named following the convention described in [the naming guidelines](/docs/guides/naming).

### Code formatting

- Indent the content of every `begin` block
- When using begin blocks in if (then, else), they should appear clearly as a block, each opening brace on its own line
- When using begin blocks in functions (body), they have to appear on the same line as the `fun` keyword (`(begin` or `{`)
- Closing braces are stacked together, and never preceded by a newline
    - If the last instruction wasn't a function call but a variable, a space should be put between those two

Complete example:

{{< highlight_arkscript >}}
(let foo (fun (a) {
  (if (= a 2)
    {
      (print "a = 2")
      (egg (* 2 a)) }
    {
      (print "a != 2")
      (egg 0) })}))

(let bar (fun (b c) {
  (let boop (+ b c))
  boop })
{{< /highlight_arkscript >}}

### Standard library functions and constants' documentation

Each function and constant defined in the standard library should be documented, using [ArkDoc](/docs/guides/arkdoc) format.

## C++ coding guidelines

* Avoid `auto` whenever possible. Using it is tolerated for complex types such as iterators
* Indent with **4 spaces**
* Every brace (`{`, `}`) must be on its own line
* Conditions with a single statement (eg `if (condition) do_this();`) do not need to be enclosed in braces
* Put a space between `for`, `while`, `if` and `(...)`, around each `=` sign (wherever it is, even in for-loops), between `#include` and the file to include
* Prefer `enum class` over `enum`
* Left-const over right-const
* The `*` and `&` are part of the type:

```cpp
// AVOID THIS
int *i = new int(5);
int &j = k;

// PREFERRED
int* i = new int(5);
int& j = k;
```
* Naming:
    * Methods and functions: camelCase
    * Variables: snake_case
    * Constant expressions: PascalCase
    * Enumeration members: PascalCase
* For-each loops should use const references or rvalue references instead of plain copies:

```cpp
// AVOID THIS
for (auto value : container)

// PREFERRED
for (const auto& value : container)
for (auto&& value : container)
```
* For-loops should be optimized whenever possible, as follows:
```cpp
// AVOID THIS
for (std::size_t i = 0; i < container.size(); ++i)
    ...

// PREFERRED
for (std::size_t i = 0, end = container.size(); i < end; i++)
    ...
```
* Header-guards should be written using `#ifndef`, `#define` and `#endif`, the define being in MACRO_CASE
* Functions and methods which can not throw exceptions must be marked `noexcept`
* Functions and methods returning booleans (or values that have a meaning) should be marked `[[nodiscard]]`
* In header files, have a blank line between each method / function / structure / constant ; also put blank lines around include blocks
* In classes, avoid using `this`. Prefix every member variable with `m_`
* In classes, do not define the methods in the header file, only in the source file (unless they are `inline` or templated)
* Add Doxygen file comments at the top of each newly created header file:

```cpp
/**
 * @file Lexer.hpp
 * @author Lex Plateau (lexplt.dev@gmail.com)
 * @brief Tokenize ArkScript code
 * @date 2020-10-27
 *
 * @copyright Copyright (c) 2025
 *
 */

#include <bla>

code...
```

Snippet to recapitulate guidelines for headers:

```cpp
/**
 * @file Lexer.hpp
 * @author Lex Plateau (lexplt.dev@gmail.com)
 * @brief Tokenize ArkScript code
 * @date 2020-10-27
 *
 * @copyright Copyright (c) 2020
 *
 */

#ifndef HEADER_GUARD
#define HEADER_GUARD

#include <Ark/Compiler/Something.hpp>
#include <vector>

namespace Ark
{
    /**
     * @brief doxygen documentation about the class
     *
     */
    class Lexer
    {
    public:
        /**
         * @brief doxygen documentation here
         *
         */
        Lexer();

        /**
         * @brief doxygen documentation here
         *
         * @param a_parameter defines the power of the flux capacitor
         */
        void aMethod(const std::string& a_parameter);

    private:
        int m_member;  ///< This is a doxygen comment
    };
}

#endif  // Adding an empty line at the end of each file is strongly advised
```

