// https://webpack.js.org/configuration/dev-server/
// hot hotOnly lazy host filename publicPath port socket watchOptions headers clientLogLevel key cert ca pfx pfxPassphrase inline public https contentBase watchContentBase open features compress proxy historyApiFallback staticOptions setup stats reporter noInfo quiet serverSideRender index log warn
const schema = require('webpack-dev-server/lib/optionsSchema.json')

module.exports = ({argv}) => {
  const keys = Object.keys(schema.properties)
  var devServer = {}
  keys.map(k => argv[k] && (devServer[k] = argv[k]) )
  return {devServer}
}
