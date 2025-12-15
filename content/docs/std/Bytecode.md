---
title: "Bytecode"
slug: "bytecode"
description: ""
summary: ""
date: 2025-12-15T16:54:21+02:00
lastmod: 2025-12-15T16:54:21+02:00
draft: false
weight: 410
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

## disassemble

---
`Builtin (disassemble f)`
Prints the bytecode of a given function


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `f`: function to disassemble


#### Example
{{< highlight_arkscript >}}
(let foo (fun () { (let a 1) (print a) })
(disassemble foo)
{{< /highlight_arkscript >}}



{{< highlight_scripts >}}
