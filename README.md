# cmo
Nodejs command line utility to change color model in a Cascading Stylesheet. [CLI, CSS]

## Installation

Install nodejs: Binaries, installers, and source tarballs are available at https://nodejs.org.
You can now use npx, for example: ```npx cmo -i rgb-color-model.css```
or install cmo as a system command via ```npm i -g cmo```

## Examples

```bash

# print help
$ cmo -h

# converts to hex by default
$ cmo -i rgb-color-model.css

# be more verbose
$ cmo -i rgb-color-model.css -f hex
$ cmo -i rgb-color-model.css --format hex

# save the file (-o/--output)
$ cmo -i rgb-color-model.css -f hex -o hex-color-model.css

# switch to rgb
$ cmo -i style.css -f rgb -o style-rgb.css

# convert bootstrap to hsl
$ cmo -i https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css --format hsl
$ cmo --format hsl -i https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css -o hslstrap.css

```
