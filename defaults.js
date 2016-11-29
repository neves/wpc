const WebpackOptionsDefaulter = require('webpack/lib/WebpackOptionsDefaulter')
var config = {}
new WebpackOptionsDefaulter().process(config)
module.exports = config
