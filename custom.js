const fs = require('fs')
const resolve = require('path').resolve

module.exports = ({context, env}) => {
  var configFileName = env.config || 'wpc.conf.js'
  var custom = resolve(context, configFileName)
  if (fs.existsSync(custom)) {
    return require(custom)
  }
}
