---
title: "Contributing guidelines"
slug: "contributing"
description: "Guides users to become contributors on the projet"
summary: ""
date: 2025-07-14T16:49:48+02:00
lastmod: 2025-07-14T16:49:48+02:00
draft: false
weight: 200
toc: true
---

If you are here, it means that you are interested in contributing to this project, and we are happy about it!
You will find a collections of useful resources to get started, whatever you would like to contribute.

Don't know what to work on? No worries, we have a [list of things to do](https://github.com/ArkScript-lang/Ark/issues)!

## The project organisation

The project is organised in multiple repositories for us to be able to work on a project (eg the standard library) and update it multiple times without having to roll X different updates for the main repository, the language itself.

- [ArkScript](https://github.com/ArkScript-lang/Ark), the language
    - [The standard library](https://github.com/ArkScript-lang/std)
    - [The C++ modules, part of the standard library](https://github.com/ArkScript-lang/modules)
- [This website](https://github.com/ArkScript-lang/website)
- [The online playground](https://github.com/ArkScript-lang/playground)
- [The benchmarks](https://github.com/ArkScript-lang/benchmarks)
- [The syntaxic coloration plugins](https://github.com/ArkScript-lang/syntax-highlighting)
- [A documentation tool](https://github.com/ArkScript-lang/ArkDoc) for ArkScript code

## Getting started

### The architecture of the project

For an in-depth explanation: [Understanding the project architecture](/docs/reference/architecture/project).

### Contributing to the language, ArkScript

* First, [fork](https://github.com/ArkScript-lang/Ark/fork) the repository
* Then, clone your fork:
    * HTTPS: `git clone https://github.com/<username>/Ark.git`
    * or SSH: `git clone git@github.com:<username>/Ark.git`
* Install the pre-commit hooks: `pre-commit install` (you may need to [install pre-commit](https://pre-commit.com/#install) first)
* `git submodule update --init --recursive` to clone all the submodules used by the project.
* Create a branch for your feature: `git switch -c feat/my-awesome-idea`
* When you're done, push it to your fork and submit a pull request

**It is advised to do this even if you want to contribute to a subproject used by ArkScript, so that you can modify the project and test it directly.**

Then check that everything [builds correctly](/docs/prologue/building), and you're good to go.

Don't forget to launch the tests, and/or [to add tests](/docs/reference/testing_arkscript) to ensure your update works!

If you are modifying a subproject, `cd` in it and change its git remote to point to your fork, then make a PR for your fork, not for the whole ArkScript repository.

### Contributing to the standard library

- `git clone https://github.com/ArkScript-lang/std.git`

You want to add a new function to the standard library, or even a new collection of functions? In the first case, you will need to find in which category it should go (see [the standard library documentation](/docs/std/)) ; in the second case you will have to create a new `<File>.ark` in the project.

Once your contribution is ready, add at least two tests for it: one checking that it works, another for a potential edge case. You will want to add it under `tests/<category>-tests.ark`.

Finally, document your function(s) using [ArkDoc syntax](/docs/reference/arkdoc).

## Adding an external C or C++ library to a project

Use git submodules instead of copying and pasting the code somewhere: `git submodule add https://github.com/user/name.git submodules/name` and add it to the needed CMakeLists.

## An idea, a question, a suggestion or a problem?

Just create an issue in the appropriate repository, we look at them every day.

