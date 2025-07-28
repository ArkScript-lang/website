---
title: "Range"
slug: "range"
description: ""
summary: ""
date: 2025-07-28T18:57:27+02:00
lastmod: 2025-07-28T18:57:27+02:00
draft: false
weight: 410
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

## range

---
`(let range (fun (i _b) (...)))`
Create a ranged closure in interval [a, b[

**Note**: Has a field `asList` to compute a list from the current state of the range, and another one `reset`.
#### Parameters
- `i`: the beginning of the range
- `_b`: the end of the range

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(let obj (range 1 10))
(print (obj.asList))  # [1 2 3 4 5 6 7 8 9]
(while (not (nil? (obj)))
    (print obj.i))  # print the current element
(print (obj.asList))  # [], the range has been used
(obj.reset)  # the range is ready to be used again
(print (obj.asList))  # [1 2 3 4 5 6 7 8 9]
{{< /highlight_arkscript >}}

## forEach

---
`(let forEach (fun (_r _f) (...)))`
Run a function on each element of the range

**Note**: The range is unmodified.
#### Parameters
- `_r`: the range object
- `_f`: the function

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(let obj (range 1 10))
(forEach obj (fun (e) (print e)))
{{< /highlight_arkscript >}}

## filter

---
`(let filter (fun (_range _fun) (...)))`
Create a list based on a range and a filter function

**Note**: The range is unmodified.
#### Parameters
- `_range`: the range object
- `_fun`: the filter function

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(let obj (range 1 10))
(print (filter obj math:even))  # [2 4 6 8]
{{< /highlight_arkscript >}}

## map

---
`(let map (fun (_range _fun) (...)))`
Create a list based on a range and a function to apply to each elements

**Note**: The range is unmodified.
#### Parameters
- `_range`: the range object
- `_fun`: the function to apply

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(let obj (range 1 10))
(print (map obj (fun (e) (* e e))))  # [1 4 9 16 25 36 49 64 81]
{{< /highlight_arkscript >}}

## reduce

---
`(let reduce (fun (_range _fun) (...)))`
Create a reduced list based on a range and a reduction function

**Note**: The range is unmodified.
#### Parameters
- `_range`: the range object
- `_fun`: the reduction function

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(let obj (range 1 10))
(print (reduce obj (fun (e) (+ e e))))  # 45
{{< /highlight_arkscript >}}



{{< highlight_scripts >}}
