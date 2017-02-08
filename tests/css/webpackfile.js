const merge = require('../../merge')

module.exports = merge(
  require('../../argv'),
  require('../../css'),
  require('../../css-stylus'),
  require('../../css-sass'),
  require('../../css-scss'),
  require('../../css-less'),
  require('../../delete-properties')
)
