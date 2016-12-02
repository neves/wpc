const fs = require('fs')

module.exports = {
  resolveLoader: {
    /**
     * Use the already computed module.paths (node_modules recursive to root /node_modules)
     * .config/yarn/global/node_modules/vwp/node_modules/wpc/node_modules
     * .config/yarn/global/node_modules/vwp/node_modules
     * .config/yarn/global/node_modules
     * filter only folders that exists
     */
    modules: module.paths.filter(fs.existsSync)
  }
}
