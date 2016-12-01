/**
 * Needed only when installed globally (yarn global add or npm install -g)
 * Add the global node_modules path to resolvers
 */
var globals = (process.env.NODE_PATH || '').split(":")

module.exports = {
  resolve: {
    modules: globals
  },
  resolveLoader: {
    modules: globals
  }
}
