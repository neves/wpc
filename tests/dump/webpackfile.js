const merge = require('../../merge')

module.exports = (env, argv) => merge(
  {argv},
  require('../../defaults'),
  require('../../dump-conf'),
  require('../../delete-properties')
)
