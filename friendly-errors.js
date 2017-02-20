const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
module.exports = {
  devServer: {
    quiet: true,
    overlay: {
      errors: true,
      warnings: true
    }
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin()
  ]
}
