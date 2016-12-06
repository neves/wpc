module.exports = {
  context: process.cwd(),
  entry: 'main.js',
  output: {
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js']
  }
}
