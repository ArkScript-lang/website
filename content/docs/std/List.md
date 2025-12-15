---
title: "List"
slug: "list"
description: ""
summary: ""
date: 2025-12-15T18:03:28+02:00
lastmod: 2025-12-15T18:03:28+02:00
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

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `list`: the list to reverse


#### Example
{{< highlight_arkscript >}}
(list:reverse [1 2 3])  # [3 2 1]
{{< /highlight_arkscript >}}

## find

---
`(let find (fun (_L _x) (...)))`
Search an element in a List

**Note**: The original list is not modified

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `list`: the List to search in
- `value`: the element to search


#### Example
{{< highlight_arkscript >}}
(list:find [1 2 3] 1)  # 0
(list:find [1 2 3] 0)  # -1
{{< /highlight_arkscript >}}

## contains?

---
`(let contains? (fun (_L _x) (...)))`
Search if an element is in a List

**Note**: The original list is not modified

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `list`: the List to search in
- `value`: the element to search


#### Example
{{< highlight_arkscript >}}
(list:contains? [1 2 3] 1)  # true
(list:contains? [1 2 3] 0)  # false
{{< /highlight_arkscript >}}

## slice

---
`(let slice (fun (_L _start _end _step) (...)))`
Get a slice from a List

**Note**: The original list is not modified

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `list`: the list to reverse
- `start`: included, must be positive
- `end`: not included, must be positive and smaller than the list
- `step`: must be greater than 0


#### Example
{{< highlight_arkscript >}}
(list:slice [1 2 3 4 5] 1 4 2)  # [2 4]
{{< /highlight_arkscript >}}

## sort

---
`(let sort (fun (_L) (...)))`
Sort a List and return a new one

**Note**: The original list is not modified

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `list`: the list to sort


#### Example
{{< highlight_arkscript >}}
(list:sort [4 2 3])  # [1 2 4]
{{< /highlight_arkscript >}}

## fill

---
`(let fill (fun (_val _count) (...)))`
Generate a List of n copies of an element


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `count`: the number of copies
- `value`: the element to copy


#### Example
{{< highlight_arkscript >}}
(list:fill 4 nil)  # [nil nil nil nil]
{{< /highlight_arkscript >}}

## size

---
`(let size (fun (_L) (...)))`
Function to call the `len` operator on a list


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_L`: list to get the size of


#### Example
{{< highlight_arkscript >}}
(print (list:size [1 2 3 4]))  # 4
{{< /highlight_arkscript >}}

## setAt

---
`(let setAt (fun (_L _index _x) (...)))`
Modify a given list and return a new one

**Note**: The original list is not modified

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `list`: the list to modify
- `index`: the index of the element to modify
- `value`: the new element


#### Example
{{< highlight_arkscript >}}
(list:setAt [1 2 3] 0 5)  # [5 2 3]
{{< /highlight_arkscript >}}

## stopIteration

---
`(let stopIteration <value>)`
Value to return from functions passed to forEach, enumerate, window... to stop iteration early


**Author**: [@SuperFola](https://github.com/SuperFola)



## forEach

---
`(let forEach (fun ((ref _L) _func) (...)))`
Iterate over a given list and run a given function on every element.

**Note**: The original list is not modified. Returns true if it returns early, false otherwise

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_L`: the list to iterate over
- `_func`: the function to call on each element. It can return list:stopIteration to stop iteration early


#### Example
{{< highlight_arkscript >}}
(let collection [1 2 5 12])
(list:forEach collection (fun (element) {
    (print element) }))
{{< /highlight_arkscript >}}

## enumerate

---
`(let enumerate (fun ((ref _L) _func) (...)))`
Iterate over a given list and run a given function on every element, passing its index as well.

**Note**: The original list is not modified. Returns true if it returns early, false otherwise

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_L`: the list to iterate over
- `_func`: a binary function to call on each element with (index, element). It can return list:stopIteration to stop iteration early


#### Example
{{< highlight_arkscript >}}
(let collection [1 2 5 12])
(list:enumerate collection (fun (idx element) {
    (print idx " " element) }))
{{< /highlight_arkscript >}}

## product

---
`(let product (fun ((ref _L)) (...)))`
Iterate over a given list and multiply all the elements with the others.

**Note**: The original list is not modified.

**Author**: [@Unactived](https://github.com/Unactived)

#### Parameter
- `_L`: the list to iterate over


#### Example
{{< highlight_arkscript >}}
(let collection [1 2 5 12])
(let p (list:product collection))  # => 120
{{< /highlight_arkscript >}}

## sum

---
`(let sum (fun ((ref _L)) (...)))`
Iterate over a given list and sum all the elements.

**Note**: The original list is not modified.

**Author**: [@Unactived](https://github.com/Unactived)

#### Parameter
- `_L`: the list to iterate over


#### Example
{{< highlight_arkscript >}}
(let collection [1 2 5 12])
(let p (list:sum collection))  # => 20
{{< /highlight_arkscript >}}

## min

---
`(let min (fun ((ref _L)) (...)))`
Find the minimum in a list of numbers

**Note**: The original list is not modified.

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_L`: list of numbers


#### Example
{{< highlight_arkscript >}}
(let value (list:min [0 1 2 3 5 8]))  # 0
{{< /highlight_arkscript >}}

## max

---
`(let max (fun ((ref _L)) (...)))`
Find the maximum in a list of numbers

**Note**: The original list is not modified.

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_L`: list of numbers


#### Example
{{< highlight_arkscript >}}
(let value (list:max [0 1 2 3 5 8]))  # 8
{{< /highlight_arkscript >}}

## median

---
`(let median (fun ((ref _L)) (...)))`
Find the median in a list of numbers

**Note**: The original list is not modified.

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_L`: list of numbers


#### Example
{{< highlight_arkscript >}}
(let value (list:median [0 1 2 3 5 8]))  # 2.5
{{< /highlight_arkscript >}}

## drop

---
`(let drop (fun ((ref _L) _n) (...)))`
Drop the first n elements of a list

**Note**: The original list is not modified.

**Authors**: [@rstefanic](https://github.com/rstefanic), [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_L`: the list to work on
- `_n`: the number of elements to drop


#### Example
{{< highlight_arkscript >}}
(let cool-stuff [1 2 3 4 5 6 7 8 9])
(print (list:drop cool-stuff 4))  # [5 6 7 8 9]
{{< /highlight_arkscript >}}

## dropWhile

---
`(let dropWhile (fun ((ref _L) _f) (...)))`
Drop the first elements of a list, while they match a given predicate

**Note**: The original list is not modified.

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_L`: the list to work on
- `_f`: the predicate


#### Example
{{< highlight_arkscript >}}
(let cool-stuff [1 2 3 4 5 6 7 8 9])
(print (list:dropWhile cool-stuff (fun (a) (< a 4))))  # [4 5 6 7 8 9]
{{< /highlight_arkscript >}}

## filter

---
`(let filter (fun ((ref _L) _f) (...)))`
Keep elements in a given list if they follow a predicate

**Note**: The original list is not modified.

**Author**: [@rstefanic](https://github.com/rstefanic)

#### Parameters
- `_L`: the list to work on
- `_f`: the predicate


#### Example
{{< highlight_arkscript >}}
(import std.Math)
(print (list:filter [1 2 3 4 5 6 7 8 9] math:even?))  # [2 4 6 8]
{{< /highlight_arkscript >}}

## sortByKey

---
`(let sortByKey (fun ((ref _L) _key) (...)))`
Sort elements in a list using a function to compute the key

**Note**: Use the quicksort algorithm, the original list is not modified.

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_L`: list to sort
- `_key`: function called on each element of the list, returning a unique key to use for sorting


#### Example
{{< highlight_arkscript >}}
(let ranges [[3 5] [10 14] [16 20] [12 18]])
(let sorted (sortByKey ranges (fun (e) (head e))))
(print sorted)  # [[3 5] [10 14] [12 18] [16 20]]
{{< /highlight_arkscript >}}

## map

---
`(let map (fun ((ref _L) _f) (...)))`
Apply a given function to each element of a list

**Note**: The original list is not modified.

**Author**: [@rstefanic](https://github.com/rstefanic)

#### Parameters
- `_L`: the list to work on
- `_f`: the function to apply to each element


#### Example
{{< highlight_arkscript >}}
(print (list:map [1 2 3 4 5 6 7 8 9] (fun (e) (* e e))))  # [1 4 9 25 36 49 64 81]
{{< /highlight_arkscript >}}

## reduce

---
`(let reduce (fun ((ref _L) _f) (...)))`
Apply a function to the elements of a list to reduce it

**Note**: The original list is not modified.

**Author**: [@Unactived](https://github.com/Unactived)

#### Parameters
- `_L`: the list to work on
- `_f`: the function to apply


#### Example
{{< highlight_arkscript >}}
(let cool [1 2 3 4 5 6 7 8 9])
(print (list:reduce cool (fun (a b) (+ a b))))  # 45
{{< /highlight_arkscript >}}

## flatten

---
`(let flatten (fun ((ref _L)) (...)))`
Flatten a list

**Note**: The original list is not modified.

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_L`: the list to work on


#### Example
{{< highlight_arkscript >}}
(let cool [[1 2 3] [4] 5 6 [7 8] 9])
(print (list:flatten cool))  # [1 2 3 4 5 6 7 8 9]
{{< /highlight_arkscript >}}

## flatMap

---
`(let flatMap (fun ((ref _L) _f) (...)))`
Apply a given function to each element of a list and then flatten it

**Note**: The original list is not modified.

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_L`: the list to work on
- `_f`: the function to apply to each element


#### Example
{{< highlight_arkscript >}}
(let cool [1 2 3 4])
(print (list:flatMap cool (fun (a) [a a])))  # [1 1 2 2 3 3 4 4]
{{< /highlight_arkscript >}}

## take

---
`(let take (fun ((ref _L) (mut _n)) (...)))`
Take the first n elements of

**Note**: The original list is not modified.

**Author**: [@rstefanic](https://github.com/rstefanic)

#### Parameters
- `_L`: the list to work on
- `_n`: the number of elements to take


#### Example
{{< highlight_arkscript >}}
(print (list:take [1 2 3 4 5 6 7 8 9] 4))  # [1 2 3 4]
{{< /highlight_arkscript >}}

## takeWhile

---
`(let takeWhile (fun ((ref _L) _f) (...)))`
Take the first n elements of a list, given a predicate

**Note**: The original list is not modified.

**Author**: [@rakista112](https://github.com/rakista112)

#### Parameters
- `_L`: the list to work on
- `_f`: the predicate


#### Example
{{< highlight_arkscript >}}
(print (list:takeWhile [1 2 3 4 5 6 7 8 9 10] (fun (a) (< a 4))))  # [1 2 3]
{{< /highlight_arkscript >}}

## partition

---
`(let partition (fun ((ref _L) _f) (...)))`
Partition a list in two, given a predicate

**Note**: The original list is not modified.

**Author**: [@rakista112](https://github.com/rakista112)

#### Parameters
- `_L`: the list to work on
- `_f`: the predicate, accepting the value and its index


#### Example
{{< highlight_arkscript >}}
(let a [1 2 3])
(print (list:partition a (fun (c i) (= 0 (mod c 2)))))  # [[2] [1 3]]
{{< /highlight_arkscript >}}

## unzip

---
`(let unzip (fun ((ref _L)) (...)))`
Unzip a list of [[a b] [c d]...] into [[a c ...] [b d ...]]

**Note**: The original list is not modified.

**Author**: [@Unactived](https://github.com/Unactived)

#### Parameter
- `_L`: the list to work on


#### Example
{{< highlight_arkscript >}}
(let zipped [[1 5] [2 6] [3 7] [4 8]])
(print (list:unzip zipped))  # [[1 2 3 4] [5 6 7 8]]
{{< /highlight_arkscript >}}

## zip

---
`(let zip (fun ((ref _a) (ref _b)) (...)))`
Zip two lists into one: [1 2 3 4] and [5 6 7 8] will give [[1 5] [2 6] [3 7] [4 8]]

**Note**: The original lists are not modified.

**Author**: [@Unactived](https://github.com/Unactived)

#### Parameters
- `_a`: the first list to work on
- `_b`: the second list to work on


#### Example
{{< highlight_arkscript >}}
(let a [1 2 3 4])
(let b [5 6 7 8])
(print (list:zip a b))  # [[1 5] [2 6] [3 7] [4 8]]
{{< /highlight_arkscript >}}

## zipWithIndex

---
`(let zipWithIndex (fun ((ref _L)) (...)))`
Zip a list elements with their index. [5 6 7 8] will give [[0 5] [1 6] [2 7] [3 8]]

**Note**: The original list is not modified.

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_L`: the list to iterate over


#### Example
{{< highlight_arkscript >}}
(let a [5 6 7 8])
(print (list:zipWithIndex a))  # [[0 5] [1 6] [2 7] [3 8]]
{{< /highlight_arkscript >}}

## foldLeft

---
`(let foldLeft (fun ((ref _L) _init _f) (...)))`
Fold a given list, starting from the left side

**Note**: The original list is not modified.

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_L`: the list to work on
- `_init`: an init value
- `_f`: a function to apply to the list


#### Example
{{< highlight_arkscript >}}
(let a [1 2 3 4])
(print (list:foldLeft a 0 (fun (a b) (+ a b))))  # 10
{{< /highlight_arkscript >}}

## forAll

---
`(let forAll (fun ((ref _L) _f) (...)))`
Check if a condition is verified for all elements of a list


**Author**: [@Gryfenfer97](https://github.com/Gryfenfer97)

#### Parameters
- `_L`: the list to work on
- `_f`: the condition


#### Example
{{< highlight_arkscript >}}
(let a [1 2 3 4])
(let f (fun (e) (< e 5)))
(print (list:forAll a f))  # true
{{< /highlight_arkscript >}}

## any

---
`(let any (fun ((ref _L) _f) (...)))`
Check if a condition if verified for one or more elements of a list


**Author**: [@Gryfenfer97](https://github.com/Gryfenfer97)

#### Parameters
- `_L`: the list to work on
- `_f`: the condition


#### Example
{{< highlight_arkscript >}}
(let a [1 2 3 4])
(let f (fun (e) (< e 3)))
(print (list:any a f))  # true
{{< /highlight_arkscript >}}

## none

---
`(let none (fun ((ref _L) _f) (...)))`
Check if a condition can't be verified for any element of a list


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_L`: the list to work on
- `_f`: the condition


#### Example
{{< highlight_arkscript >}}
(let a [1 2 3 4])
(let f (fun (e) (< e 3)))
(print (list:none a f))  # false
(print (list:none [4 5 6] f))  # true
{{< /highlight_arkscript >}}

## countIf

---
`(let countIf (fun ((ref _L) _f) (...)))`
Count the number of elements in a list that match a condition


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_L`: the list to work on
- `_f`: the condition


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


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_init`: initial value of the sequence
- `_f`: unary function to generate values
- `_length`: the sequence length


#### Example
{{< highlight_arkscript >}}
(let f (fun (x) (+ 7 x)))
(print (list:iterate 0 f 10))  # [0 7 14 21 28 35 42 49 56 63]
{{< /highlight_arkscript >}}

## iota

---
`(let iota (fun (_init _length) (...)))`
Generate a sequence of numbers


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_init`: initial value of the sequence
- `_length`: the sequence length


#### Example
{{< highlight_arkscript >}}
(print (list:iota 0 10))  # [0 1 2 3 4 5 6 7 8 9]
{{< /highlight_arkscript >}}

## chunkBy

---
`(let chunkBy (fun ((ref _L) _length) (...)))`
Chunk a list in sub-lists of size n


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_L`: list to chunk
- `_length`: size of the chunks


#### Example
{{< highlight_arkscript >}}
(let indices (list:iota 1 9))  # [1 2 3 4 5 6 7 8 9]
(print (list:chunkBy indices 3))  # [[1 2 3] [4 5 6] [7 8 9]]
{{< /highlight_arkscript >}}

## insert

---
`(let insert (fun ((ref _L) _index (mut _value)) (...)))`
Insert an element (or expand a list) at a given position inside a list

**Note**: The original list is not modified

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_L`: list to insert element(s) in
- `_index`: where to insert
- `_value`: value to insert


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
`(let window (fun ((ref _L) _size _f) (...)))`
Create a sliding window of a given size on a list

**Note**: The original list is not modified. Returns true if it returns early, false otherwise

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_L`: list to iterate over
- `_size`: window size, must be at least 1
- `_f`: function to call with the window. It can return list:stopIteration to stop iteration early


#### Example
{{< highlight_arkscript >}}
(let f (fun (lst) (print lst))
(list:window [1 2 3 4 5] 3 f)
# [1 2 3]
# [2 3 4]
# [3 4 5]
{{< /highlight_arkscript >}}

## transpose

---
`(let transpose (fun (_L) (...)))`
Transpose a list of lists or list of strings

**Note**: The original list is not modified. Each element should have the same length

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_L`: list of lists/strings to transpose


#### Example
{{< highlight_arkscript >}}
(let data [[1 2 3] [4 5 6] [7 8 9])
(print (list:transpose data))  # [[1 4 7] [2 5 8] [3 6 9]]
{{< /highlight_arkscript >}}

## unique

---
`(let unique (fun ((ref _L)) (...)))`
Get the unique values in a given list

**Note**: The original list is not modified.

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_L`: list to extract unique values from


#### Example
{{< highlight_arkscript >}}
(let data [1 1 2 3 4 3 4 5])
(print (list:unique data))  # [1 2 3 4 5]
{{< /highlight_arkscript >}}



{{< highlight_scripts >}}
