---
title: "Creating a release"
slug: "creating_release"
description: ""
summary: ""
date: 2025-08-06T20:46:40+02:00
lastmod: 2025-08-06T20:46:40+02:00
draft: false
weight: 999
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

*This page is for ArkScript contributors and release managers*

## Releasing a new version of the language

1. Make sure every feature, bug fix and edit has been pushed to the `dev` branch
    - check that the stdlib submodule is up to date!
2. Make sure the CI passes on `dev`
3. Update the `CHANGELOG.md` to name the current version and add the date of the day: `## [X.Y.Z] - YYYY-MM-DD`
4. Create a tag on the CLI: `git tag vX.Y.Z && git push --tags`
5. This will trigger the `release.yml` workflow on **ArkScript-lang/Ark**, which will:
    - create binaries for Linux, MacOS, and Windows
    - create an InnoSetup installer for Windows
    - create a draft release with the release notes from the changelog
6. Publish the release as **latest** and create a discussion for it in **Show and tell**
7. Go to `ArkScript-lang/homebrew-arkscript`:
    - create a new formula with the Python script: `python3 create_formula.py v[X.Y.Z]`
    - push the changes

