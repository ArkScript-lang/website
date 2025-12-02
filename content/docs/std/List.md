---
title: "List"
slug: "list"
description: ""
summary: ""
date: 2025-12-02T17:44:19+02:00
lastmod: 2025-12-02T17:44:19+02:00
draft: false
weight: 410
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

## reverse

---
`(let reverse (fun (_L) (...)))`
Reverse a given list and return a new one

**Note**: The original list is not modified
#### Parameter
- `list`: the list to reverse

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(list:reverse [1 2 3])  # [3 2 1]
{{< /highlight_arkscript >}}

## find

---
`(let find (fun (_L _x) (...)))`
Search an element in a List

**Note**: The original list is not modified
#### Parameters
- `list`: the List to search in
- `value`: the element to search

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(list:find [1 2 3] 1)  # 0
(list:find [1 2 3] 0)  # -1
{{< /highlight_arkscript >}}

## slice

---
`(let slice (fun (_L _start _end _step) (...)))`
Get a slice from a List

**Note**: The original list is not modified
#### Parameters
- `list`: the list to reverse
- `start`: included, must be positive
- `end`: not included, must be positive and smaller than the list
- `step`: must be greater than 0

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(list:slice [1 2 3 4 5] 1 4 2)  # [2 4]
{{< /highlight_arkscript >}}

## sort

---
`(let sort (fun (_L) (...)))`
Sort a List and return a new one

**Note**: The original list is not modified
#### Parameter
- `list`: the list to sort

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(list:sort [4 2 3])  # [1 2 4]
{{< /highlight_arkscript >}}

## fill

---
`(let fill (fun (_val _count) (...)))`
Generate a List of n copies of an element

#### Parameters
- `count`: the number of copies
- `value`: the element to copy

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(list:fill 4 nil)  # [nil nil nil nil]
{{< /highlight_arkscript >}}

## size

---
`(let size (fun (_L) (...)))`
Function to call the `len` operator on a list

#### Parameter
- `_L`: list to get the size of

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(print (list:size [1 2 3 4]))  # 4
{{< /highlight_arkscript >}}

## setAt

---
`(let setAt (fun (_L _index _x) (...)))`
Modify a given list and return a new one

**Note**: The original list is not modified
#### Parameters
- `list`: the list to modify
- `index`: the index of the element to modify
- `value`: the new element

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(list:setAt [1 2 3] 0 5)  # [5 2 3]
{{< /highlight_arkscript >}}

## forEach

---
`(let forEach (fun (_L _func) (...)))`
Iterate over a given list and run a given function on every element.

**Note**: The original list is not modified.
#### Parameters
- `_L`: the list to iterate over
- `_func`: the function to call on each element

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(let collection [1 2 5 12])
(list:forEach collection (fun (element) {
    (print element) }))
{{< /highlight_arkscript >}}

## enumerate

---
`(let enumerate (fun (_L _func) (...)))`
Iterate over a given list and run a given function on every element, passing its index as well.

**Note**: The original list is not modified.
#### Parameters
- `_L`: the list to iterate over
- `_func`: a binary function to call on each element with (index, element)

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(let collection [1 2 5 12])
(list:enumerate collection (fun (idx element) {
    (print idx " " element) }))
{{< /highlight_arkscript >}}

## product

---
`(let product (fun (_L) (...)))`
Iterate over a given list and multiply all the elements with the others.

**Note**: The original list is not modified.
#### Parameter
- `_L`: the list to iterate over

#### Author
[@Unactived](https://github.com/Unactived)

#### Example
{{< highlight_arkscript >}}
(let collection [1 2 5 12])
(let p (list:product collection))  # => 120
{{< /highlight_arkscript >}}

## sum

---
`(let sum (fun (_L) (...)))`
Iterate over a given list and sum all the elements.

**Note**: The original list is not modified.
#### Parameter
- `_L`: the list to iterate over

#### Author
[@Unactived](https://github.com/Unactived)

#### Example
{{< highlight_arkscript >}}
(let collection [1 2 5 12])
(let p (list:sum collection))  # => 20
{{< /highlight_arkscript >}}

## min

---
`(let min (fun (_L) (...)))`
Find the minimum in a list of numbers

**Note**: The original list is not modified.
#### Parameter
- `_L`: list of numbers

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(let value (list:min [0 1 2 3 5 8]))  # 0
{{< /highlight_arkscript >}}

## max

---
`(let max (fun (_L) (...)))`
Find the maximum in a list of numbers

**Note**: The original list is not modified.
#### Parameter
- `_L`: list of numbers

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(let value (list:max [0 1 2 3 5 8]))  # 8
{{< /highlight_arkscript >}}

## drop

---
`(let drop (fun (_L _n) (...)))`
Drop the first n elements of a list

**Note**: The original list is not modified.
#### Parameters
- `_L`: the list to work on
- `_n`: the number of elements to drop

#### Authors
[@rstefanic](https://github.com/rstefanic), [@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(let cool-stuff [1 2 3 4 5 6 7 8 9])
(print (list:drop cool-stuff 4))  # [5 6 7 8 9]
{{< /highlight_arkscript >}}

## dropWhile

---
`(let dropWhile (fun (_L _f) (...)))`
Drop the first elements of a list, while they match a given predicate

**Note**: The original list is not modified.
#### Parameters
- `_L`: the list to work on
- `_f`: the predicate

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(let cool-stuff [1 2 3 4 5 6 7 8 9])
(print (list:dropWhile cool-stuff (fun (a) (< a 4))))  # [4 5 6 7 8 9]
{{< /highlight_arkscript >}}

## filter

---
`(let filter (fun (_L _f) (...)))`
Keep elements in a given list if they follow a predicate

**Note**: The original list is not modified.
#### Parameters
- `_L`: the list to work on
- `_f`: the predicate

#### Author
[@rstefanic](https://github.com/rstefanic)

#### Example
{{< highlight_arkscript >}}
(import std.Math)
(print (list:filter [1 2 3 4 5 6 7 8 9] math:even?))  # [2 4 6 8]
{{< /highlight_arkscript >}}

## map

---
`(let map (fun (_L _f) (...)))`
Apply a given function to each element of a list

**Note**: The original list is not modified.
#### Parameters
- `_L`: the list to work on
- `_f`: the function to apply to each element

#### Author
[@rstefanic](https://github.com/rstefanic)

#### Example
{{< highlight_arkscript >}}
(print (list:map [1 2 3 4 5 6 7 8 9] (fun (e) (* e e))))  # [1 4 9 25 36 49 64 81]
{{< /highlight_arkscript >}}

## reduce

---
`(let reduce (fun (_L _f) (...)))`
Apply a function to the elements of a list to reduce it

**Note**: The original list is not modified.
#### Parameters
- `_L`: the list to work on
- `_f`: the function to apply

#### Author
[@Unactived](https://github.com/Unactived)

#### Example
{{< highlight_arkscript >}}
(let cool [1 2 3 4 5 6 7 8 9])
(print (list:reduce cool (fun (a b) (+ a b))))  # 45
{{< /highlight_arkscript >}}

## flatten

---
`(let flatten (fun (_L) (...)))`
Flatten a list

**Note**: The original list is not modified.
#### Parameter
- `_L`: the list to work on

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(let cool [[1 2 3] [4] 5 6 [7 8] 9])
(print (list:flatten cool))  # [1 2 3 4 5 6 7 8 9]
{{< /highlight_arkscript >}}

## flatMap

---
`(let flatMap (fun (_L _f) (...)))`
Apply a given function to each element of a list and then flatten it

**Note**: The original list is not modified.
#### Parameters
- `_L`: the list to work on
- `_f`: the function to apply to each element

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(let cool [1 2 3 4])
(print (list:flatMap cool (fun (a) [a a])))  # [1 1 2 2 3 3 4 4]
{{< /highlight_arkscript >}}

## take

---
`(let take (fun (_L _n) (...)))`
Take the first n elements of

**Note**: The original list is not modified.
#### Parameters
- `_L`: the list to work on
- `_n`: the number of elements to take

#### Author
[@rstefanic](https://github.com/rstefanic)

#### Example
{{< highlight_arkscript >}}
(print (list:take [1 2 3 4 5 6 7 8 9] 4))  # [1 2 3 4]
{{< /highlight_arkscript >}}

## takeWhile

---
`(let takeWhile (fun (_L _f) (...)))`
Take the first n elements of a list, given a predicate

**Note**: The original list is not modified.
#### Parameters
- `_L`: the list to work on
- `_f`: the predicate

#### Author
[@rakista112](https://github.com/rakista112)

#### Example
{{< highlight_arkscript >}}
(print (list:takeWhile [1 2 3 4 5 6 7 8 9 10] (fun (a) (< a 4))))  # [1 2 3]
{{< /highlight_arkscript >}}

## partition

---
`(let partition (fun (_L _f) (...)))`
Partition a list in two, given a predicate

**Note**: The original list is not modified.
#### Parameters
- `_L`: the list to work on
- `_f`: the predicate, accepting the value and its index

#### Author
[@rakista112](https://github.com/rakista112)

#### Example
{{< highlight_arkscript >}}
(let a [1 2 3])
(print (list:partition a (fun (c i) (= 0 (mod c 2)))))  # [[2] [1 3]]
{{< /highlight_arkscript >}}

## unzip

---
`(let unzip (fun (_L) (...)))`
Unzip a list of [[a b] [c d]...] into [[a c ...] [b d ...]]

**Note**: The original list is not modified.
#### Parameter
- `_L`: the list to work on

#### Author
[@Unactived](https://github.com/Unactived)

#### Example
{{< highlight_arkscript >}}
(let zipped [[1 5] [2 6] [3 7] [4 8]])
(print (list:unzip zipped))  # [[1 2 3 4] [5 6 7 8]]
{{< /highlight_arkscript >}}

## zip

---
`(let zip (fun (_a _b) (...)))`
Zip two lists into one: [1 2 3 4] and [5 6 7 8] will give [[1 5] [2 6] [3 7] [4 8]]

**Note**: The original lists are not modified.
#### Parameters
- `_a`: the first list to work on
- `_b`: the second list to work on

#### Author
[@Unactived](https://github.com/Unactived)

#### Example
{{< highlight_arkscript >}}
(let a [1 2 3 4])
(let b [5 6 7 8])
(print (list:zip a b))  # [[1 5] [2 6] [3 7] [4 8]]
{{< /highlight_arkscript >}}

## zipWithIndex

---
`(let zipWithIndex (fun (_L) (...)))`
Zip a list elements with their index. [5 6 7 8] will give [[0 5] [1 6] [2 7] [3 8]]

**Note**: The original list is not modified.
#### Parameter
- `_L`: the list to iterate over

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(let a [5 6 7 8])
(print (list:zipWithIndex a))  # [[0 5] [1 6] [2 7] [3 8]]
{{< /highlight_arkscript >}}

## foldLeft

---
`(let foldLeft (fun (_L _init _f) (...)))`
Fold a given list, starting from the left side

**Note**: The original list is not modified.
#### Parameters
- `_L`: the list to work on
- `_init`: an init value
- `_f`: a function to apply to the list

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(let a [1 2 3 4])
(print (list:foldLeft a 0 (fun (a b) (+ a b))))  # 10
{{< /highlight_arkscript >}}

## forAll

---
`(let forAll (fun (_L _f) (...)))`
Check if a condition is verified for all elements of a list

#### Parameters
- `_L`: the list to work on
- `_f`: the condition

#### Author
[@Gryfenfer97](https://github.com/Gryfenfer97)

#### Example
{{< highlight_arkscript >}}
(let a [1 2 3 4])
(let f (fun (e) (< e 5)))
(print (list:forAll a f))  # true
{{< /highlight_arkscript >}}

## any

---
`(let any (fun (_L _f) (...)))`
Check if a condition if verified for one or more elements of a list

#### Parameters
- `_L`: the list to work on
- `_f`: the condition

#### Author
[@Gryfenfer97](https://github.com/Gryfenfer97)

#### Example
{{< highlight_arkscript >}}
(let a [1 2 3 4])
(let f (fun (e) (< e 3)))
(print (list:any a f))  # true
{{< /highlight_arkscript >}}

## none

---
`(let none (fun (_L _f) (...)))`
Check if a condition can't be verified for any element of a list

#### Parameters
- `_L`: the list to work on
- `_f`: the condition

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(let a [1 2 3 4])
(let f (fun (e) (< e 3)))
(print (list:none a f))  # false
(print (list:none [4 5 6] f))  # true
{{< /highlight_arkscript >}}

## countIf

---
`(let countIf (fun (_L _f) (...)))`
Count the number of elements in a list that match a condition

#### Parameters
- `_L`: the list to work on
- `_f`: the condition

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(let lst [1 2 3 4 5 6 7 8 9])
(let is_even (fun (e) (= 0 (mod e 2))))
(print (list:countIf lst is_even))  # 4
{{< /highlight_arkscript >}}

## iterate

---
`(let iterate (fun (_init _f _length) (...)))`
Generate a sequence based on a unary function, initial value and length

#### Parameters
- `_init`: initial value of the sequence
- `_f`: unary function to generate values
- `_length`: the sequence length

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(let f (fun (x) (+ 7 x)))
(print (list:iterate 0 f 10))  # [0 7 14 21 28 35 42 49 56 63]
{{< /highlight_arkscript >}}

## iota

---
`(let iota (fun (_init _length) (...)))`
Generate a sequence of numbers

#### Parameters
- `_init`: initial value of the sequence
- `_length`: the sequence length

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(print (list:iota 0 10))  # [0 1 2 3 4 5 6 7 8 9]
{{< /highlight_arkscript >}}

## chunkBy

---
`(let chunkBy (fun (_L _length) (...)))`
Chunk a list in sub-lists of size n

#### Parameters
- `_L`: list to chunk
- `_length`: size of the chunks

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(let indices (list:iota 1 9))  # [1 2 3 4 5 6 7 8 9]
(print (list:chunkBy indices 3))  # [[1 2 3] [4 5 6] [7 8 9]]
{{< /highlight_arkscript >}}

## insert

---
`(let insert (fun (_L _index _value) (...)))`
Insert an element (or expand a list) at a given position inside a list

**Note**: The original list is not modified
#### Parameters
- `_L`: list to insert element(s) in
- `_index`: where to insert
- `_value`: value to insert

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(let a [0])
(print (list:insert a 1 4))  # [0 4]
(print (list:insert a 1 [1 2]))  # [0 1 2]
(let b [0 9])
(print (list:insert b 1 4))  # [0 4 9]
(print (list:insert b 1 [1 2]))  # [0 1 2 9]
{{< /highlight_arkscript >}}

## window

---
`(let window (fun (_L _size _f) (...)))`
Create a sliding window of a given size on a list

**Note**: The original list is not modified
#### Parameters
- `_L`: list to iterate over
- `_size`: window size, must be at least 1
- `_f`: function to call with the window

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(let f (fun (lst) (print lst))
(list:window [1 2 3 4 5] 3 f)
# [1 2 3]
# [2 3 4]
# [3 4 5]
{{< /highlight_arkscript >}}



{{< highlight_scripts >}}
