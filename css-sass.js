const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = ({devtool}) => ({
  packages: ['sass-loader@^5.0.1'],
  module: {
    rules: [
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              query: {sourceMap: !!devtool}
            },
            {
              loader: 'sass-loader',
              query: {sourceMap: !!devtool, indentedSyntax: true}
            }
          ]
        })
      }
    ]
  }
})
