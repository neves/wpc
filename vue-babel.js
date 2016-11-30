/**
 * vue-loader can't use configuration from babel-loader,
 * or .babelrc since it's resolved relative to project folder.
 * So we have to copy from babel-loader module rule already defined
 */
merge = require('./merge')

module.exports = ({module}) => {
  vueLoader = module.rules.find(rule => rule.loader === 'vue-loader')
  babelLoader = module.rules.find(rule => rule.loader === 'babel-loader')
  if (vueLoader && babelLoader) {
    var query = babelLoader.options.presets.map(preset => `presets[]=${[].concat(preset)[0]}`).join('&')
    // query: presets[]=.../node_modules/babel-preset-es2015/lib/index.js&presets[]=.../node_modules/babel-preset-stage-3/lib/index.js
    vueLoader.options = merge(vueLoader.options, {
      loaders: {
        js: 'babel-loader?' + query
      }
    })
  } else {
    console.error('missing vue-loader or babel-loader')
  }

  return {}
}
