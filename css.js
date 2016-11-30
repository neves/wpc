/**
 * https://github.com/webpack/style-loader
 * https://github.com/webpack/css-loader
 */
module.exports = {
  packages: ['css-loader@^0.26.0', 'style-loader@^0.13.1'],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
