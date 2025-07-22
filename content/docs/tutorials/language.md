---
title: "Learning ArkScript"
slug: "language"
description: ""
summary: ""
date: 2025-07-14T19:29:13+02:00
lastmod: 2025-07-14T19:29:13+02:00
draft: false
weight: 300
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

{{< highlight_scripts >}}

## The basics

In ArkScript, there are two main rules:

- The first rule is that `(a b c ...)` is a function call, `a` is the function with `b c ...` being the arguments.
- The second rule is the **only** exception to the first rule: when declaring functions like `(fun (arg1 arg2 ...) body)`, the definition of the argument block **isn't** considered as a function call.

To sum it up: everything is a function call, except the definition of the arguments block of a function.

## Creating variables

In ArkScript, there are 2 types of *variables*: `mutables` and `immutables`. The *immutable* variables can't be modified or redefined, while *mutable* variables can.

The following three keywords are important when talking about variables:
- `let` *defines* an `immutable` variable
- `mut` *defines* a `mutable` variable
- `set` changes the value of a given mutable variable (will throw an error on immutable variables)

**Example:**

{{< highlight_arkscript >}}
(let a 12)  # immutable variable
(let a "hello")  # cannot redefine constant
(set a "world")  # cannot modify constant, will throw an error

(mut b [12 42 64])  # mutable variable
(mut b "hello")  # no problem, the operation is allowed
(set b "ArkScript is cool!")  # no problem, operation is allowed on mutables
{{< /highlight_arkscript >}}

## Comments

As you have seen in the example above, we can write code that won't be executed, using `# text`. This is a comment, only for the developer, and will be totally ignored when compiling and executing.

## Program structure

An ArkScript program is a collection of blocks. A block `(function arguments...)`, thus, those are valid programs:

{{< highlight_arkscript >}}
(print "hello world")
{{< /highlight_arkscript >}}

{{< highlight_arkscript >}}
(let a 12)
(let foo (fun (a b)
  (+ a b)))
(print (foo a a))
{{< /highlight_arkscript >}}

Multiple blocks can be put into one by using the **begin construction**:

{{< highlight_arkscript >}}
(begin
  (let a 12)
  (print a)
  (let b (* a 2))
  (print b))

# and can be accessed from outside, begin doesn't create a scope
(print a " " b)
{{< /highlight_arkscript >}}

`(begin)` and `{}` are synonyms.

## Basic Input/Output

User interactions are a must have in a programming language. To achieve such interaction in a shell (the big black windows where our code is running), we have what we call *IO* or *input/output*, through `print` and `input`. One can write text to the shell, the other can prompt the user and retrieve what they wrote.

**Example:** `(print "hello" " world")`, will print `hello world`.

The print function won't put spaces between each element printed, thus we have to do it ourselves.

{{< highlight_arkscript >}}
(let a (input what is your name?))  # will print what the user wrote,
(print a)                           # after having validated by pressing Enter
                                    # The prompt is optional, (input) will
                                    # also work on its own.
{{< /highlight_arkscript >}}

## Conditions

In any programming language, it's useful to control the program flow, to be able to give the user multiple choices (attacking an enemy, befriending it, spying on it...) and those things are achieved through conditions.

Constructing a condition is done like so:

{{< highlight_arkscript >}}
(if condition then else)
{{< /highlight_arkscript >}}

The `else` bloc is optional.

**Examples:**
{{< highlight_arkscript >}}
(let a 11)
(let b 15)

(if (= a 12)
  # then
  (print "a is 12")
  # else
  (print "a is not 12"))

(if (and (< a 12) (> b 14))
  (print "a is < 12 AND b is > 14"))
{{< /highlight_arkscript >}}

The then and the else parts can be composed of multiple functions by using the begin construction.

## Loops

Giving the user a choice is a thing, but repeating an action is another that is very useful in a program as well. For example, if we need to compute the sum of values in a list, we would need to loop over the values of the list. In video games, we would need loops to generate waves of enemies.

Loops in ArkScript are created by using the keyword `while`, they create their own scope too, so any variable created in a loop is destroyed when exiting it.

**Example:**

{{< highlight_arkscript >}}
# continue must be a mutable for us the be able to modify it
(mut continue true)
(while continue {
  (print "hello")

  # 10% chance of stopping the loop
  (if (= (random 1 10) 1)
    (set continue false)) })

# another example using conditions
(mut i 0)
(while (< i 10) {
  (puts i " ")  # won't put a \n at the end of the content
  (set i (+ 1 i)) })
{{< /highlight_arkscript >}}

## Functions

Functions are a tool to factorize code, to follow the DRY (don't repeat yourself) principle. Who would want to write 10 times the same 100 lines when they can use a function and call it 10 times inside a loop?

Note: ArkScript was particularly optimized to deal with function using few arguments, thus encouraging code reuse and code split into functions.

A function is composed of 2 parts: the argument lists and the body:

{{< highlight_arkscript >}}
(fun (a b c) (print a b c))
{{< /highlight_arkscript >}}

`(a b c)` is the argument list, the print bloc is the body.

The value returned by a function is the last evaluated value in the body, if none, nil is returned.

**Example:**

{{< highlight_arkscript >}}
(let foo (fun (a b) (begin
  (print "function got: " a " " b)
  # return value:
  (+ a b))))

(print (foo 12 14))  # 26
{{< /highlight_arkscript >}}

Also, we have a set of builtins functions in the language, available without importing anything ; for example `print` or `input`, which we used before. Note that builtins **must be called**, you can't do things like `(let my_print print)`, or `(let my_tail tail)`, otherwise it will result in an error because those functions are special.

## Closures

Closure, or function closure, is a way to implementing [lexically scoped name binding](https://en.wikipedia.org/wiki/Closure_(computer_programming)). It stores a function along with an environment, explicitly mapped with specified variables. This allows to reuse and modify captured variables each time the closure is called.

{{< highlight_arkscript >}}
(let make_closure (fun (name age) {
  (let coolness_factor 12)

  # here, we return a closure!
  (fun (&name &age &coolness_factor)
    # each time it will be called, it will display the captured variables
    (print name " " age " " coolness_factor)) }))

(let closure (make_closure "Pietro" 42))
(closure)  # prints Pietro 42 12
{{< /highlight_arkscript >}}

Closures capture variables explicitly in their arguments' list, by prefixing them with `&`. We can access the captured fields through the `closure.field` notation, in a read only way:

{{< highlight_arkscript >}}
(print closure.age)  # 42
(print closure.coolness_factor)  # 12

# we can print closures and have their fields and values displayed
(print closure)  # prints (.name=Pietro .age=42 .coolness_factor=12)

(let make (fun (a)
  (fun (&a) ())))

(let foo (fun () (print "bar")))

(let closure_bis (make foo))
# we can also call captured functions
(closure_bis.a)  # prints bar
{{< /highlight_arkscript >}}

Finally, you can modify the closure content when using it from the inside, through itself or its captured functions:

{{< highlight_arkscript >}}
(let make (fun (name age) {
  (let set-age (fun (new)
    (set age new)))

  (fun (new-name &name &age &set-age)
    (if (not (nil? new-name))
      (set name new-name))) }))

(let egg (make "egg" 1))
(print egg.age)  # 1
(egg.set-age 2)
(print egg.age " " egg.name)  # 2 egg
(egg "not an egg")
(print egg.name " " egg.age)  # not an egg 2
{{< /highlight_arkscript >}}

Closures can also be compared, the same way you would want to compare structs in C or C++:

{{< highlight_arkscript >}}
(let make (fun (name age)
  (fun (&name &age) ())))

(let egg (make "egg" 1))
(let bacon (make "bacon" 1))
(print (= egg bacon))  # false, egg and bacon share the same fields but their values are different

(let make_other (fun (a b c)
  (fun (&a &b &c) ())))

(let next (make_other 1 2 3))
(let bis  (make_other 1 2 3))
(print (= next egg))  # false, next and egg do not share the same fields
(print (= next bis))  # true, next and bis have the same fields and values
(print (= bis bis))   # true, bis is bis
{{< /highlight_arkscript >}}

## VM builtins

Some primitives are directly implemented in the VM, and are often referred to as *operators`. Those are the following:
- Arithmetic operators: `+`, `-`, `*`, `/`, `mod`
- Comparison operators: `=`, `!=`, `<`, `<=`, `>`, `>=`
- Condition operators: `and`, `or`, `not`
- List operators: `len`, `empty?`, `tail`, `head`, `nil?`, `@`, `@@`, `append`, `append!`, `concat`, `concat!`, `pop`, `pop!`, `@=`, `@@=`
- Conversion operators: `toNumber`, `toString`
- Test operator: `assert`
- Type operators: `type`, `hasField`

Here we'll explain the non-obvious ones:

### List operators

`(tail a-list)` will return the last elements of a list as a new list: `[] -> []`, `[1] -> []`, `[1 2 3] -> [2 3]`.

`(head a-list)` will return the first element of a list, or `nil` if the list is empty.

`(empty? a-list)` returns true if the list (or string) is empty, false otherwise.

`(nil? a-list)` will always return false as a list isn't nil (which is the void value, returned by `head`).

`(@ a-list index)` gets the element at `index` inside the list. Negative indices are supported, with `-1` being the last element.

`(@@ a-2d-list i j)` is equivalent to `a-2d-list[i][j]` in Python: it gets the element at position `j` in the sublist `(@ a-2d-list i)`. It's a shortcut for `(@ (@ a-2d-list i) j)`.

`(append a-list 5)` returns a new list with 5 added at the end, while `(append! a-list 5)` will add 5 in-place to a-list, without returning a new list.

`(concat a-list [5 6])` returns a new list with 5 and 6 added at the end, while `(concat! a-list [5 6])` will add 5 and 6 in-place to a-list, without returning a new list.

`(pop a-list index)` returns a new list without the element at `index` (supports negative indices, -1 being the end), while `(pop a-list index)` will remove the element at `index` in-place, without returning a new list.

`(@= a-list index value)` updates `a-list` in-place by replacing the element at `index` by `value` (supports negative indices, -1 being the end).

Akin to `@=`, `@@=` can update lists in-place, but this version works on 2D list (list of lists, or list of strings). Eg `(@@= a-2d-list i j value)` will replace the element at `a-2d-list[i][j]` by `value`. If the sublist is a string, `value` needs to be a single char, eg `(@@= a-list-of-strings i j "b")`.

---

### Test operator

`(assert condition message)` will interrupt the execution if `condition` is false, and display the given message.

---

### Type operators

`(type value)` returns the type of the given value (or variable) as a string: `"List"`, `"Number"`, `"String"`, `"Function"`, `"CProc"`, `"Closure"`, `"UserType"`, `"Nil"`, `"Bool"`, `"Undefined"`.

`(hasField closure "a")` returns true if the given closure has a field named `a`, false otherwise.

## Importing code

Putting code in multiple files is pretty easy to make it reusable and more maintainable.

In ArkScript, imported code is copied from the specified file into the current one, with a guarantee: circular includes are detected and prevented, making execution always possible even if you include a lot of files.

Files are imported as follows: `(import myfile)`. The path to the target file is **relative to the main executed file**, not to the importing source file.

If `bark.ark` needs to import `file.ark`, we will have to write `(import package.sub.folder.file)`.

```
myfile.ark
package/
    sub/
        bark.ark
        folder/
            file.ark
```

---

When importing code like `(import file)`, every symbol defined in `file` will be automatically prefixed by `file:`. Those are prefixed imports. To use a function defined in `file` you will have to write `(file:my-function args...)`.

You can also import code without the prefix by using a glob import: `(import file:*)`, or just a few symbols: `(import file :foo :bar)` that can be used without the prefix.

### Modules resolution

When importing a `.arkm` module, you need to keep in mind that those are looked up **at runtime**, not compile time. Thus, their path must not change between compilation and execution (eg if you ship your project to a friend, you will need to ship the modules too). It's easier to have them in the the standard library, to import them with `(import std.my-module)`, or along your main script (in the same folder).

### Standard library resolution

When importing files from the standard library, you don't need to write the path to the library folder, just the path of the file in it prefixed by `std`.

For example: `(import std.String)` will import `$ARKSCRIPT_PATH/lib/std/String`:
- if the environment variable `ARKSCRIPT_PATH` exists and resolves to an existing folder,
- otherwise it will try to find a `std` folder in the current working directory.

## Running functions asynchronously

**Added in ArkScript v3.4.0**

Functions can be pretty useful to define tasks, but sometimes we don't want to block our program to wait for a task to finish, for example fetching an HTML page. With ArkScript async/await you can submit the request and do other work that's waiting while the HTTP request is being processed.

For a simpler example, let's calculate the sum of numbers in a list:

{{< highlight_arkscript >}}
(import std.List)

(let size 1000)
(let data (list:fill size 1))  # create a list of a thousand 1's

(let sum (fun (a b src) {
  (mut acc 0)
  (while (< a b) {
    (set acc (+ acc (@ src a)))
    (set a (+ 1 a)) })
  acc }))

(let task (async sum 0 size data))

# do something else...

# now we need the result, let's retrieve it
(print (await task))
{{< /highlight_arkscript >}}

`async` can launch any function in a separate thread, given a set of arguments for the functions. Then it will work without you having to do anything, and you can retrieve the result by using `await`. It will check if the function is done, otherwise wait for it (blocking the thread of the caller) and return its result.

## Using macros to manipulate code at compile time

**Added in ArkScript 4.0.0**

A macro is a rule or pattern that specifies how a certain input should be mapped to a replacement output. Applying a macro to an input is called [**macro expansion**](https://en.wikipedia.org/wiki/Macro_(computer_science)).

In ArkScript, there are 3 different types of macros:
- conditions: `($if condition then else)`
- constants: `(macro my_const value)`
- functions: `(macro my_function (foo bar) body)`

**Constant macros** are just associations `identifier -> value`, the value being whatever you want (even another bloc of code, for example `(let b 12)`). The code is scanned and when such macro is found, it's applied wherever possible.

**Macros' scopes** are tied to the bloc in which they are defined. At the end of said bloc, the macros defined in it are destroyed. Note that a macro defined a in bloc, which includes other blocs, will be available in all the other sub-blocs.

### Named macros

They can be undefined by using `($undef name)`.

{{< highlight_arkscript >}}
(macro a 12)

{
  (print a)  # will print 12, it works!

  (macro a 1)  # We can shadow macros by defining other macros with the
               # same name in sub-blocs.
  (print a)    # 1

  ($undef a)
  (print a) }  # 12, because we undefined the nearest version of a

(print a)  # a is still 12 here
{{< /highlight_arkscript >}}

### Condition macros

They may only work on compile time expressions, using only other macros. For example:

{{< highlight_arkscript >}}
(macro foo 12)
(macro bar 14)

# the condition being true will result in the print being inserted in the program
# while the (let a) will be deleted
($if (and (= foo 12) (= bar 14))
  (print "foo is 12 and bar is 14")
  (let a (+ 12 14)))
{{< /highlight_arkscript >}}

In a *condition macro* we can define other macros and use other conditions macros:

{{< highlight_arkscript >}}
(macro a 12)
($if (= a 12)
  (macro b 14)
  (macro c 13))

(print b)  # prints 14
(print c)  # compilation error: unbound variable c
           # c is unavailable here because it was never defined
{{< /highlight_arkscript >}}

### Function macros

They are evaluated recursively, thus they can call themselves or other macros, and use *condition macros*. A particularity is that their arguments can ArkScript code blocs, such as a `(let a 12)` or even complex code blocs like:

{{< highlight_arkscript >}}
{
  (mut i 0)
  (while continue {
    (print "hello")
    (set i (+ 1 i))
    (if (> i 12)
      (set continue false)) })}
{{< /highlight_arkscript >}}

Those macros can use a magic pattern `...args` (args being the name of the argument, you can use whatever you want) as the last argument to tell the compiler that the macros can take any number of arguments. This is called *varargs* or *variadic arguments*.

{{< highlight_arkscript >}}
(macro foo (a b) {
  (print a " " b)
  (let c (+ a b))})

(foo 1 2)
(print c)  # prints 3

(macro bar (a ...args)
  (print a " " args))

(bar 1)  # prints 1
(bar 1 2)  # prints 1 [2]
(bar 1 2 3)  # prints 1 [2 3]
{{< /highlight_arkscript >}}

Here is a more complex example implementing a *thread macro*. The first argument is the data, then each function is applied onto it, one after another. It allows us to write more readable code, instead of the ugly `(read-string (slurp (io:file (io:resource filename))))`.

{{< highlight_arkscript >}}
(macro -> (arg fn1 ...fn) {
  ($if (> (len fn) 0)
    (-> (fn1 arg) ...fn)
    (fn1 arg))})

(let filename "hello.json")
(let io:resource (fun (file) {
  (print "io:resource")
  file }))
(let io:file (fun (name) {
  (print "io:file")
  name }))
(let slurp (fun (a) {
  (print "io:slurp")
  a }))
(let read-string (fun (a) {
  (print "read-string")
  a }))

(print (-> filename io:resource io:file slurp read-string))
# it will print:
#   io:resource
#   io:file
#   io:slurp
#   read-string
#   hello.json
{{< /highlight_arkscript >}}

**Note:** an even more powerful one is implemented in [the standard library](/docs/std/Macros), which can take incomplete function calls so that you can write `(-> data (send _ "Content-Type: application/json") read-bytes (write _ "output.txt"))` instead of writing anonymous or intermediate functions.

### Compile time evaluation of function calls

Only a short list of select functions may be called at compile time inside macros (if they can not be called at compile, they are left intact).

Here is the list of the available compile time functions, to work with macros (in macros):

- Comparison operators: `=`, `!=`, `<`, `<=`, `>`, `>=`
- Chaining conditions / inverting them: `not`, `and`, `or`
- Working on lists: `len`, `@`, `head`, `tail`, `empty?`
- Arithmetic: `+`, `-`, `*`, `/`

We also have a few predefined macros to work on ArkScript code and ease code generation. For example, one can generate a new symbol using `($symcat symbol value-or-expression)`, or count the number of arguments of a function with `($argcount function-name)`.

`$undef`: delete a given macro.  
`($undef a)` will delete the macro `a`, making unusable past this point.

`$symcat`: generate a new symbol from a given symbol and a value or expression.  
`(- a 1)` with `a` a constant macro (or macro argument) is valid.

`$argcount`: retrieve at compile time the number of arguments taken by a given function.  
The function must have been defined *before* using `$argcount`, or must be an anonymous function: `($argcount (fun (a b c) ()))`, `($argcount my-function)`.

`$repr`: return the AST representation of a given node, as a string.  
`($repr foobar)` will return `"foobar"`, `($repr (fun   ()    (+ 1 2 3)))` will return `"(fun () (+ 1 2 3))"`. Indentation, newlines and comments are not preserved.

`$as-is`: use a given node as it is, without evaluating it any further in the macro context.  
Useful to stop the evaluation of arguments passed to a function macro.

