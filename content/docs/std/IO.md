---
title: "IO"
slug: "io"
description: ""
summary: ""
date: 2025-07-23T14:25:16
lastmod: 2025-07-23T14:25:16
draft: false
weight: 400
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

## writeFile

---
`(let writeFile (fun (_name _content) (...)))`
Write content to a file. Return nil

#### Parameters
- `filename`: path to the file to write to (will be overwritten if it exists)
- `content`: can be any valid ArkScript value

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(io:writeFile "hello.json" "{\"key\": 12}")
{{< /highlight_arkscript >}}

## appendToFile

---
`(let appendToFile (fun (_name _content) (...)))`
Append content to a file. Return nil

#### Parameters
- `filename`: path to the file to append to
- `content`: can be any valid ArkScript value

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(io:writeFile "hello.json" "{\"key\": 12}")
{{< /highlight_arkscript >}}

## readFile

---
`(let readFile (fun (_name) (...)))`
Read the content from a file as a String

#### Parameter
- `filename`: the path of the file to read

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(io:readFile "hello.json")
{{< /highlight_arkscript >}}

## fileExists?

---
`(let fileExists? (fun (_name) (...)))`
Check if a file exists, return True or False

#### Parameter
- `filename`: the path of the file

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(io:fileExists? "hello.json")
{{< /highlight_arkscript >}}

## listFiles

---
`(let listFiles (fun (_path) (...)))`
List files in a folder, as a List of String

#### Parameter
- `path`: A directory

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(io:listFiles "/tmp/hello")
{{< /highlight_arkscript >}}

## dir?

---
`(let dir? (fun (_path) (...)))`
Check if a path represents a directory

#### Parameter
- `path`: A directory

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(io:dir? "/tmp/hello")
{{< /highlight_arkscript >}}

## makeDir

---
`(let makeDir (fun (_path) (...)))`
Create a directory

#### Parameter
- `path`: A directory

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(io:makeDir "/tmp/myDir")
{{< /highlight_arkscript >}}

## removeFile

---
`(let removeFile (fun (_path) (...)))`
Delete file

#### Parameter
- `filename`: path to file

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(io:removeFile "/tmp/test.ark")
{{< /highlight_arkscript >}}



{{< highlight_scripts >}}
