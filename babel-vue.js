const merge = require('./merge')

module.exports = ({module}) => {
  babelLoader = module.rules.find(rule => rule.loader === 'babel-loader')
  if (babelLoader) {
    babelLoader.options = merge(babelLoader.options, {
      presets: [
        [require.resolve('babel-preset-vue-app')]
      ]
    })
  } else {
    console.error('missing babel-loader')
  }

  return {
    packages: ['babel-preset-vue-app@^1.3.1']
  }
}
