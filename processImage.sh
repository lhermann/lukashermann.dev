#!/bin/bash

if [ $# != 1 -o "$1" = "--help" ]; then
  echo 'Usage: processImage.sh imagefile' >&2
  exit 1
elif [ -z $(type -p convert) ]; then
  echo 'Please install ImageMagick to run this script.' >&2
  exit 1
fi

filename="${1%.*}"

mv $filename.jpg $filename.og.jpg
exif --output=$filename.og.jpg --create-exif $filename.og.jpg
exif --output=$filename.jpg --tag=Artist --ifd=0 --set-value='Lukas Hermann <hey@lukashermann.dev>' $filename.og.jpg
convert $filename.jpg -resize 480x\> $filename-480.jpg
convert $filename.jpg -resize 640x\> $filename-640.jpg
convert $filename.jpg -resize 960x\> $filename-960.jpg

