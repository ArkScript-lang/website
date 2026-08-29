#!/usr/bin/env bash

for f in ./content/docs/std/module_*.md; do
  echo "Removing old documentation $f"
  rm -i "$f"
done

for f in ../Ark/lib/modules/{draft,src}/*/documentation/*.md; do
  parent_1=$(dirname "$f")
  parent_2=$(dirname "$parent_1")
  module_name=$(basename "$parent_2")
  sanitised_name=${module_name#"ark_"}
  echo "$sanitised_name"

  path="./content/docs/std/module_${sanitised_name}.md"
  if ! [ -f "$path" ]; then
    echo "  Creating file from $f"
    cp "$f" "$path"
  else
    echo "  Adding more content from $f"
    echo -e "\n" >> "$path"
    cat "$f" >> "$path"
  fi
done
