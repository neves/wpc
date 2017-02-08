const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = ({devtool}) => ({
  packages: ['less-loader@^2.2.3'],
  module: {
    rules: [
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              query: {sourceMap: !!devtool}
            },
            {
              loader: 'less-loader',
              query: {sourceMap: !!devtool}
            }
          ]
        })
      }
    ]
  }
})
