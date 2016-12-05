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
      path: Path.resolve(__dirname, '../dist')
    }
  },
  {env},

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
  require('wpc/vue-pug'),
  require('wpc/vue-scss'),
  require('wpc/vue-sass'),
  require('wpc/vue-less'),
  require('wpc/vue-stylus'),

  require('wpc/vendor'),
  require('wpc/manifest'),
  require('wpc/custom'),
  require('wpc/dump-conf'),
  require('wpc/delete-properties')
)
