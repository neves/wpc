const merge = require('../../merge')

module.exports = (env = {}, argv) => merge(
  {env, argv},
  require('../../env'),
  require('../../required'),
  require('../../delete-properties')
)
