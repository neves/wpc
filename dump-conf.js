const dump = require('./webpack-config-dump')

module.exports = config => {
  if (config && config.argv && config.argv.debug) {
    dump(config)
  }
}
