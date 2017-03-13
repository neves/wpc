const merge = require('../../merge')

module.exports = merge(
  require('../../env'),
  require('../../css'),
  require('../../vendor'),
  require('../../delete-properties')
)
