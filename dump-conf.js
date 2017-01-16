const dump = require('./webpack-config-dump')

module.exports = ({argv}) => {
  if (argv && argv.debug) {
    dump(config)
  }
}
