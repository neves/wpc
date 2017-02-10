const merge = require('../../merge')

module.exports = (env, argv) => merge(
  // require('../../defaults'),
  {env, argv},
  require('../../dump-conf'),
  require('../../delete-properties')
)
