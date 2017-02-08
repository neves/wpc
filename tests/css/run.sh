cd `dirname $0`
rm -rf ../dist && webpack --config webpackfile.js entry.js ../dist/bundle.js
cat ../dist/main.css
