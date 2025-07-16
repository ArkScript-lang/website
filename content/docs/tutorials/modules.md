---
title: "Creating modules"
slug: "modules"
description: ""
summary: ""
date: 2025-07-14T19:25:20+02:00
lastmod: 2025-07-14T19:25:20+02:00
draft: false
weight: 999
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

## Before starting

You will still need to dive a bit into the documentation of the project, to know how:
- the VM API works, and what it provides
- the possibilities of the Value type (comparisons, creations)
- how to use the `Ark::UserType`

Also, read [the HOWTO guide about module error handling](/docs/reference/module_error_handling) to use the same conventions as the other modules, and [the guidelines about naming convention](/docs/guides/naming) in ArkScript (specifically see the *Modules (C++)* section).

        section#create-a-module
            h2 Creating a new module
            div.inner-section
                p
                    | In your #[a(href="https://github.com/ArkScript-lang/modules") ArkScript-lang/modules] fork, run the Python script as follows #[code python3 shell/createmodules/create.py module_name].
                    | This will create a new folder #[code module_name/] for you, alongside a few folders and files needed to get you started.
                p Create a #[code Main.cpp] file in #[code module_name/src/] with the following content:
                pre: code.rainbowjs(data-language="cpp")
                    | #include &lt;Ark/Module.hpp&gt;
                    | 
                    | Ark::Value foo(std::vector&lt;Ark::Value&gt;& n [[maybe_unused]], Ark::VM* vm [[maybe_unused]])
                    | {
                    |     return Ark::Value(1);
                    | }
                    | 
                    | ARK_API Ark::mapping* getFunctionsMapping()
                    | {
                    |     static Ark::mapping map[] = {
                    |         { "test:foo", foo },
                    | 
                    |         // sentinel
                    |         { nullptr, nullptr }
                    |     };
                    | 
                    |     return map;
                    | }
                p Let's walk through this line by line:
                ul
                    li #[code #include &lt;Ark/Module.hpp&gt;] includes basic files from ArkScript to be able to use the VM, instantiates values, and generate the entry point of the module
                    li #[code Ark::Value foo(std::vector&lt;Ark::Value&gt;& n [[maybe_unused]], Ark::VM* vm [[maybe_unused]]) {...}] defines a function for our module, taking an argument list from the VM, and a non-owning pointer to the VM
                    li #[code ARK_API Ark::mapping* getFunctionsMapping()] declares the entrypoint of our module
                    li #[code static Ark::mapping map[] = {...};] creates a mapping of elements to hold the name -&gt; function pointer association, defining the module
                    li closing braces are stacked together, and never preceded by a newline
                        ul: li note that the given name is #[code "test:foo"]: this is a convention in ArkScript, every module's function must be prefixed by the module name
                    li #[code { nullptr, nullptr }]: a sentinel so that the virtual machine where the end of mapping is

        section#building
            h2 Building your module
            div.inner-section
                p Clone ArkScript wherever you like. Then, you will need to update your CMakeLists.txt to add the following code:
                pre: code.rainbowjs(data-language="cmake")
                    | add_subdirectory(path/to/arkscript/ Ark)
                p Then, run #[code cmake . -Bbuild], and build your module with #[code cmake --build build]. It should output a #[code .arkm] file in the current working directory.

        section#troubleshooting
            h2 Troubleshooting
            div.inner-section
                h3 Storing values in a C++ module
                p
                    | Lets say you are making a module to handle a window (to draw on it). You will open it with the API for your system, for example the WinAPI, and get an handle to it.
                    | Now you want to be able to modify this window in ArkScript, the solution is simple: creating an UserType holding your handle, and then getting this user type back in
                    | your functions and playing with the handle.
                p
                    | If you try this as is, it won't work. Or at least, it won't work for more than a function call, because the UserType doesn't become the #[em owner of the handle],
                    | it only holds a view (observer pointer) to your resource. That means your resource must continue to live on its own in your module. Because it's a dynamic library,
                    | making a global and storing your handle in it will be complicated and in a lot of cases it won't work at all.
                p Here is the trick:
                pre: code.rainbowjs(data-language="cpp")
                    | // will always return the same handle once its created
                    | Handle& get_me_a_window_handle()
                    | {
                    |     static Handle handle = WinApi_Do_Complex_Stuff(12);
                    |     // ...
                    |     return handle;
                    | }
                    |
                    | Ark::UserType::ControlFuncs* get_cfs_window()
                    | {
                    |     static Ark::UserType::ControlFuncs cfs;
                    |     cfs.ostream_func = [](std::ostream& os, const Ark::UserType& a) -&gt; std::ostream& {
                    |         // do stuff
                    |         return os;
                    |     };
                    |     cfs.deleter = [](void* data) {
                    |         // do stuff
                    |     };
                    |     return &cfs;
                    | }
                    |
                    | Ark::Value create_window_handle([[maybe_unused]] std::vector&lt;Ark::Value&gt;& args, [[maybe_unused]] Ark::VM* vm)
                    | {
                    |     Handle& handle = get_me_a_window_handle();
                    |     return Ark::Value(
                    |         Ark::UserType(&handle, get_cfs_window())
                    |     );
                    | }
                p There is a lot of things to unpack here.
                p First, we have a function returning a reference to a static object, which will get initialized only once, even if we call the function a thousand times. Great, we solved the lifetime problem!
                p
                    | Then, we have a #[code get_cfs_window] functions. #[em cfs] is the abbreviation for #[em control functions] in ArkScript, they are designed as a shared block of function pointers
                    | to handle an object in ArkScript (how to display it on the screen, how to delete it once the memory needs to be fred...)
                p Finally, we have our C++ function which will be bind to ArkScript, creating/receiving the window handle and returning an UserType with the control functions block.

