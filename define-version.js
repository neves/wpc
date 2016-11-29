const webpack = require('webpack')
const resolve = require('path').resolve

function getVersionFromPackage () {
  const pkg = require.resolve(resolve(process.cwd(), 'package.json'))
  return pkg ? require(pkg).version : '0.0.0'
}

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.VERSION': JSON.stringify(getVersionFromPackage())
    })
  ]
}
