---
title: "String"
slug: "string"
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

## format

---
`Builtin (format format values)`
Format a String given replacements

**Note**: https://fmt.dev/12.0/syntax/


#### Parameters
- `format`: the String to format
- `values`: as any argument as you need, of any valid ArkScript type


#### Example
{{< highlight_arkscript >}}
(format "Hello {}, my name is {}" "world" "ArkScript")
# Hello world, my name is ArkScript

{{< /highlight_arkscript >}}

## asciiLetters

---
`(let asciiLetters <value>)`
Upper and lowercase ASCII letters


**Author**: [@SuperFola](https://github.com/SuperFola)



## asciiLowercase

---
`(let asciiLowercase <value>)`
Lowercase ASCII letters


**Author**: [@SuperFola](https://github.com/SuperFola)



## asciiUppercase

---
`(let asciiUppercase <value>)`
Uppercase ASCII letters


**Author**: [@SuperFola](https://github.com/SuperFola)



## digits

---
`(let digits <value>)`
Digits used to represent decimal


**Author**: [@SuperFola](https://github.com/SuperFola)



## hexdigits

---
`(let hexdigits <value>)`
Digits used to represent hexadecimal


**Author**: [@SuperFola](https://github.com/SuperFola)



## octdigits

---
`(let octdigits <value>)`
Digits used to represent octal


**Author**: [@SuperFola](https://github.com/SuperFola)



## printable

---
`(let printable <value>)`
All printable characters


**Author**: [@SuperFola](https://github.com/SuperFola)



## punctuation

---
`(let punctuation <value>)`
Punctuation characters


**Author**: [@SuperFola](https://github.com/SuperFola)



## whitespace

---
`(let whitespace <value>)`
Whitespace characters


**Author**: [@SuperFola](https://github.com/SuperFola)



## find

---
`(let find (fun (_str _sub) (...)))`
Search a substring in a given String

**Note**: The original String is not modified. Return -1 when not found

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `string`: the String to search in
- `substr`: the substring to search for


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

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `string`: the String to search in
- `substr`: the substring to search for
- `startIndex`: index to start searching from


#### Example
{{< highlight_arkscript >}}
(string:findAfter "hello hello" "hello" 1)  # 6
(string:findAfter "hello world" "aworld" 0)  # -1
{{< /highlight_arkscript >}}

## removeAt

---
`(let removeAt (fun (_str _index) (...)))`
Remove a character from a String given an index

**Note**: The original String is not modified

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `string`: the String to modify
- `index`: the index of the character to remove (can be negative to search from the end)


#### Example
{{< highlight_arkscript >}}
(string:removeAt "hello world" 0)  # "ello world"
(string:removeAt "hello world" -1)  # "hello worl"
{{< /highlight_arkscript >}}

## ord

---
`(let ord (fun (_str) (...)))`
Get the ordinal of a given character


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `char`: a String with a single UTF8 character


#### Example
{{< highlight_arkscript >}}
(string:ord "h")  # 104
(string:ord "Ô")  # 212
{{< /highlight_arkscript >}}

## chr

---
`(let chr (fun (_str) (...)))`
Create a character from an UTF8 codepoint


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `codepoint`: an UTF8 codepoint (Number)


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

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `string`: the string to modify
- `index`: the index of the element to modify
- `value`: the new character


#### Example
{{< highlight_arkscript >}}
(string:setAt "hello" 1 "a")  # "hallo"
{{< /highlight_arkscript >}}

## contains?

---
`(let contains? (fun (_str _word) (...)))`
Check if a string contains a word


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_str`: String where the lookup occurs
- `_word`: Word to look up for



## containsAnyOf?

---
`(let containsAnyOf? (fun (_str _set_of_words) (...)))`
Check if a string contains a word for a set of words


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_str`: String where the lookup occurs
- `_set_of_words`: Words to look for


#### Example
{{< highlight_arkscript >}}
(let words ["hello" "world"])
(print (containsAnyOf "Hello, world! I like almonds" words))  # true
(print (containsAnyOf "Hello, world!" string:punctuation))  # true
{{< /highlight_arkscript >}}

## emptyOrWhitespace?

---
`(let emptyOrWhitespace? (fun (_str) (...)))`
Check if a string is empty or only consists of whitespaces


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_str`: the string to check


#### Example
{{< highlight_arkscript >}}
(print (string:emtpyOrWhitespace? "hello"))  # false
(print (string:emtpyOrWhitespace? " \t"))  # true
{{< /highlight_arkscript >}}

## count

---
`(let count (fun (_str _word) (...)))`
Count the number of non-overlapping occurrences of a word in a string


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_str`: string to search into
- `_word`: word to count occurrences of


#### Example
{{< highlight_arkscript >}}
(string:count "the three truths" "th")  # 3
{{< /highlight_arkscript >}}

## toLower

---
`(let toLower (fun (text) (...)))`
Converts the given character to lowercase.

**Note**: The original string is left unmodified.

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_string`: the string to make lowercase


#### Example
{{< highlight_arkscript >}}
(let message "HeLLo World, I like cheese")
(let new (string:toLower message))  # => hello world, i like cheese
{{< /highlight_arkscript >}}

## toUpper

---
`(let toUpper (fun (_string) (...)))`
Converts the given character to uppercase.

**Note**: The original string is left unmodified.

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_string`: the string to make uppercase


#### Example
{{< highlight_arkscript >}}
(let message "hello world, I like cheese")
(let new (string:toUpper message))  # => HELLO WORLD, I LIKE CHEESE
{{< /highlight_arkscript >}}

## reverse

---
`(let reverse (fun (_string) (...)))`
Reverse a string.

**Note**: The original string is left unmodified.

**Author**: [@Natendrtfm](https://github.com/Natendrtfm)

#### Parameter
- `_string`: the string to reverse


#### Example
{{< highlight_arkscript >}}
(let message "hello world, I like goats")
(let reversed (string:reverse message))  # => staog ekil I ,dlrow olleh
{{< /highlight_arkscript >}}

## repeat

---
`(let repeat (fun (_string _count) (...)))`
Repeat a string


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_string`: string to repeat
- `_count`: number of times to repeat said string


#### Example
{{< highlight_arkscript >}}
(print (string:repeat "a" 5))  # aaaaa
{{< /highlight_arkscript >}}

## slice

---
`(let slice (fun (_string _startingIndex _length) (...)))`
Get a slice of a given string, from a given index with a given length

**Note**: The original string is left unmodified. Example:

**Author**: [@Natendrtfm](https://github.com/Natendrtfm)

#### Parameters
- `_string`: the string to get a slice of
- `_startingIndex`: the index in the string where to start slicing
- `_length`: the length of the slice


#### Example
{{< highlight_arkscript >}}
(let message "hello world, I like goats")
(let slice (string:slice message 6 4))  # => worl
{{< /highlight_arkscript >}}

## split

---
`(let split (fun (_string _separator) (...)))`
Split a string in multiple substrings in a list, given a separator

**Note**: Returns a list of strings

**Author**: [@Natendrtfm](https://github.com/Natendrtfm)

#### Parameters
- `_string`: the string to split
- `_separator`: the separator to use for splitting


#### Example
{{< highlight_arkscript >}}
(let message "hello world, I like boats")
(let as-list (string:split message " "))
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
(let message "hello XXX, do you like the name XXX?")
(print (string:replace message "XXX" "Harry"))  # hello Harry, do you like the name Harry?
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
(let data [1 "hello" 3.14 true "world"])
(print (string:join data ";")) # 1;hello;3.14;true;world
{{< /highlight_arkscript >}}

## lstrip

---
`(let lstrip (fun (_str) (...)))`
Removes whitespaces from the left side of a string

**Note**: The original string isn't modified

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_str`: string to sanitize


#### Example
{{< highlight_arkscript >}}
(print (string:lstrip " a b c"))  # "a b c"
{{< /highlight_arkscript >}}

## rstrip

---
`(let rstrip (fun (_str) (...)))`
Removes whitespaces from the right side of a string

**Note**: The original string isn't modified

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_str`: string to sanitize


#### Example
{{< highlight_arkscript >}}
(print (string:rstrip " a b c     "))  # " a b c"
{{< /highlight_arkscript >}}

## strip

---
`(let strip (fun (_str) (...)))`
Removes whitespaces from both sides of a string

**Note**: The original string isn't modified

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_str`: string to sanitize


#### Example
{{< highlight_arkscript >}}
(print (string:strip " a b c    "))  # "a b c"
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

## startsWith?

---
`(let startsWith? (fun (_str _prefix) (...)))`
Check if a string starts with a given prefix


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_str`: string
- `_prefix`: prefix to look for


#### Example
{{< highlight_arkscript >}}
(print (string:startsWith? "Hello, world" "Hell"))  # true
(print (string:startsWith? "Hello, world" ", world"))  # false
{{< /highlight_arkscript >}}

## endsWith?

---
`(let endsWith? (fun (_str _suffix) (...)))`
Check if a string ends with a given suffix


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_str`: string
- `_suffix`: suffix to look for


#### Example
{{< highlight_arkscript >}}
(print (string:endsWith? "Hello, world" "ld"))  # true
(print (string:endsWith? "Hello, world" "worl"))  # false
{{< /highlight_arkscript >}}

## zfill

---
`(let zfill (fun (_str _n) (...)))`
Return a string filled with '0' digits to make a string of length _n


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_str`: string to left fill
- `_n`: width of the final string


#### Example
{{< highlight_arkscript >}}
(print (string:zfill "42" 4))  # 0042
{{< /highlight_arkscript >}}

## center

---
`(let center (fun (_str _len) (...)))`
Return a centered string of length _len, using spaces as fill chars


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_str`: string to center
- `_len`: width of the final string


#### Example
{{< highlight_arkscript >}}
(print (string:center "ArkScript" 15))  # "   ArkScript   "
{{< /highlight_arkscript >}}

## removePrefix

---
`(let removePrefix (fun (_str _prefix) (...)))`
If a string starts with a given prefix, remove it


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_str`: string
- `_prefix`: prefix to remove


#### Example
{{< highlight_arkscript >}}
(print (string:removePrefix "TestCase" "Test"))  # Case
(print (string:removePrefix "BaseTestCase" "Test"))  # BaseTestCase
{{< /highlight_arkscript >}}

## removeSuffix

---
`(let removeSuffix (fun (_str _suffix) (...)))`
If a string ends with a given suffix, remove it


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_str`: string
- `_suffix`: suffix to remove


#### Example
{{< highlight_arkscript >}}
(print (string:removeSuffix "TestCase" "Case"))  # Test
(print (string:removeSuffix "BaseTestCase" "Test"))  # BaseTestCase
{{< /highlight_arkscript >}}



{{< highlight_scripts >}}
