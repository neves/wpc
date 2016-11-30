const merge = require('./merge')

module.exports = ({module}) => {
  babelLoader = module.rules.find(rule => rule.loader === 'babel-loader')
  if (babelLoader) {
    babelLoader.options = merge(babelLoader.options, {
      presets: [
        [require.resolve('babel-preset-es2015'), {modules: false}]
      ]
    })
  } else {
    console.error('missing babel-loader')
  }

  return {
    packages: ['babel-preset-es2015@^6.18.0']
  }
}
