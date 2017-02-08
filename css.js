/**
 * https://github.com/webpack/style-loader
 * https://github.com/webpack/css-loader
 * https://github.com/webpack-contrib/extract-text-webpack-plugin
 */
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = ({devtool}) => ({
  packages: ['css-loader@^0.26.1', 'style-loader@^0.13.1', 'extract-text-webpack-plugin@^2.0.0-rc.3'],
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: {
            loader: 'css-loader',
            query: {sourceMap: !!devtool}
          }
        })
      }
    ]
  },

  plugins: [ // Must be included if used above
    new ExtractTextPlugin({
      filename: '[name].css', // TODO: define by var
      allChunks: true,
      disable: false // TODO: make it possible to disable
    })
  ]
})
