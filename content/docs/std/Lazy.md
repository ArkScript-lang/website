---
title: "Lazy"
slug: "lazy"
description: ""
summary: ""
date: 2025-10-01T00:48:06+02:00
lastmod: 2025-10-01T00:48:06+02:00
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

#### Parameter
- `f`: the function to lazy evaluated

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(let complex_stuff (fun () {
    # do complex work in the function
    42 }))
(let lazy (eval complex_stuff))
(print (lazy))
{{< /highlight_arkscript >}}



{{< highlight_scripts >}}
