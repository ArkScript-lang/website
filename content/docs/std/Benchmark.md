---
title: "Benchmark"
slug: "benchmark"
description: ""
summary: ""
date: 2026-01-26T18:04:56+02:00
lastmod: 2026-01-26T18:04:56+02:00
draft: false
weight: 410
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

## measureOnce

---
`(macro measureOnce (tag code) (...))`
Measure the time it takes to run some given code, in milliseconds


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `tag`: Identifier for the code block (string)
- `code`: Node of code to run



## bench

---
`(macro bench (code times) (...))`
Benchmark some given code by running it a given number of times


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `code`: code to run, eg. a function call
- `times`: number of times to run the code


#### Example
{{< highlight_arkscript >}}
(let fib (fun (n)
  (if (< n 2)
    n
    (+ (fib (- n 1)) (fib (- n 2))))))
(bench (fib 23) 10)
# (fib 23), 10 times
#   ↪︎ range: [4.7 - 5.02] ms
#   ↪︎ mean: 4.85ms
#   ↪︎ median: 4.86ms
{{< /highlight_arkscript >}}



{{< highlight_scripts >}}
