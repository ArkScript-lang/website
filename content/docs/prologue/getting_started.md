---
title: "Getting started"
slug: "getting_started"
description: "Learn what ArkScript is, how to install it, and how to get started with it"
date: 2025-07-20T19:30:16+02:00
lastmod: 2025-07-20T19:30:16+02:00
draft: false
weight: 100
aliases:
- /documentation.html
---

{{< highlight_scripts >}}

## What is ArkScript?

- A small functional scripting language,
- Only needs 9 keywords to write code, not [68](https://en.wikipedia.org/wiki/List_of_Java_keywords),
- Portable, compile once and run your bytecode anywhere,
- Homoiconic via its macro processor,

{{< details "Can use `async` on any function (no more [colored function](https://journal.stuffwithstuff.com/2015/02/01/what-color-is-your-function/))" >}}

{{< highlight_arkscript >}}
(import std.List)
(let data [very important data here])
# the function we'll call using async
(let sum (fun (a b src) {
  (mut acc 0)
  (while (< a b) {
    (set acc (+ acc (@ src a)))
    (set a (+ 1 a))})
  acc }))
# a set of calls to `sum` to compute data asynchronously
(let workers [
  (async sum 0 (/ size 4) data)
  (async sum (/ size 4) (/ size 2) data)
  (async sum (/ size 2) (- size (/ size 4)) data)
  (async sum (- size (/ size 4)) size data)])
# awaiting on all of our workers and summing it up!
(let result (list:sum (list:map workers (fun (w) (await w)))))
{{< /highlight_arkscript >}}

{{< /details >}}

{{< details "Has tail call optimization" >}}
So that recursive functions calls are optimized as best as possible, to help enforce a functional style.
{{< /details >}}

{{< details "Designed to help you code better and find your errors quickly" >}}
```shell
CompilationError: Unbound variable error "fib" (did you mean "fibo"?)
In file fibonacci.ark
On line 7:12, got `(Symbol) fib'
   4 |     n
   5 |     (+ (fibo (- n 1)) (fibo (- n 2))))))
   6 | (while continue {
   7 |   (print (fib 28))
     |           ^^^
   8 |   (if (= (random 1 10) 1)
   9 |     (set continue false))
```
{{< /details >}}

## How do I try/install/use the language?

You will want to learn the language first: [Learning ArkScript](/docs/tutorials/language).

Then you can experiment with either:

- [try the online playground](https://playground.arkscript-lang.dev), so that you don't have to install anything,
- [use Docker](/docs/prologue/building#using-docker), to avoid clutering your computer with dependencies and compilers,
- or [install it on your machine](/docs/prologue/building#installing-from-a-release) via one of our releases. You can quickly try code using [the REPL](/docs/reference/repl)

## I want to contribute!

Everyone is welcome to contribute to the project, as long as you are respectful of others. Check out our [contribution guidelines](/docs/guides/contributing)!

## Using ArkScript in your company

I (Lexy Plateau) am working pretty much alone on this project, and I try to do my best to leave it as bug free and as performant as possible. However, this is a side project for which I'm currently **not paid** to work on, thus I can't fix every bug or address every feature request in a timely manner.

Please reach out either by email (lexplt.dev@gmail.com) or via a [discussion](https://github.com/orgs/ArkScript-lang/discussions) before using the language in a company project, so that we can set up a support contract. If you don't want to set up a contract, your issues and support requests won't be prioritized (and possibly left unanswered).
