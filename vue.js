module.exports = {
  packages: ['vue-loader@^10.0.1', 'vue-template-compiler@2.1.3'],
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
