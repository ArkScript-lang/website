---
title: "CI integration"
slug: "ci"
description: ""
summary: ""
date: 2026-11-12T18:52:13+01:00
lastmod: 2026-11-12T18:52:13+01:00
draft: false
weight: 203
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

## Formatting ArkScript code on CI

GitHub action: https://github.com/ArkScript-lang/action-format

Inputs:
- folder:
  - description: Folder with .ark files to check, scanned **recursively**
  - required: true

Example:

```yaml
on: [push]

jobs:
  build:
    runs-on: ubuntu-24.04
    steps:
      - uses: actions/checkout@v4

      - uses: ArkScript-lang/action-format@master
        with:
          folder: example/format

      - uses: ArkScript-lang/action-format@master
        with:
          folder: example/format/
```

## Running ArkScript code on CI

GitHub action: https://github.com/ArkScript-lang/setup-arkscript

Inputs:
- os: OS ArkScript will be running on: `linux` (or `ubuntu`), `windows`, or `macos`.
    - Names like `ubuntu-latest` or `macos-14` will work because only the part before the `-` is used
- version: defaults to `latest`
    - `latest` will download the latest available release
    - any valid tag that exists on ArkScript-lang/Ark repository, eg `v4.0.0-18`
- stdlib_update: defaults to no
    - yes: fetch the latest available ArkScript stdlib
    - no: do not update the stdlib and use the one bundled with the release

Example:

```yaml
name: "Testing ArkScript"

on:
  push:
    branches: [ master ]
  pull_request:

jobs:
  build:
    runs-on: ${{ matrix.os }}
    name: "${{ matrix.os }}, ArkScript ${{ matrix.version }}, stdlib update: ${{ matrix.stdlib_update }}"

    strategy:
      fail-fast: false
      matrix:
        os: [ubuntu-24.04, windows-latest, macos-14]
        version: [latest, v4.3.0, v4.5.2]
        stdlib_update: [yes, no]

    steps:
      - uses: actions/checkout@v5

      - name: Setup ArkScript
        uses: ArkScript-lang/setup-arkscript@master
        with:
          os: ${{ matrix.os }}
          version: ${{ matrix.version }}
          stdlib_update: ${{ matrix.stdlib_update }}

      - name: Run code
        shell: bash
        run: arkscript --eval '(import std.List) (list:map "hello world!" print)'
```
