const Path = require('path')

// must be absolute path to node_modules
var nodeModules = [
  Path.resolve(__dirname, 'node_modules'),
  Path.dirname(__dirname)
].filter(module => module.endsWith(Path.sep + 'node_modules'))

module.exports = {
  resolveLoader: {
    modules: nodeModules
  }
}
