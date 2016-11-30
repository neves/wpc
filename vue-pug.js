const merge = require('./merge')

module.exports = ({module}) => {
  vueLoader = module.rules.find(rule => rule.loader === 'vue-loader')
  if (vueLoader) {
    vueLoader.options = merge(vueLoader.options, {
      loaders: {
        pug: 'pug-loader'
      }
    })
  } else {
    console.error('missing vue-loader')
  }

  return {
    packages: ['pug-loader@^2.0.3', 'pug@^2.0.0-beta6']
  }
}
