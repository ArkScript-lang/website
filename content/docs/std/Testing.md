---
title: "Testing"
slug: "testing"
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

## test:case

---
`(macro test:case (_desc _body) (...))`
Create a test case with a label to help with debugging when one or more tests fail

**Note**: Test cases can be nested.
#### Parameters
- `_desc`: a description for the test, a string
- `_body`: test to execute

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(test:suite name {
    (test:expect (my_function 1 2 3))
    (test:case "a description" {
        (test:expect (return_true) "return true"})
        (test:eq 1 2 "1 is 2, this should fail")})
{{< /highlight_arkscript >}}

## test:expect

---
`(macro test:expect (_cond ..._desc) (...))`
Given a value or function call returning a boolean, generate a test case

#### Parameters
- `_cond`: the value to test for truthiness
- `_desc`: an optional description (string) for the test

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(test:suite name {
    (test:expect (my_function 1 2 3))
    (test:expect (return_true) "return true"})
{{< /highlight_arkscript >}}

## test:eq

---
`(macro test:eq (_expr _expected ..._desc) (...))`
Compare two values that should be equal and generate a test case

#### Parameters
- `_expr`: computed value to test
- `_expected`: expected value
- `_desc`: an optional description (string) for the test

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(test:suite name {
    (test:eq 6 (my_function 1 2 3))
    (test:eq 5 (foo) "foo should return 5")})
{{< /highlight_arkscript >}}

## test:neq

---
`(macro test:neq (_value _unexpected ..._desc) (...))`
Compare two values that should **not** be equal and generate a test case

#### Parameters
- `_value`: tested value
- `_unexpected`: the value we don't want
- `_desc`: an optional description (string) for the test

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(test:suite name {
    (test:neq 0 (my_function 1 2 3))})
{{< /highlight_arkscript >}}

## test:suite

---
`(macro test:suite (_name _body) (...))`
Generate the code for a test suite

**Note**: Create two variables: _name-output (a list: [successes, failures]) and _name-status (boolean, true on success)
#### Parameters
- `_name`: test name, as an identifier
- `_body`: body of the test, a begin block

#### Author
[@SuperFola](https://github.com/SuperFola)

#### Example
{{< highlight_arkscript >}}
(test:suite name {
    (testing:_suite.toggle_display_cases_success true)  # default: false, when true, display all the cases names on success and failures
    (test:eq 6 (my_function 1 2 3))
    (test:eq 128 (* 8 16))})
{{< /highlight_arkscript >}}



{{< highlight_scripts >}}
