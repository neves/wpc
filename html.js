const HtmlWebpackPlugin = require('html-webpack-plugin')
const resolve = require('path').resolve

module.exports = {
  packages: ['html-webpack-plugin@^2.24.1'],
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'index.html')
    })
  ]
}
