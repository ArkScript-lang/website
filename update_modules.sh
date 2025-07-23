#!/usr/bin/env bash

for f in ../Ark/lib/modules/{draft,src}/*/documentation/*.md; do
    module_name=$(basename $(dirname $(dirname $f)))
    echo $module_name
    cp $f ./content/docs/std/module_$module_name.md
done

