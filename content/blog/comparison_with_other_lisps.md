---
title: 'Comparison with other Lisps'
date: 2025-07-30T18:52:45+02:00
categories: []
tags: []
contributors: ['Lex Plt']
pinned: true
homepage: false
draft: false
---

**This article is still a work in progress, send me your thoughts on [Mastodon](https://hachyderm.io/@lexplt)!**

---

{{< highlight_scripts >}}

According to [Paul Graham](https://en.wikipedia.org/wiki/Paul_Graham_(programmer)), there are 9 important aspects that [differentiate Lisp from other languages](https://en.wikipedia.org/wiki/Lisp_(programming_language)#Language_innovations). From those 9, ArkScript has 8 (it does not have garbage collection, but instead relies on scopes, like C++, its host language).

Let's see how ArkScript differs from other Lisp.

## Paradigms supported

ArkScript tries to be functional, by providing all the tools needed to the user to be used as a functional language. However it still supports imperative programming, and its standard library makes heavy use of it, where it can improve performances.

Common Lisp supports functional programming, while also allowing mutable state and imperative programming like ArkScript, while Clojure strongly encourages (sometimes insists) that you program in a functional way.

## Syntax wise

### Declaring variables

`let` in Common Lisp creates a scope for local variables, and it has a body using the declared local variables. In ArkScript, `let` is used to declare an immutable variable and doesn't return anything.

```lisp
;; Common Lisp
(let ((a 6)
      (b 4))
  (+ a b))
```

{{< highlight_arkscript >}}
# ArkScript
(let a 6)
(let b 4)
(let res (+ a b))
{{< /highlight_arkscript >}}

### Defining functions

Common Lisp uses a `defun` macro, which may include documentation:

```lisp
(defun square (x)
  "Calculates the square of the single-float x."
  (declare (single-float x) (optimize (speed 3) (debug 0) (safety 1)))
  (the single-float (* x x)))
```

In ArkScript, we use the keyword `fun` and [ArkDoc](/docs/reference/arkdoc) to document our functions:

{{< highlight_arkscript >}}
# @brief Calculates the square of the float x
# @param x a floating number
# =begin
# (print (square 11.2))  # => 125.44
# =end
# @author https://github.com/SuperFola
(let square (fun (x)
  (* x x)))
{{< /highlight_arkscript >}}

ArkScript has tail call optimizations but no first-class continuation support, Clojure has no TCO (due to compiling for the JVM) and no first-class continuation support either.

However, both languages support continuation-passing-style since they both support anonymous functions.

## Data types

ArkScript supports:

- boolean, in the form of `true` and `false`
- list: `(list)` (equivalent to `[]`), `[1 2 3]` ; `list` is a builtin, `[]` is syntactic sugar. Internally, lists are implemented using arrays and not linked lists.
- dict: `(dict)`, `(dict "key" "value")` ; `dict` is a builtin and we must follow the function call syntax of ArkScript to use it
- numbers: `-1`, `0.123465`, `123e2`
- strings: `"hello world"`
- void type: `nil`
- functions: `(fun (a b c) ())`
- closures: `(fun (&capture &x) ())`

### Type system

ArkScript **does not** have type annotations, nor static type checking (as of writing).

Types are strong but dynamic, meaning they can change at runtime, eg:

{{< highlight_arkscript >}}
(mut i 5)
(set i "hello")  # perfectly valid
{{< /highlight_arkscript >}}

Checks on types are only done when calling builtins or operators.

## Scope

Like programs in many other programming languages, ArkScript uses names to refer to functions and variables, which are subject to scope. There are two ways to create a scope:

- creating a `while` loop: the body has its own scope
- creating a function

Everything defined outside of those two will be created in the global scope.

ArkScript uses **dynamic scopes**: variable names are then resolved to values, by looking in the current scope, and then each upper scope until we hit the global one.

**Example:**
{{< highlight_arkscript >}}
(let f (fun (callback) {
  (let f_data 5)
  (callback) }))

(let g (fun () {
  (print (format "{} - {}" f_data global_value))  # 5 - 12
  42 }))

(let global_value 12)
(f g)
{{< /highlight_arkscript >}}

---

Then there is namespacing, that can affect how variables are named. Let's say we have two files, `main.ark` and `lib.ark`.  
Importing `lib` from `main` will prefix all global variables in `lib.ark` with `lib:` and put them all in the global scope of `main.ark` (importing `main` from another file `foo.ark` won't create `main:lib:var` but instead give you access to `lib:var`).

**Example:**

{{< highlight_arkscript >}}
# main.ark
(import lib)

(lib:foo 1 2)
{{< /highlight_arkscript >}}

---

We can also import only a few select variables, to refer to them by their name without prefix (we can still call them with their prefix to remove any ambiguity).

Let's say we have three files, `main.ark`, `b.ark` and `c.ark` all in the same folder:

{{< highlight_arkscript >}}
# b.ark
(let var "b.ark")

# c.ark
(let var "c.ark")

# main.ark
(import b :var)
(import c :var)

(print (format "var={} b:var={} c:var={}" var b:var c:var))
# Will print:
# var=b.ark b:var=b.ark c:var=c.ark
{{< /highlight_arkscript >}}

Since `b` is imported first, `var` without prefix will resolve to `b:var`.

## Closures

Creating a closure in ArkScript is as easy as creating a function and explicitly capturing one or more variables:

{{< highlight_arkscript >}}
(let create (fun (name code)
  (fun (&name &code) (print (format "{}: {}" name code)))))

(let bob (create "Bob" 14))
(let charly (create "Charly" 27))

(print bob)  # (.name=Bob .code=14)
(if (= 14 bob.code)
  (print "ok"))
{{< /highlight_arkscript >}}

One can create a semblance of object system using closures, [but closures are a poor man's object](https://wiki.c2.com/?ClosuresAndObjectsAreEquivalent=).

## Macros

ArkScript has non-hygienic macros, as it is handling macros like code transformations:

- they have to be correct, you can't write `(macro foo (head 1))`,
- but they aren't executed like the runtime does, macros do not care about scopes and only the existence of a macro is checked while they are being applied

{{< highlight_arkscript >}}
(macro using_a (e) {
  (let a 42)
  e })
(let four {(using_a (/ a 10))})
(print four)  # 4.2
{{< /highlight_arkscript >}}

ArkScript has no reader macros, only *value*, *function* and *conditional* macros, meanwhile Common Lisp has user-definable reader macros.

### Quoting

All Lisp variants seen here have some kind of quoting, which ArkScript does not have. In many places, quoting may be used to have a shorter expression, eg:

```lisp
;; Sorts the list using the > and < function as the relational operator.
(sort (list 5 2 6 3 1 4) #'>)   ; Returns (6 5 4 3 2 1)
(sort (list 5 2 6 3 1 4) #'<)   ; Returns (1 2 3 4 5 6)
```

In ArkScript we would have to write an anonymous function or use a predefined function, since functions are first-class:

{{< highlight_arkscript >}}
(my_sort (list 5 2 6 3 1 4) (fun (a b) (< a b)))
# or
(let comp (fun (a b) (< a b)))
(my_sort (list 5 2 6 3 1 4) comp)
{{< /highlight_arkscript >}}

