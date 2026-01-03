---
title: "REPL"
slug: "repl"
description: ""
date: 2026-01-01T16:52:54+02:00
lastmod: 2026-01-01T16:52:54+02:00
draft: false
weight: 505
---

ArkScript REPL can be launched by calling `arkscript` without any file argument.

It will look for the `ARKSCRIPT_REPL_STARTUP` environment variable to optionally preload code. See [the getting started guide](/docs/prologue/building/#environment-var-setup) to configure it.

## REPL builtins

- `(repl:history)` returns the REPL history as a string
- `(repl:save filename)` saves the REPL history to a file
- `(repl:load filename)` loads a file into the REPL (copies its content to the current session, to avoid path problems with imports)

## REPL commands

- `help`: display this message
- `quit`: quit the REPL
- `save`: save the history to disk
- `history`: print saved code
- `reset`: reset the VM state

## REPL controls

- **Home**: move to start of line
- **End**: move to end of line
- **Control** + **Left**: move cursor one word left
- **Control** + **Right**: move cursor one word right
- **Control** + **Up**: show previous hint
- **Control** + **Down**: show next hint
- **Control** + **U**: delete current line
- **Control** + **W**: delete last word
- **Control** + **K**: delete until end of line
- **Control** + **R**: incremental search
- **Control** + **C**: abort line
- **Control** + **L**: clear screen
- **Control** + **D**: send EOF, quit REPL
- **Control** + **T**: transpose characters (invert the 2 characters *before* the cursor*)

