---
title: "Sys"
slug: "sys"
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

## exec

---
`(let exec (fun (_command) (...)))`
Execute a system specific command

**Note**: Return the output of the command as a String, or nil if it was disabled in the ArkScript build

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `command`: the command to execute, as a String


#### Example
{{< highlight_arkscript >}}
(sys:exec "echo hello")
{{< /highlight_arkscript >}}

## sleep

---
`(let sleep (fun (_duration) (...)))`
Sleep for a given duration (in milliseconds)

**Note**: Return nil

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `duration`: a Number representing a duration


#### Example
{{< highlight_arkscript >}}
(sys:sleep 1000)  # sleep for 1 second
{{< /highlight_arkscript >}}

## exit

---
`(let exit (fun (_code) (...)))`
Exit the program with the given exit code

**Note**: Any code after this function call won't be executed

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `exitCode`: usually 0 for success and 1 for errors


#### Example
{{< highlight_arkscript >}}
(sys:exit 0)  # halt the virtual machine with given exit code (success)
{{< /highlight_arkscript >}}

## platform

---
`(let platform <value>)`
Platform on which the program is running (Windows, Mac OSX, Linux, FreeBSD, Unix, Other)


**Author**: [@SuperFola](https://github.com/SuperFola)



## args

---
`(let args <value>)`
Arguments given to the program when running it from the command line


**Author**: [@SuperFola](https://github.com/SuperFola)



## programName

---
`(let programName <value>)`
Name of the running program (file only, not the fullpath)


**Author**: [@SuperFola](https://github.com/SuperFola)





{{< highlight_scripts >}}
