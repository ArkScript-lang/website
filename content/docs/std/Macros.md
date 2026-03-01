---
title: "Macros"
slug: "macros"
description: ""
summary: ""
date: 2026-03-01T01:08:19+02:00
lastmod: 2026-03-01T01:08:19+02:00
draft: false
weight: 410
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

## $undef

---
`($undef name)`
Delete a given macro in the nearest scope



#### Parameter
- `name`: macro name


#### Example
{{< highlight_arkscript >}}
(macro a 5)
($undef a)
(print a)  # will fail, as 'a' doesn't exist anymore
{{< /highlight_arkscript >}}

## $argcount

---
`($argcount node)`
Retrieve at compile time the number of arguments taken by a given function.

**Note**: The function must have been defined before using `$argcount`, or must be an anonymous function: `($argcount (fun (a b c) ()))`, `($argcount my-function)`.


#### Parameter
- `node`: node


#### Example
{{< highlight_arkscript >}}
(let foo (fun (a b) (+ a b)))
(print ($argcount foo))  # 2
{{< /highlight_arkscript >}}

## $symcat

---
`($symcat symbol args...)`
Create a new symbol by concatenating a symbol with numbers, strings and/or other symbols



#### Parameters
- `symbol`: symbol
- `args...`: numbers, strings or symbols


#### Example
{{< highlight_arkscript >}}
(macro foo () (let ($symcat a 5) 6))
(foo)
(print a5)
{{< /highlight_arkscript >}}

## $repr

---
`($repr node)`
Return the AST representation of a given node, as a string.

**Note**: Indentation, newlines and comments are not preserved.


#### Parameter
- `node`: node


#### Example
{{< highlight_arkscript >}}
($repr foobar)  # will return "foobar"
($repr (fun () (+ 1 2 3)))  # will return "(fun () (+ 1 2 3))"
{{< /highlight_arkscript >}}

## $as-is

---
`($as-is node)`
Use a given node as it is, without evaluating it any further in the macro context. Useful to stop the evaluation of arguments passed to a function macro.



#### Parameter
- `node`: node



## $type

---
`($type node)`
Return the type of a given node, as a string.



#### Parameter
- `node`: node


#### Example
{{< highlight_arkscript >}}
(print ($type foobar))  # Symbol
(print ($type (fun () (+ 1 2 3))))  # List
{{< /highlight_arkscript >}}

## $empty?

---
`($empty? node)`
Check if a node is empty. An empty list, `[]` or `(list)`, is considered empty.



#### Parameter
- `node`: node


#### Example
{{< highlight_arkscript >}}
(macro not_empty_node () ($empty? (fun () ())))
(print (not_empty_node))  # false
{{< /highlight_arkscript >}}

## $head

---
`($head node)`
Return the head node in a list of nodes. The head of a `[1 2 3]` / `(list 1 2 3)` disregards the `list` and returns 1.



#### Parameter
- `node`: node


#### Example
{{< highlight_arkscript >}}
(macro h (...args) ($head args))
(print (h))  # nil
(print (h 1))  # 1
(print (h 1 2))  # 1
{{< /highlight_arkscript >}}

## $tail

---
`($tail node)`
Return the tails nodes in a list of nodes, as a `(list ...)`



#### Parameter
- `node`: node


#### Example
{{< highlight_arkscript >}}
(macro g (...args) ($tail args))
(print (g))  # []
(print (g 1))  # []
(print (g 1 2))  # [2]
(print (g 1 2 3))  # [2 3]
{{< /highlight_arkscript >}}

## $at

---
`($at node index)`
Return the node at a given index in a list of nodes



#### Parameters
- `node`: node
- `index`: must be a number


#### Example
{{< highlight_arkscript >}}
(macro one (...args) ($at args 1))
(print (one 1 2))  # 2
(print (one 1 3 4))  # 3
(print (one 1 5 6 7 8))  # 5
{{< /highlight_arkscript >}}

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
(-> "f0" f1 (foo _ f2) (bar _ f3))  # equivalent to (bar (foo (f1 "f0") f2) f3)
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
