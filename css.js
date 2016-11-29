/**
 * https://github.com/webpack/style-loader
 * https://github.com/webpack/css-loader
 */
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
