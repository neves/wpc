const HtmlWebpackPlugin = require('html-webpack-plugin')
const resolve = require('path').resolve

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'index.html')
    })
  ]
}
