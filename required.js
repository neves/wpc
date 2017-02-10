module.exports = ({env}) => ({
  context: process.cwd(),
  entry: './main.js',
  output: {
    filename: env.js
  },
  resolve: {
    modules: ['node_modules'], // project local node_modules
    extensions: ['.js']
  }
})
