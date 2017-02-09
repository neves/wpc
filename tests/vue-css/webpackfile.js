const merge = require('../../merge')

module.exports = (env, argv) => merge(
  {env, argv},
  require('../../argv'),
  require('../../css'),
  require('../../vue'),
  require('../../dump-conf'),
  require('../../delete-properties')
)
