---
title: "IO"
slug: "io"
description: ""
summary: ""
date: 2026-01-01T17:04:20+02:00
lastmod: 2026-01-01T17:04:20+02:00
draft: false
weight: 410
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

## print

---
`Builtin (print values)`
Print value(s) in the terminal

**Note**: No separator is put between the values. Adds a \n at the end

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `values`: the values to print


#### Example
{{< highlight_arkscript >}}
(print "hello")
{{< /highlight_arkscript >}}

## puts

---
`Builtin (puts values)`
Print value(s) in the terminal

**Note**: No separator is put between the values, no \n at the end

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `values`: the values to print


#### Example
{{< highlight_arkscript >}}
(puts "hello")
{{< /highlight_arkscript >}}

## input

---
`Builtin (input prompt)`
Request a value from the user

**Note**: Return the value as a string

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `prompt`: (optional) printed before asking for the user input


#### Example
{{< highlight_arkscript >}}
(input "put a number> ")
{{< /highlight_arkscript >}}

## writeFile

---
`(let writeFile (fun (_name _content) (...)))`
Write content to a file. Return nil


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `filename`: path to the file to write to (will be overwritten if it exists)
- `content`: can be any valid ArkScript value


#### Example
{{< highlight_arkscript >}}
(io:writeFile "hello.json" "{\"key\": 12}")
{{< /highlight_arkscript >}}

## appendToFile

---
`(let appendToFile (fun (_name _content) (...)))`
Append content to a file. Return nil


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `filename`: path to the file to append to
- `content`: can be any valid ArkScript value


#### Example
{{< highlight_arkscript >}}
(io:writeFile "hello.json" "{\"key\": 12}")
{{< /highlight_arkscript >}}

## readFile

---
`(let readFile (fun (_name) (...)))`
Read the content from a file as a String


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `filename`: the path of the file to read


#### Example
{{< highlight_arkscript >}}
(io:readFile "hello.json")
{{< /highlight_arkscript >}}

## readLinesFile

---
`(let readLinesFile (fun (_name) (...)))`
Read the content from a file as a List of Strings


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `filename`: the path of the file to read


#### Example
{{< highlight_arkscript >}}
(io:readLinesFile "hello.json")
{{< /highlight_arkscript >}}

## fileExists?

---
`(let fileExists? (fun (_name) (...)))`
Check if a file exists, return True or False


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `filename`: the path of the file


#### Example
{{< highlight_arkscript >}}
(io:fileExists? "hello.json")
{{< /highlight_arkscript >}}

## listFiles

---
`(let listFiles (fun (_path) (...)))`
List files in a folder, as a List of String


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `path`: A directory


#### Example
{{< highlight_arkscript >}}
(io:listFiles "/tmp/hello")
{{< /highlight_arkscript >}}

## dir?

---
`(let dir? (fun (_path) (...)))`
Check if a path represents a directory


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `path`: A directory


#### Example
{{< highlight_arkscript >}}
(io:dir? "/tmp/hello")
{{< /highlight_arkscript >}}

## makeDir

---
`(let makeDir (fun (_path) (...)))`
Create a directory


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `path`: A directory


#### Example
{{< highlight_arkscript >}}
(io:makeDir "/tmp/myDir")
{{< /highlight_arkscript >}}

## removeFile

---
`(let removeFile (fun (_path) (...)))`
Delete file


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `filename`: path to file


#### Example
{{< highlight_arkscript >}}
(io:removeFile "/tmp/test.ark")
{{< /highlight_arkscript >}}



{{< highlight_scripts >}}
