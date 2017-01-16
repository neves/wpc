// NOT REQUIRED ANYMORE: https://webpack.js.org/guides/migrating/#json-loader-is-not-required-anymore
module.exports = {
  packages: ['json-loader@^0.5.4'],
  module: {
    rules: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.json']
  }
}
