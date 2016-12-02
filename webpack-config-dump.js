// TODO move to it's own package
render = require('prettyjson').render
// inspect = require('util').inspect

function format (data) {
  return render(data, {
    keysColor: 'cyan',
    dashColor: 'magenta',
    stringColor: 'gray'
  })
}

function replacer(k, v) {
  return v instanceof RegExp ? v.toString() : v
}

function pluginToObject (plugin) {
  return {
    [plugin.__proto__.constructor.name]: plugin
  }
}

function translate (data) {
  json = JSON.parse( JSON.stringify(data, replacer) )
  json.plugins = data.plugins.map(plugin => pluginToObject(plugin))
  return json
}

module.exports = function (config) {
  config = translate(config)
  console.log( format(config) )
}
