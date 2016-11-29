cd `dirname $0`
dist="$(dirname $(dirname $(realpath $0)))/dist"
rm -rf ../dist && NODE_ENV=production ../../bin/wpc --config webpackfile.js --output-path "$dist" entry.js $*
# check if file exists
stat "$dist/main.js"
