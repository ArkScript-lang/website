---
title: "Exceptions"
slug: "exceptions"
description: ""
summary: ""
date: 2025-07-23T14:25:16
lastmod: 2025-07-23T14:25:16
draft: false
weight: 400
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

## throw

---
`(let throw (fun (_x) (...)))`
throw takes a value as its argument and return it to be used by try

#### Parameter
- `_x`: the value to return

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(let error (throw "cannot divide by zero"))
{{< /highlight_arkscript >}}

## return

---
`(let return (fun (_y) (...)))`
return takes a value as its argument and return it to be used by try

#### Parameter
- `_x`: the value to return

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(let value (return (/ 1 x)))
{{< /highlight_arkscript >}}

## try

---
`(let try (fun (_either _continue _handle) (...)))`
Takes a value either returned by throw or return and apply a given on it if it's an error or not

#### Parameters
- `_either`: the value to test
- `_continue`: the success handler
- `_handle`: the error handler

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(let invert (fun (x)
    (if (= x 0)
        (throw "cannot divide by zero")
        (return (/ 1 x)))))
(try (invert 0)
    (fun (inverted) (print inverted))
    (fun (err) (print err)))
{{< /highlight_arkscript >}}



{{< highlight_scripts >}}
