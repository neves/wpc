merge = require('wpc/merge')
const Path = require('path')

module.exports = env => merge(
  require('wpc/defaults'),
  {
    env: {
      debug: process.env.DEBUG || ['--debug', '-d', '--verbose'].some(e => process.argv.includes(e)),
      src: process.cwd() + '/src'
    },
    entry: './src/index.js',
    output: {
      path: Path.resolve(__dirname, '../dist'),
      filename: 'bundle.js'
    }
  },
  {env},
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
