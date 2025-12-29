---
title: "Random"
slug: "random"
description: ""
summary: ""
date: 2025-12-29T17:11:30+02:00
lastmod: 2025-12-29T17:11:30+02:00
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

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_L`: list of elements


#### Example
{{< highlight_arkscript >}}
(let data [1 2 3 4 5])
(print (random:choice data))
{{< /highlight_arkscript >}}

## shuffle

---
`(let shuffle (fun ((mut _L)) (...)))`
Shuffle a given list

**Note**: The original list is not modified

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_L`: list to shuffle


#### Example
{{< highlight_arkscript >}}
(let data [1 2 3 4 5])
(let randomized (random:shuffle data))
{{< /highlight_arkscript >}}



{{< highlight_scripts >}}
