const webpack = require('webpack')
const resolve = require('path').resolve
const fs = require('fs')

function getVersionFromPackage () {
  const pkg = resolve(process.cwd(), 'package.json')
  return fs.existsSync(pkg) ? require(pkg).version : '0.0.0'
}

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.VERSION': JSON.stringify(getVersionFromPackage())
    })
  ]
}
