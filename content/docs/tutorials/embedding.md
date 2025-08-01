---
title: "Embedding ArkScript in C++ projects"
slug: "embedding"
description: ""
summary: ""
date: 2025-07-14T19:11:23+02:00
lastmod: 2025-07-14T19:11:23+02:00
draft: false
weight: 301
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

## CMake setup

Here is a minimal CMakeLists.txt to integrate ArkScript in a project:

```cmake
cmake_minimum_required(VERSION 3.15)

project(IntegrateArk)

# By default, ArkScript won't build:
# - the executable interpreter,
# - the modules,
# - the tests,
# - or the benchmarks.
# However, `sys:exec` is available, but we can disable it at build time
set(ARK_ENABLE_SYSTEM OFF)

add_subdirectory(ArkScript)

# creating our executable
add_executable(${PROJECT_NAME} main.cpp)

# adding ArkScript includes to the executable,
# linking it to the dynamic library for the language
target_include_directories(${PROJECT_NAME} PUBLIC ArkScript/include)
target_link_libraries(${PROJECT_NAME} PUBLIC ArkReactor)

target_compile_features(${PROJECT_NAME} PRIVATE cxx_std_20)
```

## Using ArkScript

An example is often worth a thousands words:
```cpp
#include <Ark/Ark.hpp>

int main()
{
    // A state can be shared by multiple virtual machines
    // (note that they will NEVER modify it).
    // Leave the constructor empty to select the default standard
    // library (loaded from an environment variable $ARKSCRIPT_PATH/lib)
    Ark::State state;

    // Will automatically compile the string
    state.doString("(let foo (fun (x y) (+ x y 2)))");

    Ark::VM vm(state);
    vm.run();

    // Run an ArkScript function from C++ code and retrieve the result:
    auto value = vm.call("foo", 5, 6.0);
    std::cout << value << "\n";  // prints 13

    // If you just want to run a precompiled bytecode file:
    {
        Ark::State state;
        state.feed("mybytecode.arkc");
        Ark::VM vm(state);
        vm.run();
    }

    return 0;
}
```

## Adding your own functions

```cpp
#include <Ark/Ark.hpp>
#include <vector>

Ark::Value my_function(std::vector<Ark::Value>& args, Ark::VM* vm)
{
    // checking argument number
    if (args.size() != 4)
        throw std::runtime_error("my_function needs 4 arguments!");

    if (!types::check(args, Ark::ValueType::Number, Ark::ValueType::Number, Ark::ValueType::Number, Ark::ValueType::Number))
        Ark::types::generateError(
            "my_function",
            { { Ark::types::Contract { {
                Ark::types::Typedef("a", ValueType::Number),
                Ark::types::Typedef("b", ValueType::Number),
                Ark::types::Typedef("c", ValueType::Number),
                Ark::types::Typedef("d", ValueType::Number)
                } } } },
            args);

    auto a = args[0],
        b = args[1],
        c = args[2],
        d = args[3];

    // type is automatically deducted from the argument
    return Ark::Value(a.number() * b.number() - c.number() / d.number());
}

int main()
{
    Ark::State state;

    state.loadFunction("my_function", my_function);
    // we can also load C++ lambdas
    // we could have done this after creating the VM, it would still works
    // we just need to do that BEFORE we call vm.run()
    state.loadFunction("foo", [](std::vector<Ark::Value>& args, Ark::VM* vm) {
        return Ark::Value(static_cast<int>(args.size()));
    });
    // we can call state.doFile() before or after state.loadFunction()
    state.doString("(let bar (my_function 1 2 3 1)) (let egg (foo 1 2 3))");

    Ark::VM vm(state);
    vm.run();

    auto bar = vm["bar"];
    std::cout << bar << "\n";

    auto egg = vm["egg"];
    std::cout << egg << "\n";

    return 0;
}
```

## Binding custom types in ArkScript

```cpp
enum class Breakfast { Eggs, Bacon, Pizza };

Breakfast& getBreakfast()
{
    static Breakfast bf = Breakfast::Pizza;
    return bf;
}

UserType::ControlFuncs* get_cfs()
{
    static UserType::ControlFuncs cfs;

    cfs.ostream_func = [](std::ostream& os, const UserType& a) -> std::ostream& {
        os << "Breakfast::";
        switch (a.as<Breakfast>())
        {
            case Breakfast::Eggs:  os << "Eggs";    break;
            case Breakfast::Bacon: os << "Bacon";   break;
            case Breakfast::Pizza: os << "Pizza";   break;
            default:               os << "Unknown"; break;
        }
        return os;
    };

    return &cfs;
}

int main()
{
    Ark::State state;

    state.loadFunction("getBreakfast", [](std::vector<Ark::Value>& n, Ark::VM* vm) -> Ark::Value {
        // we need to send the address of the object, which will be casted
        // to void* internally
        Ark::Value v = Ark::Value(Ark::UserType(&getBreakfast()));

        // register the unique control functions block for this usertype
        // this cfs block can be shared between multiple usertype to reduce allocations
        v.usertypeRef().setControlFuncs(get_cfs());

        return v;
    });

    state.loadFunction("useBreakfast", [](std::vector<Ark::Value>& n, Ark::VM* vm) -> Ark::Value {
        if (n[0].valueType() == Ark::ValueType::User && n[0].usertype().is<Breakfast>())
        {
            std::cout << "UserType detected as an enum class Breakfast" << std::endl;
            Breakfast& bf = n[0].usertype().as<Breakfast>();
            std::cout << "Got " << n[0].usertype() << "\n";
            if (bf == Breakfast::Pizza)
                std::cout << "Good choice! Have a nice breakfast ;)" << std::endl;
        }

        return Ark::Nil;
    });

    state.doString("(begin (let a (getBreakfast)) (print a) (useBreakfast a))");
    Ark::VM vm(&state);
    vm.run();

    /*
        Will print

        Breakfast::Pizza
        UserType detected as an enum class Breakfast
        Got Breakfast::Pizza
        Good choice! Have a nice breakfast ;)
    */

    return 0;
}
```

