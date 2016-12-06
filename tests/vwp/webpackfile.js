merge = require('wpc/merge')
const Path = require('path')

module.exports = (env, argv) => merge(
  {env, argv},
  require('wpc/required'), // required or defaults, not both
  // require('wpc/defaults'),
  require('wpc/argv'),
  require('wpc/dev-server'),

  {
    env: {
      src: process.cwd() + '/src'
    },
    entry: './src/index.js',
    output: {
      path: Path.resolve(__dirname, '../dist')
    }
  },

  require('wpc/resolve-src'),
  require('wpc/global-modules'),
  require('wpc/global-loaders'),

  require('wpc/define-env'),
  require('wpc/define-version'),

  require('wpc/css'),
  require('wpc/html'),
  require('wpc/coffee'),
  require('wpc/json'),
  require('wpc/yml'),

  require('wpc/babel'),
  require('wpc/babel-es2015'),
  require('wpc/babel-stage3'),

  require('wpc/vue'),
  require('wpc/vue-babel'),

  require('wpc/vendor'),
  require('wpc/manifest'),
  require('wpc/custom'),
  require('wpc/dump-conf'),
  require('wpc/delete-properties')
)
