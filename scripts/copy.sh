#!/usr/bin/env bash

OUTPUT="dist"

if [ "$NODE_ENV" == "production" ]; then
  OUTPUT="public"
fi

rm -rf $OUTPUT
mkdir $OUTPUT
cp -f src/index.html $OUTPUT/
