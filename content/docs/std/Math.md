---
title: "Math"
slug: "math"
description: ""
summary: ""
date: 2025-08-01T00:57:05+02:00
lastmod: 2025-08-01T00:57:05+02:00
draft: false
weight: 410
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

## exp

---
`(let exp (fun (_x) (...)))`
Calculate e^number

#### Parameter
- `value`: the Number

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(math:exp 1)  # 2.7182...
{{< /highlight_arkscript >}}

## ln

---
`(let ln (fun (_x) (...)))`
Calculate the logarithm of a number

#### Parameter
- `value`: the Number

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(math:ln 1)  # 0
{{< /highlight_arkscript >}}

## ceil

---
`(let ceil (fun (_x) (...)))`
Get the smallest possible integer greater than the number

#### Parameter
- `value`: the Number

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(math:ceil 0.2)  # 1
{{< /highlight_arkscript >}}

## floor

---
`(let floor (fun (_x) (...)))`
Get the smallest possible integer equal to the given number

#### Parameter
- `value`: the Number

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(math:floor 1.7)  # 1
{{< /highlight_arkscript >}}

## round

---
`(let round (fun (_x) (...)))`
Get the smallest possible integer equal to or greater than the given number

#### Parameter
- `value`: the Number

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(math:round 0.2)  # 0
(math:round 0.6)  # 1
{{< /highlight_arkscript >}}

## NaN?

---
`(let NaN? (fun (_x) (...)))`
Check if a Number is NaN

#### Parameter
- `value`: the Number

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(math:NaN? 2)  # false
(math:NaN? nan)  # true
{{< /highlight_arkscript >}}

## Inf?

---
`(let Inf? (fun (_x) (...)))`
Check if a Number if Inf

#### Parameter
- `value`: the Number

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(math:Inf? 1)  # false
(math:Inf? nan)  # false
{{< /highlight_arkscript >}}

## cos

---
`(let cos (fun (_x) (...)))`
Calculate the cosinus of a number

#### Parameter
- `value`: the Number (radians)

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(math:cos 0)  # 1
(math:cos math:pi)  # -1
{{< /highlight_arkscript >}}

## sin

---
`(let sin (fun (_x) (...)))`
Calculate the sinus of a number

#### Parameter
- `value`: the Number (radians)

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(math:sin 0)  # 0
(math:cos (/ math:pi 2))  # 1
{{< /highlight_arkscript >}}

## tan

---
`(let tan (fun (_x) (...)))`
Calculate the tangent of a number

#### Parameter
- `value`: the Number (radians)

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(math:tan 0)  # 0
(math:cos (/ math:pi 4))  # 1
{{< /highlight_arkscript >}}

## arccos

---
`(let arccos (fun (_x) (...)))`
Calculate the arc cosinus of a number

#### Parameter
- `value`: the Number

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(math:arccos 1)  # 0
{{< /highlight_arkscript >}}

## arcsin

---
`(let arcsin (fun (_x) (...)))`
Calculate the arc sinus of a number

#### Parameter
- `value`: the Number

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(math:arcsin 1)  # 1.570796326794897 (/ math:pi 2)
{{< /highlight_arkscript >}}

## arctan

---
`(let arctan (fun (_x) (...)))`
Calculate the arc tangent of a number

#### Parameter
- `value`: the Number

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(math:arctan 0)  # 0
{{< /highlight_arkscript >}}

## cosh

---
`(let cosh (fun (_x) (...)))`
Calculate the hyperbolic cosinus of a number

#### Parameter
- `value`: the Number

#### Author
[@Gryfenfer97](https://github.com/Gryfenfer97)


## sinh

---
`(let sinh (fun (_x) (...)))`
Calculate the hyperbolic sinus of a number

#### Parameter
- `value`: the Number

#### Author
[@Gryfenfer97](https://github.com/Gryfenfer97)


## tanh

---
`(let tanh (fun (_x) (...)))`
Calculate the hyperbolic tangent of a number

#### Parameter
- `value`: the Number

#### Author
[@Gryfenfer97](https://github.com/Gryfenfer97)


## acosh

---
`(let acosh (fun (_x) (...)))`
Calculate the hyperbolic arc cosinus of a number

#### Parameter
- `value`: the Number

#### Author
[@Gryfenfer97](https://github.com/Gryfenfer97)


## asinh

---
`(let asinh (fun (_x) (...)))`
Calculate the hyperbolic arc sinus of a number

#### Parameter
- `value`: the Number

#### Author
[@Gryfenfer97](https://github.com/Gryfenfer97)


## atanh

---
`(let atanh (fun (_x) (...)))`
Calculate the hyperbolic arc tangent of a number

#### Parameter
- `value`: the Number

#### Author
[@Gryfenfer97](https://github.com/Gryfenfer97)


## pi

---
`(let pi <value>)`
Pi value (3.14159...)

#### Author
[@SuperFola](https://github.com/SuperFola)


## e

---
`(let e <value>)`
E value (2.7182...)

#### Author
[@SuperFola](https://github.com/SuperFola)


## tau

---
`(let tau <value>)`
Tau, the ratio of the circumference to the radius of a circle, which is equal to 2*pi (6.28318...)

#### Author
[@SuperFola](https://github.com/SuperFola)


## Inf

---
`(let Inf <value>)`
Float infinite value

#### Author
[@SuperFola](https://github.com/SuperFola)


## NaN

---
`(let NaN <value>)`
Float not-a-number value

#### Author
[@SuperFola](https://github.com/SuperFola)


## abs

---
`(let abs (fun (_x) (...)))`
Return the absolute value of a number

#### Parameter
- `_x`: the number to get the absolute value of

#### Author
[@rstefanic](https://github.com/rstefanic)


## even

---
`(let even (fun (_n) (...)))`
Return true if the number is even, false otherwise

#### Parameter
- `_n`: the number

#### Author
[@rstefanic](https://github.com/rstefanic)


## odd

---
`(let odd (fun (_n) (...)))`
Return true if the number is odd, false otherwise

#### Parameter
- `_n`: the number

#### Author
[@rstefanic](https://github.com/rstefanic)


## min

---
`(let min (fun (_a _b) (...)))`
Get the minimum between two numbers

#### Parameters
- `_a`: the first number
- `_b`: the second number

#### Author
[@rstefanic](https://github.com/rstefanic)


## max

---
`(let max (fun (_a _b) (...)))`
Get the maximum between two numbers

#### Parameters
- `_a`: the first number
- `_b`: the second number

#### Author
[@rstefanic](https://github.com/rstefanic)


## pow

---
`(let pow (fun (_x _a) (...)))`
Get a number to a given power

**Note**: Note that it's defined as exp(a * ln(x)), thus won't work for negative numbers
#### Parameters
- `_x`: the number to pow
- `_a`: the exponent

#### Author
[@SuperFola](https://github.com/SuperFola)


## sqrt

---
`(let sqrt (fun (_x) (...)))`
Get the square root of a number

**Note**: Square roots can't be taken for negative numbers for obvious reasons.
#### Parameter
- `_x`: the number

#### Author
[@SuperFola](https://github.com/SuperFola)


## fibo

---
`(let fibo (fun (n) (...)))`
Run the fibonacci function on a number

#### Parameter
- `n`: the number

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(fibo 45 0 1)
{{< /highlight_arkscript >}}

## prime?

---
`(let prime? (fun (n) (...)))`
Check if a given number is prime

#### Parameter
- `n`: the number

#### Author
[@SuperFola](https://github.com/SuperFola)


## divs

---
`(let divs (fun (n) (...)))`
Returns the list of a number's divisors

#### Parameter
- `n`: the number

#### Author
[@Wafelack](https://github.com/Wafelack)

#### Example
{{< highlight_arkscript >}}
(divs 6) # Returns [1 2 3 6]
{{< /highlight_arkscript >}}

## log

---
`(let log (fun (x n) (...)))`
Returns the logarithm base n of a number

#### Parameters
- `x`: the number
- `n`: the base

#### Author
[@Gryfenfer97](https://github.com/Gryfenfer97)

#### Example
{{< highlight_arkscript >}}
(log 81 3) # Returns 4
{{< /highlight_arkscript >}}

## log2

---
`(let log2 (fun (x) (...)))`
Returns the logarithm base 2 of a number

#### Parameter
- `x`: the number

#### Author
[@Gryfenfer97](https://github.com/Gryfenfer97)

#### Example
{{< highlight_arkscript >}}
(log2 128) # Returns 7
{{< /highlight_arkscript >}}

## log10

---
`(let log10 (fun (x) (...)))`
Returns the logarithm base 10 of a number

#### Parameter
- `x`: the number

#### Author
[@Gryfenfer97](https://github.com/Gryfenfer97)

#### Example
{{< highlight_arkscript >}}
(log10 1000) # Returns 3
{{< /highlight_arkscript >}}

## floordiv

---
`(let floordiv (fun (a b) (...)))`
Returns the quotient of the euclidian division of a and b

#### Parameters
- `a`: the dividend
- `b`: the divisor

#### Author
[@fabien-zoccola](https://github.com/fabien-zoccola)

#### Example
{{< highlight_arkscript >}}
(floordiv 14 6) # Returns 2
{{< /highlight_arkscript >}}

## complex

---
`(let complex (fun (real imag) (...)))`
Create a complex number

#### Parameters
- `real`: the real part of the complex number
- `imag`: the imaginary value

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(let c (complex 1 2))
(print c.real " " c.imag)  # 1 2
{{< /highlight_arkscript >}}

## complex-add

---
`(let complex-add (fun (_c0 _c1) (...)))`
Compute the addition of two complex number

#### Parameters
- `_c0`: the first complex number
- `_c1`: the second complex number

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(let c (complex-add (complex 1 2) (complex 3 4)))
(print c.real " " c.imag)  # 4 6
{{< /highlight_arkscript >}}

## complex-sub

---
`(let complex-sub (fun (_c0 _c1) (...)))`
Compute the subtraction of two complex number

#### Parameters
- `_c0`: the first complex number
- `_c1`: the second complex number

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(let c (complex-sub (complex 1 2) (complex 3 4)))
(print c.real " " c.imag)  # -2 -2
{{< /highlight_arkscript >}}

## complex-mul

---
`(let complex-mul (fun (_c0 _c1) (...)))`
Compute the multiplication of two complex number

#### Parameters
- `_c0`: the first complex number
- `_c1`: the second complex number

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(let c (complex-mul (complex 1 2) (complex 3 4)))
(print c.real " " c.imag)  # -5 10
{{< /highlight_arkscript >}}

## complex-conjugate

---
`(let complex-conjugate (fun (_c) (...)))`
Compute the conjugate of a complex number

#### Parameter
- `_c`: the complex number

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(let c (complex-conjugate (complex 1 2)))
(print c.real " " c.imag)  # 1 -2
{{< /highlight_arkscript >}}

## complex-module

---
`(let complex-module (fun (_c) (...)))`
Compute the module of a complex number

#### Parameter
- `_c`: the complex number

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(let c (complex-module (complex 1 2)))
(print c)  # 2.2360679774997896964...
{{< /highlight_arkscript >}}

## complex-div

---
`(let complex-div (fun (_c0 _c1) (...)))`
Compute the division of two complex number

#### Parameters
- `_c0`: the first complex number
- `_c1`: the second complex number

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(let c (complex-div (complex 1 2) (complex 3 4)))
(print c.real " " c.imag)  # 0.44 0.08
{{< /highlight_arkscript >}}

## clamp

---
`(let clamp (fun (_x _min _max) (...)))`
Limit a given value to a range

#### Parameters
- `_x`: value to limit
- `_min`: minimum
- `_max`: maximum

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(print (clamp 5 0 2))  # 2
(print (clamp 6 0 10))  # 6
{{< /highlight_arkscript >}}

## lerp

---
`(let lerp (fun (_x _v0 _v1) (...)))`
Linearly interpolate a value in [0; 1] between two bounds

#### Parameters
- `_x`: value to interpolate (must be between 0 and 1)
- `_v0`: lower bound
- `_v1`: upper bound

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(print (lerp 0.22 15 132))  # 40.74
{{< /highlight_arkscript >}}



{{< highlight_scripts >}}
