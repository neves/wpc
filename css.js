/**
 * https://github.com/webpack/style-loader
 * https://github.com/webpack/css-loader
 * https://github.com/webpack-contrib/extract-text-webpack-plugin
 */
const ExtractTextPlugin = require.main.require('extract-text-webpack-plugin')

// create repetitive ExtractTextPlugin.extract
function extract (devtool, loader = 'css', opt = {}) {
  var engine = []
  if (loader !== 'css') {
    engine = [
      {loader: `${loader}-loader`, query: Object.assign({sourceMap: !!devtool}, opt)}
    ]
  }
  return ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      {
        loader: 'css-loader',
        query: {sourceMap: !!devtool}
      },
      ...engine
    ]
  })
}

module.exports = ({devtool}) => ({
  packages: ['css-loader@^0.26.1', 'style-loader@^0.13.1', 'extract-text-webpack-plugin@^2.0.0-rc.3'],
  module: {
    rules: [
      { test: /\.css$/,  loader: extract(devtool) },
      { test: /\.less$/, loader: extract(devtool, 'less') },
      { test: /\.styl$/, loader: extract(devtool, 'stylus') },
      { test: /\.scss$/, loader: extract(devtool, 'sass') },
      { test: /\.sass$/, loader: extract(devtool, 'sass', {indentedSyntax: true}) },
    ]
  },

  plugins: [ // Must be included if used above
    new ExtractTextPlugin({
      filename: '[name].css', // TODO: define by config with contenthash:5
      allChunks: true,
      disable: false // TODO: make it possible to disable
    })
  ]
})
