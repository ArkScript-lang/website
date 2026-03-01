---
title: "Builtins"
slug: "builtins"
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

## toString

---
`(toString value)`
Convert a value to a string



#### Parameter
- `value`: anything


#### Example
{{< highlight_arkscript >}}
(print (toString "abc"))  # "abc"
(print (toString 1))  # "1"
(print (toString (fun () ())))  # "Function@1"
(print (toString print))  # "CProcedure"
(print (toString []))  # "[]"
(let x 1) (print (toString (fun (&x) ())))  # "(.x=1)"
(print (toString (dict 1 2 3 4)))  # "{1: 2, 3: 4}"
(print (toString nil))  # "nil"
(print (toString true))  # "true"
(print (toString false))  # "false"
{{< /highlight_arkscript >}}

## type

---
`(type value)`
Get the type of a given value as a string



#### Parameter
- `value`: anything


#### Example
{{< highlight_arkscript >}}
(print (type "abc"))  # "String"
(print (type 1))  # "Number"
(print (type (fun () ())))  # "Function"
(print (type print))  # "CProc"
(print (type []))  # "List"
(let x 1) (print (type (fun (&x) ())))  # "Closure"
(print (type (dict 1 2 3 4)))  # "Dict"
(print (type nil))  # "Nil"
(print (type true))  # "Bool"
(print (type false))  # "Bool"
{{< /highlight_arkscript >}}

## assert

---
`(assert cond message)`
Interrupt the execution if a given condition is false



#### Parameters
- `cond`: condition
- `message`: string to display


#### Example
{{< highlight_arkscript >}}
(let a 5)
(assert (>= a 4) "'a' must be at least 4")
{{< /highlight_arkscript >}}

## nil?

---
`(nil? value)`
Check if a value is nil



#### Parameter
- `value`: anything


#### Example
{{< highlight_arkscript >}}
(print (nil? "abc"))  # false
(print (nil? 1))  # false
(print (nil? (fun () ())))  # false
(print (nil? print))  # false
(print (nil? []))  # false
(print (nil? (dict 1 2 3 4)))  # false
(print (nil? nil))  # true
(print (nil? true))  # false
(print (nil? false))  # false
{{< /highlight_arkscript >}}

## comparison

---
`(comparison a b)`
Compare two values and return true or false

**Note**: Comparing two values (using `<`, `>`, `<=`, `>=` and `=`) with a different type will always return false


#### Parameters
- `a`: first value
- `b`: second value


#### Example
{{< highlight_arkscript >}}
(print (< "abc" "def"))  # true, string are compared lexicographically
(print (< 2 1))  # false
(print (> 3 -5.5)  # true
(print (> "Hello" ""))
(print (<= [] [1 2]))  # true, lists are compared lexicographically
(print (<= [1 2] [1 0]))  # false
(print (<= [1 2] [10]))  # true
(print (>= 5 5))  # true
(print (= false 5))  # false
(print (!= false 5))  # true
{{< /highlight_arkscript >}}

## not

---
`(not value)`
Convert a value to a boolean and invert it



#### Parameter
- `value`: anything


#### Example
{{< highlight_arkscript >}}
(print (not ""))  # true
(print (not "a"))  # false
(print (not 0))  # true
(print (not 1))  # false
(print (not []))  # true
(print (not [1 2]))  # false
(print (not nil))  # true
(print (not true))  # false
(print (not false))  # true
(print (not (dict)))  # true
(print (not (dict "a" 1)))  # false
{{< /highlight_arkscript >}}

## hasField

---
`(hasField c field)`
Check if a closure has a given field



#### Parameters
- `c`: closure
- `field`: string, field name to look for


#### Example
{{< highlight_arkscript >}}
(let x 1)
(let b "hello")
(let closure (fun (&x &b) ()))
(print (hasField closure "x"))  # true
(print (hasField closure "b"))  # true
(print (hasField closure "B"))  # false, field names are case-sensitive
{{< /highlight_arkscript >}}



{{< highlight_scripts >}}
