cd `dirname $0`
rm -rf ../dist && \
webpack --config webpackfile.js entry.js ../dist/bundle.js --hide-modules --progress --devtool source-map && \
cat ../dist/main.css
