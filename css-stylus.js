const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = ({devtool}) => ({
  packages: ['stylus-loader@^2.4.0'],
  module: {
    rules: [
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              query: {sourceMap: !!devtool}
            },
            {
              loader: 'stylus-loader',
              query: {sourceMap: !!devtool}
            }
          ]
        })
      }
    ]
  }
})
