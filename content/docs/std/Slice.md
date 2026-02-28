---
title: "Slice"
slug: "slice"
description: ""
summary: ""
date: 2026-02-28T12:09:01+02:00
lastmod: 2026-02-28T12:09:01+02:00
draft: false
weight: 410
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

## slice

---
`Builtin (slice container start end step)`
Slice a list or string given a start, an end, and an optional step size


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `container`: list or string
- `start`: number, included
- `end`: number, excluded
- `step`: number, default 1


#### Example
{{< highlight_arkscript >}}
(let d (dict "key" "value" 5 12))
(print d)  # {key: value, 5: 12}
{{< /highlight_arkscript >}}



{{< highlight_scripts >}}
