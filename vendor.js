const webpack = require('webpack')

module.exports = {
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => String(module.resource).indexOf('/node_modules/') >= 0
    })
  ]
}
