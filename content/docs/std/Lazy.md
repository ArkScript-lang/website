---
title: "Lazy"
slug: "lazy"
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

## eval

---
`(let eval (fun (f) (...)))`
Take a function, and return a closure to lazy evaluate it


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `f`: the function to lazy evaluated


#### Example
{{< highlight_arkscript >}}
(let complex_stuff (fun () {
    # do complex work in the function
    42 }))
(let lazy (lazy:eval complex_stuff))
(print (lazy))
{{< /highlight_arkscript >}}



{{< highlight_scripts >}}
