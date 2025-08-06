---
title: "Switch"
slug: "switch"
description: ""
summary: ""
date: 2025-08-06T16:40:17+02:00
lastmod: 2025-08-06T16:40:17+02:00
draft: false
weight: 410
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

## switch

---
`(macro switch (value case then ...cases) (...))`
Takes a value to match against a list of (possible value, code to run)...

**Note**: Once the value is matched, it stops and doesn't try any other values.
#### Parameters
- `value`: value to match
- `case`: first case
- `then`: value when first case matches
- `...cases`: more (case, then)

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(switch 4
    1 (print "hello")
    2 (print "bye")
    12 (print "jackpot")
    (+ 1 4) (print "computation")
    _ (print "default"))
{{< /highlight_arkscript >}}



{{< highlight_scripts >}}
