---
title: "Colours"
slug: "colours"
description: ""
summary: ""
date: 2026-11-07T18:35:09+02:00
lastmod: 2026-11-07T18:35:09+02:00
draft: false
weight: 410
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

## colours

---
`(let colours <value>)`
Dict of CSS colours, lowercase name to hex code (format: `#abcdef`)


**Author**: [@SuperFola](https://github.com/SuperFola)



## parse

---
`(let parse (fun (_name) (...)))`
Parse a CSS colour. Can convert a name to a colour code, a 3 digits code to a 6 digits one (eg `#abc` to `#aabbcc`)


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_name`: String, colour name or colour code


#### Example
{{< highlight_arkscript >}}
(print (colours:parse "Black"))  # #000000
(print (colours:parse "#fff"))  # #ffffff
{{< /highlight_arkscript >}}



{{< highlight_scripts >}}
