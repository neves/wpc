const merge = require('../../merge')

module.exports = (env, argv) => merge(
  {env, argv},
  require('../../argv'),
  require('../../env'),
  require('../../css'),
  require('../../vue'),
  require('../../dump-conf'),
  require('../../delete-properties')
)
