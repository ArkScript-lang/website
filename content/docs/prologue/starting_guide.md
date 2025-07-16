---
title: "Getting started"
slug: "starting_guide"
description: "Learn what ArkScript is, how to install it, and how to get started with it"
date: 2025-07-20T19:30:16+02:00
lastmod: 2025-07-20T19:30:16+02:00
draft: false
weight: 1
---

## What is ArkScript?

- a small functional scripting language,
- only needs 9 keywords to write code, not [68](https://en.wikipedia.org/wiki/List_of_Java_keywords),
- portable, compile once and run your bytecode anywhere,
- homoiconic via its macro processor,
- can use `async` on any function (no more [colored function](https://journal.stuffwithstuff.com/2015/02/01/what-color-is-your-function/),
- has no hidden references,
- has tail call optimization,
- designed to help you code better and find your errors quickly

```shell
CompilationError: Unbound variable error "fib" (did you mean "fibo"?)
In file fibonacci.ark
On line 7:12, got `(Symbol) fib'
   4 |     n
   5 |     (+ (fibo (- n 1)) (fibo (- n 2))))))
   6 | (while continue {
   7 |   (print (fib 28))
     |           ^^^
   8 |   (if (< (/ (random) 32768) 0.1)
   9 |     (set continue false))
```

## todo

// TODO add reference/tutorial (using the cli) page
//- Bytecode explorer
div.panel.col-3.col-lg-5.col-sm-11
    div.panel-header
        div.panel-title Bytecode explorer
    div.panel-body
        pre: code.rainbowjs(data-language="arkscript-bytecode")
            | Version:   4.0.0
            | Timestamp: 1745512684
            | SHA256:    6311b3eb87739fac8751dc8147fb6d29e66230ea8a726e5115515735b8709148
            |
            | Symbols table (length: 3)
            | 0) foo
            | 1) a
            | 2) b
            |
            | Constants table (length: 3)
            | 0) (PageAddr) 1
            | 1) (Number) 1
            | 2) (Number) 2
            |
            | Instruction locations table (length: 2)
            |  PP, IP
            |   0,  0 -> a.ark:2
            |   0,  3 -> a.ark:4
            |
            | Code segment 0 (length: 24)
            |    0 39 00 00 00 LOAD_CONST_STORE
            |    1 38 00 20 01 LOAD_CONST_LOAD_CONST
            |    2 02 00 00 00 LOAD_SYMBOL_BY_INDEX (0)
            |    3 0b 00 00 02 CALL (2)
            |    4 4b 00 10 09 CALL_BUILTIN (4105)
            |    5 0a 00 00 00 HALT
            |
            | Code segment 1 (length: 20)
            |    0 05 00 00 01 STORE a
            |    1 05 00 00 02 STORE b
            |    2 0d 00 00 02 BUILTIN nil
            |    3 09 00 00 00 RET
            |    4 0a 00 00 00 HALT

// comment
//- Sponsors
div.panel.col-5.col-lg-6.col-sm-11
    div.panel-header
        div.panel-title Sponsors & donors
    div.panel-body
        ul
            li: a(href="https://github.com/TheCountVEVO") TheCountVEVO
            li: a(href="https://github.com/llexto") llexto
            li COUR Eloïse
            li: a(href="https://github.com/DylanAkp") AKPINAR Dylan
            li #[a(href="https://icculus.org", rel="nofollow") Ryan C. Gordon] through the #[a(href="https://web.archive.org/web/20220608150846/https://twitter.com/icculus/status/1534552918317318144", rel="nofollow") 2022 Microgrant]

//- Bugs
div.panel.col-3.col-lg-5.col-sm-11
    div.panel-header
        div.panel-title Found a bug, need help with the language?
    div.panel-body
        p We have a #[a(href="https://github.com/ArkScript-lang/Ark/issues") bug tracker] where you can report bugs and feature requests.#[br]
        p Head to the #[a(href="https://github.com/orgs/ArkScript-lang/discussions") forum] if your problem / suggestion doesn't fit or if you need help with the language!

      -->
