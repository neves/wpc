cd `dirname $0`
webpack --config webpackfile.js entry.js ../dist/bundle.js --hide-modules --progress -d
