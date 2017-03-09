const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

module.exports = ({argv}) => {
  if (argv.json) return {} // disable if generating stats.json
  return  {
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
}
