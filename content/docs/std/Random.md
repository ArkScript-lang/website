---
title: "Random"
slug: "random"
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

## choice

---
`(let choice (fun (_L) (...)))`
Select a random element from a list

**Note**: If the list is empty, returns nil
#### Parameter
- `_L`: list of elements

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(import std.Random)
(print (random:choice [1 2 3]))
{{< /highlight_arkscript >}}

## shuffle

---
`(let shuffle (fun (_L) (...)))`
Shuffle a given list

**Note**: The original list is not modified
#### Parameter
- `_L`: list to shuffle

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(import std.Random)
(let data [1 2 3 4 5])
(let randomized (random:shuffle data))
{{< /highlight_arkscript >}}



{{< highlight_scripts >}}
