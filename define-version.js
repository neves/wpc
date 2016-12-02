const webpack = require('webpack')
const resolve = require('path').resolve
const fs = require('fs')

function getVersionFromPackage (context) {
  const pkg = resolve(context, 'package.json')
  return fs.existsSync(pkg) ? require(pkg).version : '0.0.0'
}

module.exports = ({context}) => ({
  plugins: [
    new webpack.DefinePlugin({
      'process.env.VERSION': JSON.stringify(getVersionFromPackage(context))
    })
  ]
})
