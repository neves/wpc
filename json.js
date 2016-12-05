module.exports = {
  dependencies: ['json-loader@^0.5.4'],
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
