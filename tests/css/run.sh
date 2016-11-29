cd `dirname $0`
rm -rf ../dist && webpack --config webpackfile.js entry.js ../dist/bundle.js
fgrep -q 'background-color:' ../dist/bundle.js
