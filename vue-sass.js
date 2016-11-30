const merge = require('./merge')

module.exports = ({module}) => {
  vueLoader = module.rules.find(rule => rule.loader === 'vue-loader')
  if (vueLoader) {
    vueLoader.options = merge(vueLoader.options, {
      loaders: {
        sass: 'style-loader!css-loader!sass-loader?indentedSyntax=true'
      }
    })
  } else {
    console.error('missing vue-loader')
  }

  return {
    packages: ['sass-loader@^4.0.2', 'node-sass@^3.13.0']
  }
}
