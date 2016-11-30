const merge = require('./merge')

module.exports = ({module}) => {
  babelLoader = module.rules.find(rule => rule.loader === 'babel-loader')
  if (babelLoader) {
    babelLoader.options = merge(babelLoader.options, {
      presets: [
        require.resolve('babel-preset-stage-3')
      ]
    })
  } else {
    console.error('missing babel-loader')
  }

  return {
    packages: ['babel-preset-stage-3@^6.17.0']
  }
}
