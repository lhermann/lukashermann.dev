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

mv $filename.$ext $filename.og.$ext
exif --output=$filename.og.$ext --create-exif $filename.og.$ext
exif --output=$filename.$ext --tag=Artist --ifd=0 --set-value='Lukas Hermann <hey@lukashermann.dev>' $filename.og.$ext
rm $filename.og.$ext

