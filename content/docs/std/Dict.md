---
title: "Dict"
slug: "dict"
description: ""
summary: ""
date: 2026-01-10T16:50:25+02:00
lastmod: 2026-01-10T16:50:25+02:00
draft: false
weight: 410
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

## dict

---
`Builtin (dict args...)`
Creates a dictionary from a set of arguments, grouping them 2 by 2 to create (key, value) pairs


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `args...`: the arguments of the function


#### Example
{{< highlight_arkscript >}}
(let d (dict "key" "value" 5 12))
(print d)  # {key: value, 5: 12}
{{< /highlight_arkscript >}}

## get

---
`(let get (fun (_D _key) (...)))`
Get a value from a given dictionary using a key, or nil if it doesn't exist


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_D`: dictionary
- `_key`: key to get


#### Example
{{< highlight_arkscript >}}
(let data (dict "key" "value"))
(print (dict:get data "key"))  # value
{{< /highlight_arkscript >}}

## add

---
`(let add (fun (_D _key _value) (...)))`
Adds or replaces an entry to a dictionary, given a (key, value) pair

**Note**: The dictionary is modified in place

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_D`: dictionary
- `_key`: key to add (or replace)
- `_value`: value for the given key


#### Example
{{< highlight_arkscript >}}
(let data (dict "key" "value"))
(dict:add data "hello" "world")
(dict:add data "key" "hole")  # key:value will be replaced by key:hole
(print data)  # {key: hole, hello: world}
{{< /highlight_arkscript >}}

## contains?

---
`(let contains? (fun (_D _key) (...)))`
Checks if the dictionary has a given key


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_D`: dictionary
- `_key`: key to check for its presence in the dict


#### Example
{{< highlight_arkscript >}}
(let data (dict "key" "value"))
(print (dict:contains? data "key"))  # true
(print (dict:contains? data "test"))  # false
{{< /highlight_arkscript >}}

## contains

---
`(let contains <value>)`
Checks if the dictionary has a given key

**Deprecated**: Use `dict:contains?`


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_D`: dictionary


#### Example
{{< highlight_arkscript >}}
(let data (dict "key" "value"))
(print (dict:contains data "key"))  # true
(print (dict:contains data "test"))  # false
{{< /highlight_arkscript >}}

## getOrElse

---
`(let getOrElse (fun (_D _key _default) (...)))`
Get a value from a given dictionary using a key, or a default value if it doesn't exist


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_D`: dictionary
- `_key`: key to get
- `_default`: default value in case the key isn't in the dictionary


#### Example
{{< highlight_arkscript >}}
(let data (dict "key" "value"))
(print (dict:getOrElse data "key" "hello"))  # value
(print (dict:getOrElse data "count" 5))  # 5
{{< /highlight_arkscript >}}

## updateOrDefault

---
`(let updateOrDefault (fun (_D _key _f _default) (...)))`
Updates an entry or create it from a default value

**Note**: The dictionary is modified in place

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_D`: dictionary
- `_key`: key to create or update
- `_f`: function called with the existing value, returning an updated value
- `_default`: default value to use if the key doesn't exist


#### Example
{{< highlight_arkscript >}}
(let data (dict "count" 0))
(dict:updateOrDefault data "count" (fun (c) (+ c 1)) 1)  # count = 1
{{< /highlight_arkscript >}}

## remove

---
`(let remove (fun (_D _key) (...)))`
Deletes an entry from a dictionary, given a key

**Note**: The dictionary is modified in place

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_D`: dictionary
- `_key`: key to delete


#### Example
{{< highlight_arkscript >}}
(let data (dict "key" "value"))
(dict:remove data "key")
(print (dict:get data "key"))  # nil
{{< /highlight_arkscript >}}

## keys

---
`(let keys (fun (_D) (...)))`
Returns a list of the keys of a dictionary

**Note**: Keys are returned in the order they were added, unless a removal occurred

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_D`: dictionary


#### Example
{{< highlight_arkscript >}}
(let data (dict "key" "value" 5 12))
(print (dict:keys data))  # [key, 5]
{{< /highlight_arkscript >}}

## size

---
`(let size (fun (_D) (...)))`
Computes the number of (key, value) pairs in a given dictionary


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_D`: dictionary


#### Example
{{< highlight_arkscript >}}
(let data (dict "key" "value"))
(print (dict:size data))  # 1
{{< /highlight_arkscript >}}

## values

---
`(let values (fun (_D) (...)))`
Returns a list of the values of a dictionary


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_D`: dictionary


#### Example
{{< highlight_arkscript >}}
(let data (dict "key" "value" 5 12))
(print (dict:values data))  # [value, 12]
{{< /highlight_arkscript >}}

## entries

---
`(let entries (fun (_D) (...)))`
Returns a list of the entries of a dictionary


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_D`: dictionary


#### Example
{{< highlight_arkscript >}}
(let data (dict "key" "value" 5 12))
(print (dict:entries data))  # [[key, value], [5, 12]]
{{< /highlight_arkscript >}}

## map

---
`(let map (fun (_D _f) (...)))`
Map each value in a dictionary with a given function

**Note**: The original dictionary is not modified

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_D`: dictionary
- `_f`: function to apply to each value, taking both key and value as arguments


#### Example
{{< highlight_arkscript >}}
(let data (dict "key" "value"))
(let new (dict:map data (fun (key value) (format "{}-{}" key value))))
(print data)  # {key: value}
(print new)  # {key: key-value}
{{< /highlight_arkscript >}}

## map!

---
`(let map! (fun (_D _f) (...)))`
Map each value in a dictionary with a given function

**Note**: The original dictionary is updated in place

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_D`: dictionary
- `_f`: function to apply to each value, taking both key and value as arguments


#### Example
{{< highlight_arkscript >}}
(let data (dict "key" "value"))
(dict:map! data (fun (key value) (format "{}-{}" key value)))
(print data)  # {key: key-value}
{{< /highlight_arkscript >}}

## forEach

---
`(let forEach (fun (_D _f) (...)))`
Iterate over the pairs of a dictionary with a given function


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_D`: dictionary
- `_f`: function to call on each pair


#### Example
{{< highlight_arkscript >}}
(let data (dict "key" "value" 5 12))
(dict:forEach data (fun (key value) (print (format "{}-{}" key value))))
# key-value
# 5-12
{{< /highlight_arkscript >}}

## filter

---
`(let filter (fun (_D _f) (...)))`
Filter a dictionary with a predicate

**Note**: The original dictionary is not modified

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_D`: dictionary
- `_f`: predicate, taking both key and value as arguments


#### Example
{{< highlight_arkscript >}}
(let data (dict "key" "value" "hello" "world"))
(let new (dict:filter data (fun (key value) (> (len key) 3))))
(print data)  # {key: value, hello: world}
(print new)  # {hello: world}
{{< /highlight_arkscript >}}

## filter!

---
`(let filter! (fun (_D _f) (...)))`
Filter a dictionary with a predicate

**Note**: The original dictionary is updated in place

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_D`: dictionary
- `_f`: predicate, taking both key and value as arguments


#### Example
{{< highlight_arkscript >}}
(let data (dict "key" "value" "hello" "world"))
(dict:filter! data (fun (key value) (> (len key) 3)))
(print data)  # {hello: world}
{{< /highlight_arkscript >}}

## copy

---
`(let copy (fun (_D) (...)))`
Copy a dictionary

**Note**: The original dictionary is not modified

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_D`: dictionary to copy


#### Example
{{< highlight_arkscript >}}
(let data (dict "key" "value" "hello" "world"))
(let new (dict:copy data))
(dict:add data "test" 12)
(print data)  # {key: value, hello: world, test: 12}
(print new)  # {key: value, hello: world}
{{< /highlight_arkscript >}}

## update!

---
`(let update! (fun (_D _D2) (...)))`
Update a dictionary with (key, value) pairs from a second dictionary

**Note**: The original dictionary is updated in place

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_D`: dictionary to update
- `_D2`: second dictionary


#### Example
{{< highlight_arkscript >}}
(let data (dict "key" "value" "hello" "world"))
(let new (dict "key" "new value" 5 12))
(dict:update! data new)
(print data)  # {key: new value, hello: world, 5: 12}
{{< /highlight_arkscript >}}



{{< highlight_scripts >}}
