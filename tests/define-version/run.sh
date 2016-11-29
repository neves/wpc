cd `dirname $0`
rm -rf ../dist && NODE_ENV=production ../../bin/wpc --config webpackfile.js entry.js ../dist/bundle.js
fgrep -q '"0.0.1"' ../dist/bundle.js
