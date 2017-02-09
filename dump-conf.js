const dump = require('./webpack-config-dump')

module.exports = config => {
  // argv is a custom config, so must come before delete-properties
  if (config && config.argv && config.argv.debug) {
    dump(config)
  }
}
