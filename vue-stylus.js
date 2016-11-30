const merge = require('./merge')

module.exports = ({module}) => {
  vueLoader = module.rules.find(rule => rule.loader === 'vue-loader')
  if (vueLoader) {
    vueLoader.options = merge(vueLoader.options, {
      loaders: {
        stylus: 'style-loader!css-loader!stylus-loader'
      }
    })
  } else {
    console.error('missing vue-loader')
  }

  return {
    packages: ['stylus-loader@^2.3.1', 'stylus@^0.54.5']
  }
}
