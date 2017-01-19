module.exports = {
  packages: ['url-loader@^0.5.7', 'file-loader@^0.9.0'],
  module: {
    rules: [
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          name: 'fonts/[name].[ext]',
          limit: 2048
        }
      }
    ]
  }
}
