cd `dirname $0`
rm -rf ../dist/
webpack --config webpackfile.js --output-path=../dist --hide-modules --progress $@
ls -1 ../dist
