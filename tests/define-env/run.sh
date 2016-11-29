cd `dirname $0`
rm -rf ../dist && NODE_ENV=production ../../bin/wpc --config webpackfile.js entry.js ../dist/bundle.js
fgrep -q '"production"' ../dist/bundle.js
