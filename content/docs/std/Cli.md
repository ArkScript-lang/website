---
title: "Cli"
slug: "cli"
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

## flag

---
`(let flag (fun (name desc) (...)))`
Defines a command line flag

**Note**: All flags are optional and turned off
#### Parameters
- `name`: how the flag is named, eg "--debug"
- `desc`: what the flag achieves



## value

---
`(let value (fun (name desc default) (...)))`
Defines a command line value

**Note**: All values are required and equal to their default value
#### Parameters
- `name`: how the value is named, eg "filename"
- `desc`: what the value is for
- `default`: default value for the value



## oneOf

---
`(let oneOf (fun (params) (...)))`
Creates a group of flags/values/groups where only one of the subgroup has to match

#### Parameter
- `params`: list of flags/values/groups



## group

---
`(let group (fun (params) (...)))`
Creates a group of flags/values/groups where all of the subgroups have to match

#### Parameter
- `params`: list of flags/values/groups



## parseArgs

---
`(let parseArgs (fun (args cli) (...)))`
Parse a list of arguments given a CLI definition

**Note**: Recursively visit the CLI to parse the argument list
#### Parameters
- `args`: list of arguments, eg sys:args
- `cli`: cli definition

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(import std.Cli)
(let command_line
  (cli:oneOf [
    (cli:flag "--help" "Display an help message")
    (cli:flag "--repl" "Start the REPL")
    (cli:group [
      (cli:flag "-c" "Compile a given file")
      (cli:value "file" "Path to the file to run" nil) ])]))

(print (cli:help "miniark" "A mini ArkScript CLI" command_line))
(print (cli:parseArgs ["-c" "path.ark"] command_line))
{{< /highlight_arkscript >}}



{{< highlight_scripts >}}
