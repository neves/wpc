cd `dirname $0`
rm -rf ../dist && \
webpack --config webpackfile.js entry.js '../dist/[name].js' --hide-modules --progress && \
cat ../dist/main.css
