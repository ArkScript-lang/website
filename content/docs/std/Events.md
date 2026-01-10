---
title: "Events"
slug: "events"
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

## manager:make

---
`(let manager:make (fun () (...)))`
Allows to register events listeners and emit events


**Author**: [@fabien-zoccola](https://github.com/fabien-zoccola)


#### Example
{{< highlight_arkscript >}}
(let em (events:manager:make))
(em.on "myType" (fun (value) (print "This is a callback")))
(em.emit "myType")  # => prints "This is a callback" thanks to the registered listener
{{< /highlight_arkscript >}}

## _check_valid

---
`(let _check_valid (fun (callback) (...)))`
Checks if a given callback is valid (is a function or a closure)

**Note**: Returns true if the callback is a function/closure, false otherwise

**Author**: [@fabien-zoccola](https://github.com/fabien-zoccola)

#### Parameter
- `callback`: the callback to check


#### Example
{{< highlight_arkscript >}}
(closure._check_valid (fun (param) ()))  # => true
(closure._check_valid (fun (param) {}))  # => true
(closure._check_valid 5)  # => false
{{< /highlight_arkscript >}}

## on

---
`(let on (fun (typ callback) (...)))`
Registers an event listener

**Note**: Adds a [type callback] list to the listeners list

**Author**: [@fabien-zoccola](https://github.com/fabien-zoccola)

#### Parameters
- `typ`: the type of the event to listen for
- `callback`: the function/closure that will be called when an event is emitted


#### Example
{{< highlight_arkscript >}}
(closure.on "myType" (fun (param) ())
{{< /highlight_arkscript >}}

## emitWith

---
`(let emitWith (fun (val typ) (...)))`
Emits an event with a value

**Note**: Makes a forEach on the listeners list, and calls the callback. Returns a boolean of whether we called at least one listener

**Author**: [@fabien-zoccola](https://github.com/fabien-zoccola)

#### Parameters
- `val`: the emitted value
- `typ`: the type of the emitted event


#### Example
{{< highlight_arkscript >}}
(closure.emitWith 5 "myType")
{{< /highlight_arkscript >}}

## emit

---
`(let emit (fun (typ) (...)))`
Emits an event with no value

**Note**: Calls emitWith nil <typ>

**Author**: [@fabien-zoccola](https://github.com/fabien-zoccola)

#### Parameter
- `typ`: the type of the emitted event


#### Example
{{< highlight_arkscript >}}
(closure.emit "myType")
{{< /highlight_arkscript >}}

## removeListenersOfType

---
`(let removeListenersOfType (fun (typ) (...)))`
Removes all listeners of a given type

**Note**: Returns if at least one listener has been removed

**Author**: [@fabien-zoccola](https://github.com/fabien-zoccola)

#### Parameter
- `typ`: the type of event to remove from the list


#### Example
{{< highlight_arkscript >}}
(closure.remove_listeners_of_type "myType")
{{< /highlight_arkscript >}}



{{< highlight_scripts >}}
