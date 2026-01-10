---
title: "Macros"
slug: "macros"
description: ""
summary: ""
date: 2026-01-10T16:50:25+02:00
lastmod: 2026-01-10T16:50:25+02:00
draft: false
weight: 410
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

## ->

---
`(macro -> (arg fn1 ...fns) (...))`
Chain calls on a given value, for a nicer syntax


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `arg`: value to transform
- `...fns`: series of functions to apply one by one to `arg`


#### Example
{{< highlight_arkscript >}}
(import std.Macros)
(-> "f0" f1)  # equivalent to (f1 "f0")
(-> "f0" f1 f2 f3) # equivalent to (f3 (f2 (f1 "f0")))
(-> "f0" f1 (apply _ f2) (apply _ f3))  # equivalent to (apply (apply (f1 "f0") f2) f3)
{{< /highlight_arkscript >}}

## partial

---
`(macro partial (func ...defargs) (...))`
Create a partial function with prefilled arguments


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `func`: function to make partial
- `...defargs`: predefined arguments


#### Example
{{< highlight_arkscript >}}
(import std.Macros)
(let test_func (fun (a b c) (* a b c)))
(let test_func1 (partial test_func 1))
(let test_func2 (partial test_func1 2))
(print (test_func1 2 3))  # 6
(print (test_func2 3))  # 6
{{< /highlight_arkscript >}}

## partial2

---
`(macro partial2 (call ...args) (...))`
Create a partial function with prefilled arguments, allowing some arguments to be skipped


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `call`: function to make partial
- `...args`: predefined arguments


#### Example
{{< highlight_arkscript >}}
(import std.Macros)
(let test_func (fun (a b c) (* a b c)))
(let test_func3 (partial2 test_func 1 _ 3))
(print (test_func3 2))  # 6
{{< /highlight_arkscript >}}

## unless

---
`(macro unless (cond ...body) (...))`
Create a reversed condition


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `cond`: condition
- `body`: then node (or then/else nodes)


#### Example
{{< highlight_arkscript >}}
(import std.Macros)
(unless (canCall? dog)
  (print "dog can't call")
  (print "dog can actually call us!"))
(unless false
  (print "this will always be executed"))
{{< /highlight_arkscript >}}

## until

---
`(macro until (cond body) (...))`
Iterate until the condition is truthy


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `cond`: condition
- `body`: loop body


#### Example
{{< highlight_arkscript >}}
(import std.Macros)
(mut data [0])
(until (= 10 (len data))
  (append! data (+ 1 (@ data -1))))
(print data)  # [0 1 2 3 4 5 6 7 8 9]
{{< /highlight_arkscript >}}

## unpackPair

---
`(macro unpackPair (pair outx outy) (...))`
Unpack a pair of two elements into two new variables


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `pair`: list of two elements to unpack
- `outx`: name of the variable which will hold the first element
- `outy`: name of the variable which will hold the second element


#### Example
{{< highlight_arkscript >}}
(let data [[1 2] [2 3] [5 8]])
(list:forEach data
  (fun (pair) {
    (unpackPair pair x y)
    (print (+ x y)) }))
{{< /highlight_arkscript >}}



{{< highlight_scripts >}}
