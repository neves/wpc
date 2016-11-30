module.exports = {
  packages: ['vue-loader@^10.0.1'],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.vue']
  }
}
