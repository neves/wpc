module.exports = {
  packages: ['coffee-script@^1.11.1', 'coffee-loader@^0.7.2'],
  module: {
    rules: [
      {
        test: /\.coffee$/,
        loader: 'coffee-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.coffee'] // remember to add .js using required.js
  }
}
