module.exports = {
  context: process.cwd(),
  entry: 'main.js',
  output: {
    filename: '[name].js'
  },
  resolve: {
    modules: ['node_modules'], // project local node_modules
    extensions: ['.js']
  }
}
