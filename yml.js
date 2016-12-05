module.exports = {
  packages: ['yml-loader@^1.1.0'],
  module: {
    rules: [
      {
        test: /\.yml$/,
        loader: 'yml-loader'
      }
    ]
  }
}
