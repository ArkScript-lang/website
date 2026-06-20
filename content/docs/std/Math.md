---
title: "Math"
slug: "math"
description: ""
summary: ""
date: 2026-06-20T15:37:24+02:00
lastmod: 2026-06-20T15:37:24+02:00
draft: false
weight: 410
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

## +

---
`(+ a b...)`
Add two or more numbers together



#### Parameters
- `a`: number
- `b...`: more numbers


#### Example
{{< highlight_arkscript >}}
(print (+ 1 2.5))  # 3.5
(print (+ 5 -7.6 12))  # 9.4
{{< /highlight_arkscript >}}

## -

---
`(- a b...)`
Subtract two or more numbers together



#### Parameters
- `a`: first number to subtract other numbers to
- `b...`: more numbers


#### Example
{{< highlight_arkscript >}}
(print (- 1 2.5))  # -1.5
(print (- 5 11 1))  # -7
{{< /highlight_arkscript >}}

## *

---
`(* a b...)`
Multiply two or more numbers together



#### Parameters
- `a`: number
- `b...`: more numbers


#### Example
{{< highlight_arkscript >}}
(print (* 2 2.5))  # 5
(print (* 5 4 3))  # 60
{{< /highlight_arkscript >}}

## /

---
`(/ a b...)`
Divide two or more numbers together

**Note**: The result is always a floating point number. For an integer division, see **math:floordiv**


#### Parameters
- `a`: first number to divide by other numbers
- `b...`: more numbers


#### Example
{{< highlight_arkscript >}}
(print (/ 10 3))  # 3.33333...
(print (/ 99 5 4))  # (99 / 5) / 4 = 4.95
{{< /highlight_arkscript >}}

## mod

---
`(mod a b)`
Compute the modulus of two numbers

**Note**: The result is always a floating point number


#### Parameters
- `a`: number
- `b`: number


#### Example
{{< highlight_arkscript >}}
(print (mod 10 3))  # 1
(print (mod 12.9 4))  # 0.9000000000000004
{{< /highlight_arkscript >}}

## random

---
`Builtin (random min max)`
Compute a random number in [-2147483648, 2147483647] or in a custom range passed to the function


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `min`: optional inclusive lower bound
- `max`: optional inclusive upper bound. Must be present if `min` is passed


#### Example
{{< highlight_arkscript >}}
(print (random))  # a number in [-2147483648, 2147483647]
(print (random 0 10))  # a number between 0 and 10
{{< /highlight_arkscript >}}

## exp

---
`(let exp (fun (_x) (...)))`
Calculate e^number


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `value`: the Number


#### Example
{{< highlight_arkscript >}}
(math:exp 1)  # 2.7182...
{{< /highlight_arkscript >}}

## ln

---
`(let ln (fun (_x) (...)))`
Calculate the logarithm of a number


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `value`: the Number


#### Example
{{< highlight_arkscript >}}
(math:ln 1)  # 0
{{< /highlight_arkscript >}}

## ceil

---
`(let ceil (fun (_x) (...)))`
Get the smallest possible integer greater than the number


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `value`: the Number


#### Example
{{< highlight_arkscript >}}
(math:ceil 0.2)  # 1
{{< /highlight_arkscript >}}

## floor

---
`(let floor (fun (_x) (...)))`
Get the smallest possible integer equal to the given number


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `value`: the Number


#### Example
{{< highlight_arkscript >}}
(math:floor 1.7)  # 1
{{< /highlight_arkscript >}}

## round

---
`(let round (fun (_x) (...)))`
Get the smallest possible integer equal to or greater than the given number


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `value`: the Number


#### Example
{{< highlight_arkscript >}}
(math:round 0.2)  # 0
(math:round 0.6)  # 1
{{< /highlight_arkscript >}}

## NaN?

---
`(let NaN? (fun (_x) (...)))`
Check if a Number is NaN


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `value`: the Number


#### Example
{{< highlight_arkscript >}}
(math:NaN? 2)  # false
(math:NaN? math:NaN)  # true
{{< /highlight_arkscript >}}

## Inf?

---
`(let Inf? (fun (_x) (...)))`
Check if a Number if Inf


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `value`: the Number


#### Example
{{< highlight_arkscript >}}
(math:Inf? 1)  # false
(math:Inf? math:NaN)  # false
{{< /highlight_arkscript >}}

## cos

---
`(let cos (fun (_x) (...)))`
Calculate the cosinus of a number


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `value`: the Number (radians)


#### Example
{{< highlight_arkscript >}}
(math:cos 0)  # 1
(math:cos math:pi)  # -1
{{< /highlight_arkscript >}}

## sin

---
`(let sin (fun (_x) (...)))`
Calculate the sinus of a number


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `value`: the Number (radians)


#### Example
{{< highlight_arkscript >}}
(math:sin 0)  # 0
(math:cos (/ math:pi 2))  # 1
{{< /highlight_arkscript >}}

## tan

---
`(let tan (fun (_x) (...)))`
Calculate the tangent of a number


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `value`: the Number (radians)


#### Example
{{< highlight_arkscript >}}
(math:tan 0)  # 0
(math:cos (/ math:pi 4))  # 1
{{< /highlight_arkscript >}}

## arccos

---
`(let arccos (fun (_x) (...)))`
Calculate the arc cosinus of a number


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `value`: the Number


#### Example
{{< highlight_arkscript >}}
(math:arccos 1)  # 0
{{< /highlight_arkscript >}}

## arcsin

---
`(let arcsin (fun (_x) (...)))`
Calculate the arc sinus of a number


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `value`: the Number


#### Example
{{< highlight_arkscript >}}
(math:arcsin 1)  # 1.570796326794897 (/ math:pi 2)
{{< /highlight_arkscript >}}

## arctan

---
`(let arctan (fun (_x) (...)))`
Calculate the arc tangent of a number


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `value`: the Number


#### Example
{{< highlight_arkscript >}}
(math:arctan 0)  # 0
{{< /highlight_arkscript >}}

## cosh

---
`(let cosh (fun (_x) (...)))`
Calculate the hyperbolic cosinus of a number


**Author**: [@Gryfenfer97](https://github.com/Gryfenfer97)

#### Parameter
- `value`: the Number



## sinh

---
`(let sinh (fun (_x) (...)))`
Calculate the hyperbolic sinus of a number


**Author**: [@Gryfenfer97](https://github.com/Gryfenfer97)

#### Parameter
- `value`: the Number



## tanh

---
`(let tanh (fun (_x) (...)))`
Calculate the hyperbolic tangent of a number


**Author**: [@Gryfenfer97](https://github.com/Gryfenfer97)

#### Parameter
- `value`: the Number



## acosh

---
`(let acosh (fun (_x) (...)))`
Calculate the hyperbolic arc cosinus of a number


**Author**: [@Gryfenfer97](https://github.com/Gryfenfer97)

#### Parameter
- `value`: the Number



## asinh

---
`(let asinh (fun (_x) (...)))`
Calculate the hyperbolic arc sinus of a number


**Author**: [@Gryfenfer97](https://github.com/Gryfenfer97)

#### Parameter
- `value`: the Number



## atanh

---
`(let atanh (fun (_x) (...)))`
Calculate the hyperbolic arc tangent of a number


**Author**: [@Gryfenfer97](https://github.com/Gryfenfer97)

#### Parameter
- `value`: the Number



## pi

---
`(let pi <value>)`
Pi value (3.14159...)


**Author**: [@SuperFola](https://github.com/SuperFola)



## e

---
`(let e <value>)`
E value (2.7182...)


**Author**: [@SuperFola](https://github.com/SuperFola)



## tau

---
`(let tau <value>)`
Tau, the ratio of the circumference to the radius of a circle, which is equal to 2*pi (6.28318...)


**Author**: [@SuperFola](https://github.com/SuperFola)



## Inf

---
`(let Inf <value>)`
Float infinite value


**Author**: [@SuperFola](https://github.com/SuperFola)



## NaN

---
`(let NaN <value>)`
Float not-a-number value


**Author**: [@SuperFola](https://github.com/SuperFola)



## countOnes

---
`(let countOnes (fun (_x) (...)))`
Count the number of '1' bits in the given value

{{< callout context="note" title="ArkScript 4.6.0" icon="outline/info-circle" >}}Requires ArkScript 4.6.0 or later
{{< /callout >}}


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `value`: the Number, must be an integer


#### Example
{{< highlight_arkscript >}}
(math:countOnes 5)  # 2
{{< /highlight_arkscript >}}

## countZeros

---
`(let countZeros (fun (_x) (...)))`
Count the number of '0' bits in the given value

{{< callout context="note" title="ArkScript 4.6.0" icon="outline/info-circle" >}}Requires ArkScript 4.6.0 or later
{{< /callout >}}


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `value`: the Number, must be an integer


#### Example
{{< highlight_arkscript >}}
(math:countZeros 5)  # 1
{{< /highlight_arkscript >}}

## bitNot

---
`(let bitNot (fun (_x) (...)))`
Invert a number on 64 bits

{{< callout context="note" title="ArkScript 4.6.0" icon="outline/info-circle" >}}Requires ArkScript 4.6.0 or later
{{< /callout >}}


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `value`: Number, must be an integer


#### Example
{{< highlight_arkscript >}}
(math:bitNot 5)  # -6
{{< /highlight_arkscript >}}

## bitAnd

---
`(let bitAnd (fun (_a _b) (...)))`
Bitwise and

{{< callout context="note" title="ArkScript 4.6.0" icon="outline/info-circle" >}}Requires ArkScript 4.6.0 or later
{{< /callout >}}


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `lhs`: Number, must be an integer
- `rhs`: Number, must be an integer


#### Example
{{< highlight_arkscript >}}
(math:bitAnd 4 12)  # 4
(math:bitAnd 4 10)  # 0
{{< /highlight_arkscript >}}

## bitOr

---
`(let bitOr (fun (_a _b) (...)))`
Bitwise or

{{< callout context="note" title="ArkScript 4.6.0" icon="outline/info-circle" >}}Requires ArkScript 4.6.0 or later
{{< /callout >}}


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `lhs`: Number, must be an integer
- `rhs`: Number, must be an integer


#### Example
{{< highlight_arkscript >}}
(math:bitOr 4 10)  # 14
(math:bitOr 4 1)  # 5
{{< /highlight_arkscript >}}

## bitXor

---
`(let bitXor (fun (_a _b) (...)))`
Bitwise exclusive or of lhs and rhs

{{< callout context="note" title="ArkScript 4.6.0" icon="outline/info-circle" >}}Requires ArkScript 4.6.0 or later
{{< /callout >}}


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `lhs`: Number, must be an integer
- `rhs`: Number, must be an integer


#### Example
{{< highlight_arkscript >}}
(math:bitXor 4 12)  # 8
(math:bitXor 4 10)  # 14
{{< /highlight_arkscript >}}

## lshift

---
`(let lshift (fun (_a _b) (...)))`
Left bit shift

{{< callout context="note" title="ArkScript 4.6.0" icon="outline/info-circle" >}}Requires ArkScript 4.6.0 or later
{{< /callout >}}


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `lhs`: Number, must be an integer
- `rhs`: Number, must be an integer


#### Example
{{< highlight_arkscript >}}
(math:lshift 3 2)  # 12
{{< /highlight_arkscript >}}

## rshift

---
`(let rshift (fun (_a _b) (...)))`
Right bit shift

{{< callout context="note" title="ArkScript 4.6.0" icon="outline/info-circle" >}}Requires ArkScript 4.6.0 or later
{{< /callout >}}


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `lhs`: Number, must be an integer
- `rhs`: Number, must be an integer


#### Example
{{< highlight_arkscript >}}
(math:rshift 13 2)  # 3
(math:rshift -14 2)  # -4
{{< /highlight_arkscript >}}

## bitCeil

---
`(let bitCeil (fun (_x) (...)))`
Finds the smallest integral power of 2 not less than the given value

{{< callout context="note" title="ArkScript 4.6.0" icon="outline/info-circle" >}}Requires ArkScript 4.6.0 or later
{{< /callout >}}


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `value`: Number, must be an integer


#### Example
{{< highlight_arkscript >}}
(math:bitCeil 4)  # 4
(math:bitCeil 7)  # 8
(math:bitCeil 8)  # 8
{{< /highlight_arkscript >}}

## bitFloor

---
`(let bitFloor (fun (_x) (...)))`
Finds the largest integral power of 2 not greater than the given value

{{< callout context="note" title="ArkScript 4.6.0" icon="outline/info-circle" >}}Requires ArkScript 4.6.0 or later
{{< /callout >}}


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `value`: Number, must be an integer


#### Example
{{< highlight_arkscript >}}
(math:bitFloor 4)  # 4
(math:bitFloor 7)  # 4
(math:bitFloor 8)  # 8
{{< /highlight_arkscript >}}

## bitWidth

---
`(let bitWidth (fun (_x) (...)))`
Finds the smallest number of bits needed to represent the given value

{{< callout context="note" title="ArkScript 4.6.0" icon="outline/info-circle" >}}Requires ArkScript 4.6.0 or later
{{< /callout >}}


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `value`: Number, must be an integer


#### Example
{{< highlight_arkscript >}}
(math:bitWidth 2)  # 2
(math:bitWidth 7)  # 3
(math:bitWidth 8)  # 4
{{< /highlight_arkscript >}}

## countLeftZeros

---
`(let countLeftZeros (fun (_n _bits) (...)))`
Counts the number of consecutive 0 bits, starting from the most significant bit

{{< callout context="note" title="ArkScript 4.6.0" icon="outline/info-circle" >}}Requires ArkScript 4.6.0 or later
{{< /callout >}}


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `n`: Number, must be an integer
- `bits`: Number of bits to represent n in, must be an integer


#### Example
{{< highlight_arkscript >}}
(math:countLeftZeros 30 8)  # 3
(math:countLeftZeros 227 8)  # 0
{{< /highlight_arkscript >}}

## countLeftOnes

---
`(let countLeftOnes (fun (_n _bits) (...)))`
Counts the number of consecutive 1 bits, starting from the most significant bit

{{< callout context="note" title="ArkScript 4.6.0" icon="outline/info-circle" >}}Requires ArkScript 4.6.0 or later
{{< /callout >}}


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `n`: Number, must be an integer
- `bits`: Number of bits to represent n in, must be an integer


#### Example
{{< highlight_arkscript >}}
(math:countLeftOnes 30 8)  # 4
(math:countLeftOnes 227 8)  # 3
{{< /highlight_arkscript >}}

## countRightZeros

---
`(let countRightZeros (fun (_n _bits) (...)))`
Counts the number of consecutive 0 bits, starting from the least significant bit

{{< callout context="note" title="ArkScript 4.6.0" icon="outline/info-circle" >}}Requires ArkScript 4.6.0 or later
{{< /callout >}}


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `n`: Number, must be an integer
- `bits`: Number of bits to represent n in, must be an integer


#### Example
{{< highlight_arkscript >}}
(math:countRightZeros 30 8)  # 1
(math:countRightZeros 227 8)  # 0
{{< /highlight_arkscript >}}

## countRightOnes

---
`(let countRightOnes (fun (_n _bits) (...)))`
Counts the number of consecutive 1 bits, starting from the least significant bit

{{< callout context="note" title="ArkScript 4.6.0" icon="outline/info-circle" >}}Requires ArkScript 4.6.0 or later
{{< /callout >}}


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `n`: Number, must be an integer
- `bits`: Number of bits to represent n in, must be an integer


#### Example
{{< highlight_arkscript >}}
(math:countRightOnes 30 8)  # 0
(math:countRightOnes 227 8)  # 2
{{< /highlight_arkscript >}}

## circularLeftShift

---
`(let circularLeftShift (fun (_x (mut _count) _bytecount) (...)))`
Computes the result of bitwise left-rotation of _x by _count

{{< callout context="note" title="ArkScript 4.6.0" icon="outline/info-circle" >}}Requires ArkScript 4.6.0 or later
{{< /callout >}}


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_x`: Number, must be an integer
- `_count`: Number, must be an integer
- `_bytecount`: Number of bytes to shift on, must be an integer


#### Example
{{< highlight_arkscript >}}
(math:circularLeftShift 29 4 1)  # 209
(math:circularLeftShift 29 9 1)  # 58
{{< /highlight_arkscript >}}

## circularRightShift

---
`(let circularRightShift (fun (_x (mut _count) _bytecount) (...)))`
Computes the result of bitwise left-rotation of _x by _count

{{< callout context="note" title="ArkScript 4.6.0" icon="outline/info-circle" >}}Requires ArkScript 4.6.0 or later
{{< /callout >}}


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_x`: Number, must be an integer
- `_count`: Number, must be an integer
- `_bytecount`: Number of bytes to shift on, must be an integer


#### Example
{{< highlight_arkscript >}}
(math:circularRightShift 29 9 1)  # 142
(math:circularRightShift 29 2 1)  # 71
{{< /highlight_arkscript >}}

## toBase

---
`(let toBase (fun ((mut _x) _base) (...)))`
Convert a number in a another base (in [2, 36[)

{{< callout context="note" title="ArkScript 4.6.0" icon="outline/info-circle" >}}Requires ArkScript 4.6.0 or later
{{< /callout >}}


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_x`: Number, must be an integer
- `_base`: Number, must be an integer


#### Example
{{< highlight_arkscript >}}
(math:toBase 10 2)  # "1010"
(math:toBase 165 16)  # "a5"
{{< /highlight_arkscript >}}

## fromBase

---
`(let fromBase (fun ((mut _x) _base) (...)))`
Convert a number from a base to base 10

{{< callout context="note" title="ArkScript 4.6.0" icon="outline/info-circle" >}}Requires ArkScript 4.6.0 or later
{{< /callout >}}


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_x`: number in the given base represented as a String
- `_base`: Number, must be an integer


#### Example
{{< highlight_arkscript >}}
(math:fromBase "1010" 2)  # 10
(math:fromBase "1z" 36)  # 165
{{< /highlight_arkscript >}}

## countDigits

---
`(let countDigits (fun ((mut _x) _base) (...)))`
Count the digits of a number in a given base (in [2, 36[)

{{< callout context="note" title="ArkScript 4.6.0" icon="outline/info-circle" >}}Requires ArkScript 4.6.0 or later
{{< /callout >}}


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_x`: Number, must be an integer
- `_base`: Number, must be an integer


#### Example
{{< highlight_arkscript >}}
(math:countDigits 10 2)  # 4
(math:countDigits 165 16)  # 2
{{< /highlight_arkscript >}}

## abs

---
`(let abs (fun (_x) (...)))`
Return the absolute value of a number


**Author**: [@rstefanic](https://github.com/rstefanic)

#### Parameter
- `_x`: the number to get the absolute value of



## even?

---
`(let even? (fun (_n) (...)))`
Return true if the number is even, false otherwise


**Author**: [@rstefanic](https://github.com/rstefanic)

#### Parameter
- `_n`: the number



## odd?

---
`(let odd? (fun (_n) (...)))`
Return true if the number is odd, false otherwise


**Author**: [@rstefanic](https://github.com/rstefanic)

#### Parameter
- `_n`: the number



## min

---
`(let min (fun (_a _b) (...)))`
Get the minimum between two numbers


**Author**: [@rstefanic](https://github.com/rstefanic)

#### Parameters
- `_a`: the first number
- `_b`: the second number



## max

---
`(let max (fun (_a _b) (...)))`
Get the maximum between two numbers


**Author**: [@rstefanic](https://github.com/rstefanic)

#### Parameters
- `_a`: the first number
- `_b`: the second number



## increment

---
`(let increment (fun (_x) (...)))`
Increment a given number by 1


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_x`: number



## decrement

---
`(let decrement (fun (_x) (...)))`
Decrement a given number by 1


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_x`: number



## negate

---
`(let negate (fun (_x) (...)))`
Multiply a number by -1, turning positive numbers negative and negative numbers positive


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_x`: number



## pow

---
`(let pow (fun ((mut _x) (mut _a)) (...)))`
Get a number to a given power

**Note**: Note that it's defined as exp(a * ln(x)), thus won't work for negative numbers

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_x`: the number to pow
- `_a`: the exponent



## sqrt

---
`(let sqrt (fun (_x) (...)))`
Get the square root of a number

**Note**: Square roots can't be taken for negative numbers for obvious reasons.

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_x`: the number



## fibo

---
`(let fibo (fun (n) (...)))`
Compute the nth fibonacci term


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `n`: the number



## prime?

---
`(let prime? (fun (n) (...)))`
Check if a given number is prime


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `n`: the number



## divs

---
`(let divs (fun (n) (...)))`
Returns the list of a number's divisors


**Author**: [@Wafelack](https://github.com/Wafelack)

#### Parameter
- `n`: the number


#### Example
{{< highlight_arkscript >}}
(math:divs 6) # Returns [1 2 3 6]
{{< /highlight_arkscript >}}

## log

---
`(let log (fun (x n) (...)))`
Returns the logarithm base n of a number


**Author**: [@Gryfenfer97](https://github.com/Gryfenfer97)

#### Parameters
- `x`: the number
- `n`: the base


#### Example
{{< highlight_arkscript >}}
(math:log 81 3) # Returns 4
{{< /highlight_arkscript >}}

## log2

---
`(let log2 (fun (x) (...)))`
Returns the logarithm base 2 of a number


**Author**: [@Gryfenfer97](https://github.com/Gryfenfer97)

#### Parameter
- `x`: the number


#### Example
{{< highlight_arkscript >}}
(math:log2 128) # Returns 7
{{< /highlight_arkscript >}}

## log10

---
`(let log10 (fun (x) (...)))`
Returns the logarithm base 10 of a number


**Author**: [@Gryfenfer97](https://github.com/Gryfenfer97)

#### Parameter
- `x`: the number


#### Example
{{< highlight_arkscript >}}
(math:log10 1000) # Returns 3
{{< /highlight_arkscript >}}

## floordiv

---
`(let floordiv (fun (a b) (...)))`
Returns the quotient of the euclidean division of a and b


**Author**: [@fabien-zoccola](https://github.com/fabien-zoccola)

#### Parameters
- `a`: the dividend
- `b`: the divisor


#### Example
{{< highlight_arkscript >}}
(math:floordiv 14 6) # Returns 2
{{< /highlight_arkscript >}}

## complex

---
`(let complex (fun (real imag) (...)))`
Create a complex number


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `real`: the real part of the complex number
- `imag`: the imaginary value


#### Example
{{< highlight_arkscript >}}
(let c (math:complex 1 2))
(print c.real " " c.imag)  # 1 2
{{< /highlight_arkscript >}}

## complex-add

---
`(let complex-add (fun (_c0 _c1) (...)))`
Compute the addition of two complex number


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_c0`: the first complex number
- `_c1`: the second complex number


#### Example
{{< highlight_arkscript >}}
(let c (math:complex-add (math:complex 1 2) (math:complex 3 4)))
(print c.real " " c.imag)  # 4 6
{{< /highlight_arkscript >}}

## complex-sub

---
`(let complex-sub (fun (_c0 _c1) (...)))`
Compute the subtraction of two complex number


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_c0`: the first complex number
- `_c1`: the second complex number


#### Example
{{< highlight_arkscript >}}
(let c (math:complex-sub (math:complex 1 2) (math:complex 3 4)))
(print c.real " " c.imag)  # -2 -2
{{< /highlight_arkscript >}}

## complex-mul

---
`(let complex-mul (fun (_c0 _c1) (...)))`
Compute the multiplication of two complex number


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_c0`: the first complex number
- `_c1`: the second complex number


#### Example
{{< highlight_arkscript >}}
(let c (math:complex-mul (math:complex 1 2) (math:complex 3 4)))
(print c.real " " c.imag)  # -5 10
{{< /highlight_arkscript >}}

## complex-conjugate

---
`(let complex-conjugate (fun (_c) (...)))`
Compute the conjugate of a complex number


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_c`: the complex number


#### Example
{{< highlight_arkscript >}}
(let c (math:complex-conjugate (math:complex 1 2)))
(print c.real " " c.imag)  # 1 -2
{{< /highlight_arkscript >}}

## complex-module

---
`(let complex-module (fun (_c) (...)))`
Compute the module of a complex number


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_c`: the complex number


#### Example
{{< highlight_arkscript >}}
(let c (math:complex-module (math:complex 1 2)))
(print c)  # 2.2360679774997896964...
{{< /highlight_arkscript >}}

## complex-div

---
`(let complex-div (fun (_c0 _c1) (...)))`
Compute the division of two complex number


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_c0`: the first complex number
- `_c1`: the second complex number


#### Example
{{< highlight_arkscript >}}
(let c (math:complex-div (math:complex 1 2) (math:complex 3 4)))
(print c.real " " c.imag)  # 0.44 0.08
{{< /highlight_arkscript >}}

## clamp

---
`(let clamp (fun (_x _min _max) (...)))`
Limit a given value to a range


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_x`: value to limit
- `_min`: minimum
- `_max`: maximum


#### Example
{{< highlight_arkscript >}}
(print (math:clamp 5 0 2))  # 2
(print (math:clamp 6 0 10))  # 6
{{< /highlight_arkscript >}}

## lerp

---
`(let lerp (fun (_x _v0 _v1) (...)))`
Linearly interpolate a value in [0; 1] between two bounds


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_x`: value to interpolate (must be between 0 and 1)
- `_v0`: lower bound
- `_v1`: upper bound


#### Example
{{< highlight_arkscript >}}
(print (math:lerp 0.22 15 132))  # 40.74
{{< /highlight_arkscript >}}

## dotProduct

---
`(let dotProduct (fun (_v1 _v2) (...)))`
Compute the dot product of two vectors

**Note**: The vectors must have the same length

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_v1`: vector 1
- `_v2`: vector 2


#### Example
{{< highlight_arkscript >}}
(print (math:dotProduct [1 2 3] [4 5 6]))  # 32
{{< /highlight_arkscript >}}

## improvementRatioPercentage

---
`(let improvementRatioPercentage (fun (_a _b) (...)))`
Compute a percentage of how much b is better than a

**Note**: Returns a positive number when _a is bigger than _b, negative otherwise

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_a`: the base
- `_b`: new measure to compare


#### Example
{{< highlight_arkscript >}}
(let base 55)  # something takes 55ms to run
(let new 43)  # now it takes 43ms
(print (math:improvementRatioPercentage base new))  # 27.9069767442
# 'new' is 27%~ faster than 'base'
{{< /highlight_arkscript >}}

## copySign

---
`(let copySign (fun (_x) (...)))`
Copy the sign of a given number


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_x`: number


#### Example
{{< highlight_arkscript >}}
(print (math:copySign 5))  # 1
(print (math:copySign -3))  # -1
{{< /highlight_arkscript >}}

## radians

---
`(let radians (fun (_degrees) (...)))`
Convert an angle in degrees to radians


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_degrees`: angle in degrees


#### Example
{{< highlight_arkscript >}}
(print (math:radians 90))   # pi/2
{{< /highlight_arkscript >}}

## degrees

---
`(let degrees (fun (_radians) (...)))`
Convert an angle in radians to degrees


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_radians`: angle in radians


#### Example
{{< highlight_arkscript >}}
(print (math:radians (/ math:pi 2)))   # 90
{{< /highlight_arkscript >}}

## integer?

---
`(let integer? (fun (_x) (...)))`
Check if a given number is an integer


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_x`: number


#### Example
{{< highlight_arkscript >}}
(print (math:integer 1))   # true
(print (math:integer 1.000001))   # false
{{< /highlight_arkscript >}}

## factorial

---
`(let factorial (fun ((mut _n)) (...)))`
Compute the factorial of a number


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_n`: integer


#### Example
{{< highlight_arkscript >}}
(print (math:factorial 5))   # 120
{{< /highlight_arkscript >}}

## binomialCoeff

---
`(let binomialCoeff (fun (_n _k) (...)))`
Compute the binomial coefficient (n k)

**Note**: Evaluates to n! / (k! * (n - k)!) when k <= n and evaluates to zero when k > n.

**Authors**: [@SuperFola](https://github.com/SuperFola), [@kg583](https://github.com/kg583)

#### Parameters
- `_n`: total number of items
- `_k`: number of items that will be picked



## permutations

---
`(let permutations (fun ((mut _n) _k) (...)))`
Compute the number of ways to choose k items from n items without repetition and with order

**Note**: Evaluates to n! / (n - k)! when k <= n and evaluates to zero when k > n.

**Authors**: [@SuperFola](https://github.com/SuperFola), [@kg583](https://github.com/kg583)

#### Parameters
- `_n`: total number of items
- `_k`: number of items to pick



## close?

---
`(let close? (fun (_n _target) (...)))`
Compare two real numbers and return true if the first one is near the second one (1e-7 precision)


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_n`: first number
- `_target`: target number



## euclideanDistance

---
`(let euclideanDistance (fun (_a _b) (...)))`
Compute the euclidean distance between two vectors of the same size


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_a`: first vector, eg [1 4]
- `_b`: second vector, eg [5 8]


#### Example
{{< highlight_arkscript >}}
(let v1 [1 2 3])
(let v2 [7 9 8])
(print (math:euclideanDistance v1 v2))  # 10.488088481701517
{{< /highlight_arkscript >}}

## gcd

---
`(let gcd (fun (_a _b) (...)))`
Compute the greatest common divisor of two numbers


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_a`: number
- `_b`: number


#### Example
{{< highlight_arkscript >}}
(print (math:gcd 48 18))  # 6
{{< /highlight_arkscript >}}

## lcm

---
`(let lcm (fun (_a _b) (...)))`
Compute the least common multiplier of two numbers


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_a`: number
- `_b`: number


#### Example
{{< highlight_arkscript >}}
(print (math:lcm 4 6))  # 12
{{< /highlight_arkscript >}}



{{< highlight_scripts >}}
