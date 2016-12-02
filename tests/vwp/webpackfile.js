merge = require('wpc/merge')

module.exports = env => merge(
  require('wpc/defaults'),
{
  env: {
    src: process.cwd() + '/src'
  },
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  }
},
  require('wpc/resolve-src'),
  require('wpc/global-modules'),
  require('wpc/global-loaders'),
  require('wpc/css'),
  require('wpc/vue'),
  require('wpc/babel'),
  require('wpc/babel-es2015'),
  require('wpc/babel-stage3'),
  require('wpc/define-version'),
  require('wpc/define-env'),
  require('wpc/html'),
  require('wpc/dump-conf'),
  require('wpc/delete-properties')
)
