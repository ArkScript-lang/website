---
title: "String"
slug: "string"
description: ""
summary: ""
date: 2025-07-21T19:29:37
lastmod: 2025-07-21T19:29:37
draft: false
weight: 999
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

## find

---
`(let find (fun (_str _sub) (...)))`
Search a substring in a given String

**Note**: The original String is not modified. Return -1 when not found
#### Parameters
- `string`: the String to search in
- `substr`: the substring to search for

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(string:find "hello world" "hello")  # 0
(string:find "hello world" "aworld")  # -1
{{< /highlight_arkscript >}}

## findAfter

---
`(let findAfter (fun (_str _sub _after) (...)))`
Search a substring in a given String

**Note**: The original String is not modified. Return -1 when not found
#### Parameters
- `string`: the String to search in
- `substr`: the substring to search for
- `startIndex`: index to start searching from

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(string:find "hello hello" "hello" 1)  # 6
(string:find "hello world" "aworld" 0)  # -1
{{< /highlight_arkscript >}}

## removeAt

---
`(let removeAt (fun (_str _index) (...)))`
Remove a character from a String given an index

**Note**: The original String is not modified
#### Parameters
- `string`: the String to modify
- `index`: the index of the character to remove (can be negative to search from the end)

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(string:removeAt "hello world" 0)  # "ello world"
(string:removeAt "hello world" -1)  # "hello worl"
{{< /highlight_arkscript >}}

## ord

---
`(let ord (fun (_str) (...)))`
Get the ordinal of a given character

#### Parameter
- `char`: a String with a single UTF8 character

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(string:ord "h")  # 104
(string:ord "Ô")  # 212
{{< /highlight_arkscript >}}

## chr

---
`(let chr (fun (_str) (...)))`
Create a character from an UTF8 codepoint

#### Parameter
- `codepoint`: an UTF8 codepoint (Number)

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(string:chr 104)  # "h"
(string:chr 212)  # "Ô"
{{< /highlight_arkscript >}}

## setAt

---
`(let setAt (fun (_str _index _x) (...)))`
Modify a given string and return a new one

**Note**: The original string is not modified
#### Parameters
- `string`: the string to modify
- `index`: the index of the element to modify
- `value`: the new character

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(string:setAt "hello" 1 "a")  # "hallo"
{{< /highlight_arkscript >}}

## toLower

---
`(let toLower (fun (text) (...)))`
Converts the given character to lowercase.

**Note**: The original string is left unmodified.
#### Parameter
- `_string`: the string to make lowercase

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(import std.String)
(let message "HeLLo World, I like cheese")
(let new (toLower message))  # => hello world, i like cheese
{{< /highlight_arkscript >}}

## toUpper

---
`(let toUpper (fun (_string) (...)))`
Converts the given character to uppercase.

**Note**: The original string is left unmodified.
#### Parameter
- `_string`: the string to make uppercase

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(import std.String)
(let message "hello world, I like cheese")
(let new (toUpper message))  # => HELLO WORLD, I LIKE CHEESE
{{< /highlight_arkscript >}}

## reverse

---
`(let reverse (fun (_string) (...)))`
Reverse a string.

**Note**: The original string is left unmodified.
#### Parameter
- `_string`: the string to reverse

#### Author
[@Natendrtfm](https://github.com/Natendrtfm)

#### Example
{{< highlight_arkscript >}}
(import std.String)
(let message "hello world, I like goats")
(let reversed (reverse message))  # => staog ekil I ,dlrow olleh
{{< /highlight_arkscript >}}

## slice

---
`(let slice (fun (_string _startingIndex _length) (...)))`
Get a slice of a given string, from a given index with a given length

**Note**: The original string is left unmodified. Example:
#### Parameters
- `_string`: the string to get a slice of
- `_startingIndex`: the index in the string where to start slicing
- `_length`: the length of the slice

#### Author
[@Natendrtfm](https://github.com/Natendrtfm)

#### Example
{{< highlight_arkscript >}}
(import std.String)
(let message "hello world, I like goats")
(let slice (slice message 6 4))  # => worl
{{< /highlight_arkscript >}}

## split

---
`(let split (fun (_string _separator) (...)))`
Split a string in multiple substrings in a list, given a separator

**Note**: Returns a list of strings. Example :
#### Parameters
- `_string`: the string to split
- `_separator`: the separator to use for splitting

#### Author
[@Natendrtfm](https://github.com/Natendrtfm)

#### Example
{{< highlight_arkscript >}}
(import std.String)
(let message "hello world, I like boats")
(let splitted (split message " "))
{{< /highlight_arkscript >}}

## replace

---
`(let replace (fun (_string _pattern _new) (...)))`
Replace a substring in a given string

**Note**: The original string isn't modified.
#### Parameters
- `_string`: base string who contain pattern to replace by new sub string given
- `_pattern`: sub string pattern to replace
- `_new`: string who must replace the pattern


#### Example
{{< highlight_arkscript >}}
(import std.String)
(let message "hello XXX, do you like the name XXX?")
(print (replace message "XXX" "Harry"))  # hello Harry, do you like the name Harry?
{{< /highlight_arkscript >}}

## join

---
`(let join (fun (_list _delim) (...)))`
Join a list of elements with a given string delimiter

**Note**: The original list isn't modified
#### Parameters
- `_list`: host the elements to join
- `_delim`: a string delimiter to be put between each element


#### Example
{{< highlight_arkscript >}}
(import std.String)
(let data [1 "hello" 3.14 true "world"])
(print (join data ";")) # 1;hello;3.14;true;world
{{< /highlight_arkscript >}}

## stripMargin

---
`(let stripMargin (fun (_str) (...)))`
Strip the margin of a multiline string

#### Parameter
- `_str`: multiline string, margin is (space)*(|)


#### Example
{{< highlight_arkscript >}}
(let s "hello
       |abc
       |def")
(string:stripMargin s)
{{< /highlight_arkscript >}}



{{< highlight_scripts >}}
