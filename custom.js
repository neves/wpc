// Accepts a custom configuration inside project
const fs = require('fs')
const resolve = require('path').resolve

module.exports = ({context, env}) => {
  var configFileName = env.config || 'wpc.conf.js'
  var custom = resolve(context, configFileName)
  if (fs.existsSync(custom)) {
    // instead of just use: return require(custom)
    return [require(custom)] // hack to support a function (myself) that returns a function (result of require)
  }
}
