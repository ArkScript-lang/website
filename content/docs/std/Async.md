---
title: "Async"
slug: "async"
description: ""
summary: ""
date: 2025-12-01T00:56:42+02:00
lastmod: 2025-12-01T00:56:42+02:00
draft: false
weight: 410
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

## async

---
`Builtin (async func args...)`
Calls a function asynchronously with a given set of arguments

**Note**: The function is started in a separate context, with no access to the others, preventing any concurrency problems.
#### Parameters
- `func`: the function to call
- `args...`: the arguments of the function

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(let foo (fun (a b) (+ a b)))
(async foo 1 2)
{{< /highlight_arkscript >}}

## await

---
`Builtin (await future)`
Blocks until the result becomes available

#### Parameter
- `future`: the future to wait for its result to be available

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(let foo (fun (a b) (+ a b)))
(let async-foo (async foo 1 2))
(print (await async-foo))
{{< /highlight_arkscript >}}



{{< highlight_scripts >}}
