const merge = require('./merge')

module.exports = ({module}) => {
  vueLoader = module.rules.find(rule => rule.loader === 'vue-loader')
  if (vueLoader) {
    vueLoader.options = merge(vueLoader.options, {
      loaders: {
        less: 'style-loader!css-loader!less-loader'
      }
    })
  } else {
    console.error('missing vue-loader')
  }

  return {
    packages: ['less-loader@^2.2.3', 'less@^2.7.1']
  }
}
