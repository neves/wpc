const dump = require('./webpack-config-dump')

module.exports = config => {
  if (config && config.env && config.env.debug) {
    dump(config)
  }
}
