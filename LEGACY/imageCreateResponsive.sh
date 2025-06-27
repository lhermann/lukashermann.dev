#!/bin/bash

if [ $# != 1 -o "$1" = "--help" ]; then
  echo 'Usage: processImage.sh imagefile' >&2
  exit 1
elif [ -z $(type -p convert) ]; then
  echo 'Please install ImageMagick to run this script.' >&2
  exit 1
fi

filename="${1%.*}"
ext="${1##*.}"

convert $filename.$ext -resize 480x\> $filename-480.$ext
convert $filename.$ext -resize 640x\> $filename-640.$ext
convert $filename.$ext -resize 960x\> $filename-960.$ext

