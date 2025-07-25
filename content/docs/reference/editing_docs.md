---
title: "Editing the documentation"
slug: "editing_docs"
description: ""
summary: ""
date: 2025-07-15T14:20:40+02:00
lastmod: 2025-07-15T14:20:40+02:00
draft: false
weight: 999
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

This page covers how you should edit pages on this website.

## Setup

Fork [the repository](https://github.com/ArkScript-lang/website/fork), then:

```shell
git clone https://github.com/USERNAME/website.git
cd website
npm i
```

You will need to install [Hugo](https://gohugo.io), version 0.145.0, to be able to run the static site generator and see your changes:

```shell
npm run dev  # launches a server at http://localhost:1313
```

## Coloring ArkScript code

We can not use the \`\`\` syntax, as [Hugo](https://gohugo.io/) relies on [Chroma](https://github.com/alecthomas/chroma), and we would have to patch Chroma, then wait for Hugo to pickup the update.

An homemade shortcode can instead be used, nearly in the same way:

```markdown
{{</* highlight_arkscript */>}}
(math:sin 0.5421)

(list:forEach the-list (fun (element) (...)))

(console:color "red")
{{</* /highlight_arkscript */>}}
```

You will also have to include the JS scripts so that [Rainbow.js](https://craig.is/making/rainbows) is loaded:

```markdown
{{</* highlight_scripts */>}}
```

