const dump = require('./webpack-config-dump')

module.exports = config => {
  if (config && config.debug) {
    dump(config)
  }
}
