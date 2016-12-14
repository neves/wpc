cd `dirname $0`
rm -rf ../dist && ../../node_modules/.bin/webpack --config webpackfile.js entry.js ../dist/bundle.js
cat ../dist/bundle.js | grep Hello
