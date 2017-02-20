const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
module.exports = {
  devServer: {
    quiet: true
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin()
  ]
}
