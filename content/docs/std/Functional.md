---
title: "Functional"
slug: "functional"
description: ""
summary: ""
date: 2025-08-01T00:57:05+02:00
lastmod: 2025-08-01T00:57:05+02:00
draft: false
weight: 410
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

## compose

---
`(let compose (fun (_f _g) (...)))`
Compose function calls

#### Parameters
- `_f`: the first function
- `_g`: the second function

#### Author
[@rstefanic](https://github.com/rstefanic)

#### Example
{{< highlight_arkscript >}}
(let foo (fun (a) (* a a)))
(let bar (fun (b) (+ b b)))
(let composed (compose foo bar))
(print (composed 12))  # return value is (12 + 12) * (12 + 12)
{{< /highlight_arkscript >}}

## left

---
`(let left (fun (_x) (...)))`
Take a value as its argument and return a function taking 2 arguments which will call the first function on the value

#### Parameter
- `_x`: the value

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(let val (left 12))
(val (fun (x) (print x " i am called")) (fun (x) (print x " i am NOT called")))
{{< /highlight_arkscript >}}

## right

---
`(let right (fun (_y) (...)))`
Take a value as its argument and return a function taking 2 arguments which will call the second function on the value

#### Parameter
- `_y`: the value

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(let val (right 12))
(val (fun (x) (print x " i am NOT called")) (fun (x) (print x " i am called")))
{{< /highlight_arkscript >}}

## flip

---
`(let flip (fun (_f) (...)))`
Flip the arguments of a function

**Note**: Returns a function taking 2 arguments a and b, calling (f b a)
#### Parameter
- `_f`: the function

#### Author
[@rstefanic](https://github.com/rstefanic)

#### Example
{{< highlight_arkscript >}}
(let foo (fun (a b) (- a b)))
((flip foo) 14 12) # will call (foo 12 14) instead of (foo 14 12)
{{< /highlight_arkscript >}}

## identity

---
`(let identity (fun (_x) (...)))`
No-op, return the value as-is

#### Parameter
- `_x`: the value

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(let maybeAbs (if shouldNormalizeNegatives math:abs identity))
(let data (list:map nums maybeAbs))
{{< /highlight_arkscript >}}

## recombine

---
`(let recombine (fun (_f _g _h) (...)))`
Generic form for functions that need to reuse their arguments

**Note**: Returns a function taking one argument x, calling (f (g x) (h x))
#### Parameters
- `_f`: function called with two arguments
- `_g`: first unary function
- `_h`: second unary function

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(let mean (recombine (fun (a b) (/ a b)) list:sum list:size))
(print (mean [0 1 1 2 3 5 8 13]))  # 4.125
{{< /highlight_arkscript >}}



{{< highlight_scripts >}}
