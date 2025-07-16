---
title: "ArkScript"
description: ""
lead: "A small, lisp-inspired, functional scripting language"
date: 2023-09-07T16:33:54+02:00
lastmod: 2023-09-07T16:33:54+02:00
draft: false
seo:
  title: "ArkScript lang"
  description: "A small, lisp-inspired, functional scripting language"
---

{{< highlight_scripts >}}

{{< tabs "test" >}}
{{< tab "Ackermann" >}}

{{< highlight_arkscript >}}
(let ackermann (fun (m n) {
  (if (> m 0)
    (if (= 0 n)
      (ackermann (- m 1) 1)
      (ackermann (- m 1) (ackermann m (- n 1))))
    (+ 1 n)) }))
(assert
  (= 509 (ackermann 3 6))
  "(ackermann 3 6) == 509")
{{< /highlight_arkscript >}}

{{< /tab >}}

{{< tab "Array mapping" >}}

{{< highlight_arkscript >}}
# imports can be prefixed or qualified
(import std.List :map)
# define an array using [...] or (list ...)
(let array [1 2 3 4 5 6 7 8 9 10])
# functions are first class citizens!
(let mapped (map array (fun (i) (* i i))))
(assert
  (= mapped [1 4 9 16 25 36 49 64 81 100])
  "mapped is a list of squares")
{{< /highlight_arkscript >}}

{{< /tab >}}

{{< tab "Closures" >}}

{{< highlight_arkscript >}}
(let countdown-from (fun (x)
  # return a closure that captures "x"
  (fun (&x) {
    (set x (- x 1))
    x })))
(let countdown-from-3 (countdown-from 3))
(print "Countdown " (countdown-from-3)) # 2
# each subsequent call to the closure mutate its state
(print "Countdown " (countdown-from-3)) # 1
{{< /highlight_arkscript >}}

{{< /tab >}}

{{< /tabs >}}

