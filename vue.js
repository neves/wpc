const ExtractTextPlugin = require.main.require('extract-text-webpack-plugin')

// create repetitive ExtractTextPlugin.extract
function extract (devtool, loader = 'css', indentedSyntax = '') {
  var engine = []
  var sourceMap = !!devtool ? 'sourceMap' : ''
  if (loader !== 'css') {
    engine = [ // query must be string, object doesn't work
      {loader: `${loader}-loader?${sourceMap}&${indentedSyntax}`}
    ]
  }
  return ExtractTextPlugin.extract({
    fallback: 'vue-style-loader',
    use: [
      {loader: `css-loader?${sourceMap}`},
      ...engine
    ]
  })
}

module.exports = ({devtool}) => {
  return {
    packages: ['vue-loader', 'vue-template-compiler'],
    resolve: {
      extensions: ['.js', '.vue']
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loaders: {
              css: extract(devtool),
              stylus: extract(devtool, 'stylus'),
              less: extract(devtool, 'less'),
              scss: extract(devtool, 'sass'),
              sass: extract(devtool, 'sass', 'indentedSyntax')

              // DO NOT NEED to add pug, if specified, generates error:
              // [Vue warn]: Failed to mount component: template or render function not defined
              // pug: 'pug-loader', converts to string instead of javascript
            }
          }
        }
      ]
    }
  }
}
