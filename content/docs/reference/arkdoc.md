---
title: "Documenting code using ArkDoc"
slug: "arkdoc"
description: ""
summary: ""
date: 2025-07-14T19:29:13+02:00
lastmod: 2025-07-14T19:29:13+02:00
draft: false
weight: 502
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

{{< highlight_scripts >}}

ArkDoc is a documentation generator for ArkScript, based on comments.

## Syntax

{{< highlight_arkscript >}}
# @brief Iterate over a given list and run a given function on every element.
# @param _L the list to iterate over
# @param _func the function to call on each element
# @details The original list is left unmodified.
# =begin
# (import std.List)
# (let collection [1 2 5 12])
# (list:forEach collection (fun (element)
#   (print element)))
# =end
# @author https://github.com/SuperFola
(let list:forEach (fun (_L _func) {
  (mut _index 0)
  (while (< _index (len _L)) {
    (mut _element (@ _L _index))
    (_func _element)
    (set _index (+ 1 _index)) })}))
{{< /highlight_arkscript >}}

## Installing ArkDoc

ArkDoc is a Python 3.9 module.

```shell
git clone https://github.com/ArkScript-lang/ArkDoc.git
python3 -m venv venv
source ./venv/bin/activate
pip3 install -r requirements.txt

# set the log level
# if not given, defaults to INFO
export ARKDOC_LOGLEVEL=DEBUG

python3 -m arkdoc --help
```

Help:

```
usage: __main__.py [-h] [--dry-run] [--extract-func-names] [--html HTML] [--markdown MARKDOWN] [--root-dir ROOT_DIR] ark_version source_folder [source_folder ...]

ArkScript Documentation generator

positional arguments:
  ark_version           ArkScript version number, eg 3.1.0
  source_folder         Path to the ArkScript source folder

options:
  -h, --help            show this help message and exit
  --dry-run             Run and log everything but don't generate any file
  --extract-func-names  Extract only the function names, print them on separate lines and exit
  --html HTML           Output folder for the HTML docs
  --markdown MARKDOWN   Output folder for the Markdown docs
  --root-dir ROOT_DIR   The root dir for the links
```

- `--dry-run` is useful when debugging ArkDoc itself, as it only does the parsing, skipping the generation
- `--root-dir` impacts the creation of links in both generators (HTML and Markdown), if you need to have documentation in a `/std/` folder for example ; default value if `/`

### Generating documentation

```shell
# generating Markdown output for the website
python3 -m arkdoc 4.0.0 ../Ark/lib/std/ --markdown out

# generating an HTML website
python3 -m arkdoc 4.0.0 ../Ark/lib/std --html out
```

These two commands will generate the following folder structure:

```
# Markdown
out/
|__ 4.0.0/
    |__ _decl.txt
    |__ <name>.md
    |__ _index.md

# HTML
out/
|__ 4.0.0/
|   |__ index.html
|   |__ <name>.html
|__ assets/
    |__ css/
    |__ js/
    |__ images/
    |__ sass/
```

### Getting a list of documented functions & macros

```shell
python3 -m arkdoc 4.0.0 ../Ark/lib/std/ --extract-func-names
[INFO ] -- 2025-07-23T14:17 -- Parsing ../Ark/lib/std/String.ark...
[INFO ] -- 2025-07-23T14:17 -- Parsing ../Ark/lib/std/Switch.ark...
[INFO ] -- 2025-07-23T14:17 -- Parsing ../Ark/lib/std/Math.ark...
[INFO ] -- 2025-07-23T14:17 -- Parsing ../Ark/lib/std/Lazy.ark...
[INFO ] -- 2025-07-23T14:17 -- Parsing ../Ark/lib/std/Exceptions.ark...
[INFO ] -- 2025-07-23T14:17 -- Parsing ../Ark/lib/std/Range.ark...
[INFO ] -- 2025-07-23T14:17 -- Parsing ../Ark/lib/std/os.ark...
[INFO ] -- 2025-07-23T14:17 -- Parsing ../Ark/lib/std/Testing.ark...
[INFO ] -- 2025-07-23T14:17 -- Parsing ../Ark/lib/std/Sys.ark...
[INFO ] -- 2025-07-23T14:17 -- Parsing ../Ark/lib/std/List.ark...
[INFO ] -- 2025-07-23T14:17 -- Parsing ../Ark/lib/std/Functional.ark...
[INFO ] -- 2025-07-23T14:17 -- Parsing ../Ark/lib/std/Events.ark...
[INFO ] -- 2025-07-23T14:17 -- Parsing ../Ark/lib/std/Macros.ark...
[INFO ] -- 2025-07-23T14:17 -- Parsing ../Ark/lib/std/IO.ark...
string:find
string:findAfter
string:removeAt
string:ord
string:chr
string:setAt
string:toLower
string:toUpper
string:reverse
string:slice
string:split
string:replace
...
```

