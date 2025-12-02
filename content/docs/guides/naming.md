---
title: "Naming convention in ArkScript"
slug: "naming"
description: ""
summary: ""
date: 2025-07-14T19:29:13+02:00
lastmod: 2025-07-14T19:29:13+02:00
draft: false
weight: 202
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

{{< highlight_scripts >}}

## Definitions

- *guideline*: general rule applying to ArkScript code, which must be followed when contributing to the standard library and examples of the main repository
- *standard library (aka lib)*: the files and functions in the `lib/` folder
- *builtins*: functions and constants defined through C++ code, available without having to import anything
- *module*: C++ plugin for the ArkScript virtual machine, allowing use of C++ code (eg: the SFML)

## Naming

### ArkScript

Variables and functions in ArkScript standard library are named in *camelCase*, though *kebab-case*, *snake_case* and *PascalCase* are also supported.

Example:

{{< highlight_arkscript >}}
(math:sin 0.5421)

(list:forEach the-list (fun (element) (...)))

(console:color "red")
{{< /highlight_arkscript >}}

**Boolean test**: if a function only returns a boolean, it should be suffixed with `?`. Eg `even?` instead of `isEven`, `even`, `maybeEven`, `checkIfEven`.

**Mutation**: if a function does explicit mutation of a state (eg in a closure) instead of returning a new value and being pure, it should be suffixed with `!`, eg `append!` for in place mutations on lists.

### Modules (C++)

```cpp
#include <Proxy/Picosha2.hpp>
#include <md5.hpp>

#include <Ark/Module.hpp>

ARK_API Ark::mapping* getFunctionsMapping()
{
    static Ark::mapping map[] = {
        { "hash:sha256", ArkHash::sha2 },
        { "hash:md5", ArkHash::md5 },
        { nullptr, nullptr }
    };

    return map;
}
```

Alternative, without namespaces:

```cpp
#include <http_module.hpp>

// module functions mapping
ARK_API mapping* getFunctionsMapping()
{
    static mapping map[] = {
        { "http:headers", http_create_headers },
        { "http:client", http_create_client },
        { "http:get", http_client_get },
        { "http:post", http_client_post },
        { "http:put", http_client_put },
        { "http:delete", http_client_delete },
        { "http:patch", http_client_patch },
        { "http:setFollowLocation", http_client_set_follow_location },
        { "http:setConnectionTimeout", http_client_set_co_timeout },
        { "http:setReadTimeout", http_client_set_read_timeout },
        { "http:setWriteTimeout", http_client_set_write_timeout },
        { "http:setBasicAuth", http_client_set_basic_auth },
        { "http:setBearerTokenAuth", http_client_set_bearer_token_auth },
        { "http:setKeepAlive", http_client_set_keep_alive },
        { "http:setProxy", http_client_set_proxy },
        { "http:setProxyBasicAuth", http_client_set_proxy_basic_auth },
        { "http:setProxyBearerTokenAuth", http_client_set_proxy_bearer_token_auth },

        { nullptr, nullptr }
    };

    return map;
}
```

Names are crafted so that it is easy to know what a function does, here we have `module_create_object` for functions creating `Ark::UserType`, `module_object_operation` for functions using said object.

