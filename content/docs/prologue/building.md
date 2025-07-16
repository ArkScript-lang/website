---
title: "Building and installing"
slug: "building"
description: "Building and installing ArkScript on your system"
summary: ""
date: 2025-07-14T17:03:31+02:00
lastmod: 2025-07-14T17:03:31+02:00
draft: false
weight: 900
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

You can choose to build the project from source (which requires some knowledge like git, cmake and using shell commands) or get a build from a ZIP file.

## Environment var setup

*This step is optional*

You can create an environment variable named `ARKSCRIPT_PATH`, with the path to the installation directory of ArkScript, so that the standard library can be located without using `--lib <path>`.

The environment variable should direct to a folder with the folder `lib/` inside. Multiple path can be provided if your installation separates the modules and the standard library, by separating the different paths with a single `;`.

## Installing from a release

### Windows

Download the `windows-msvc-{version}.zip` from the [releases](https://github.com/ArkScript-lang/Ark/releases/latest), and unpack it wherever you want, as long as you remember where (or add the location to an environment variable as specified in the setup section, to avoid using `--lib <path>`). To use the command `arkscript` from everywhere, you will need to [add it to your PATH](https://docs.microsoft.com/en-us/previous-versions/office/developer/sharepoint-2010/ee537574(v=office.14)) add it to your PATH] environment variable.

An alternative is to download `windows-installer.exe`, an InnoSetup installer for ArkScript. It will install it as well as the standard library (modules included) in your `C:/Program Files` folder, and create the appropriate `ARKSCRIPT_PATH` environment variable.

### Linux and derivatives

Download the `linux-{compiler}.zip` from the [releases](https://github.com/ArkScript-lang/Ark/releases/latest). You can put the binaries and the lib anywhere you want, as long as you add it to your path to execute ArkScript without giving the complete path (in your `.bashrc` for example). You can also create an environment variable as stated in the setup above.

### Using Docker

```shell
# Using the latest stable release:
docker pull arkscript/stable:latest
# Or a development version:
docker pull arkscript/nightly:latest

# Assuming there is a myscript.ark in the current folder
docker run --rm -it -v $(pwd):/tmp:ro arkscript/stable:latest /tmp/myscript.ark
```

## From source

Clone the repository and go in the newly created repository, then init and update all the git submodules, as follows:

```shell
git clone https://github.com/ArkScript-lang/Ark.git
cd Ark
git submodule update --init --recursive
```

If you want a specific revision or tag, you can do this right before initializing and updating the git submodules:

```shell
# for a specific revision
git checkout <commit>
# for a specific tag
git checkout tags/<tag>
```

Different CMake switches are available to customize the build:

- `-DARK_BUILD_EXE` to generate an executable, defaults to Off, building a shared library
- `-DARK_ENABLE_SYSTEM` to enable `sys:exec` (execute shell commands without restrictions), defaults to On
- `-DARK_BUILD_MODULES` to build the modules, defaults to Off
- `-DARK_NO_STDLIB` to avoid the installation of the ArkScript standard library
- `-DARK_SANITIZERS` to enable ASAN and UBSAN
- `-DARK_TESTS` to build the unit tests (separate target named `unittests`)
    - `-DARK_COVERAGE` to enable coverage analysis ; only works in conjunction with `-DARK_TESTS`, enables the `coverage` target: `cmake --build build --target coverage`

### Building on Windows

Requirements:
- x64 version of Windows
- Visual Studio >= 17 2022
- cmake >= 3.15

Commands:

```shell
cmake . -Bbuild -DARK_BUILD_EXE=On -G "Visual Studio 17 Win64"
cmake --build build --config Release
cmake --install build --config Release  # might need administrator rights
```

### Building on Linux and derivates

Requirements:
- 64 bits capable OS
- g++ 14+ or clang 16+
- cmake >= 3.15

Commands:

```shell
~/ark$ cmake . -Bbuild -DARK_BUILD_EXE=On
~/ark$ cmake --build build --config Release
~/ark$ sudo cmake --install build --config Release  # needs administrator rights to install under /usr/bin
```

### Building on MacOS

Requirements:
- clang 16+
- cmake >= 3.15

On MacOS versions prior to 10.15, `libc++` lacks `filesystem` in the standard library.

You will need to:
- Install a newer compiler using [Homebrew](https://docs.brew.sh/): `brew install gcc && brew link gcc`
- Pass compiler path to `cmake` in the build step: `-DCMAKE_CXX_COMPILER=/usr/local/bin/g++-14`

Commands:

```shell
~/ark$ cmake . -Bbuild -DARK_BUILD_EXE=On -DCMAKE_CXX_COMPILER=/usr/local/bin/g++-14
~/ark$ cmake --build build --config Release
~/ark$ cmake --install build --config Release  # might need administrator rights
```

### Running the tests

To check that everything works, it is important to run the tests for the projects, and we have a multitude of them:
- `tests/benchmarks`: benchmarks for the parser and VM with a few scripts to help identifying regressions
- `tests/fuzzing`: a collection of scripts (in `tests/fuzzing/docker/`) and ArkScript source files under the different `corpus` / `corpus-cmin` / `corpus-cmin-tmin` directories (only the `corpus` directory is managed by us, the two others are generated automatically through scripts and AFL++). Fuzzers can be run automatically using the `start-afl-docker.sh` script, that starts a docker image, compile ArkScript and run the fuzzers inside tmux sessions. An `output/` folder is created at the root of the project with the fuzzers output
- `tests/repl`: a short test for the REPL to ensure it still autocompletes correctly
- `tests/unittests`: test suites built on [boost/ut](https://github.com/boost-ext/ut), testing:
    - the utilities in C++ used in the project,
    - the parser, for bad and correct inputs,
    - the code formatter,
    - the compiler, IR optimizer and IR compiler,
    - the language itself via tests written in ArkScript,
    - the error messages generated at compile-time and run-time.

