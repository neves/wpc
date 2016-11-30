module.exports = {
  isString(val) {
    return typeof val == 'string'
  },

  isArray(val) {
    return Array.isArray(val)
  },

  stringify (plugins) {
    return
  },

  clone (object) {
    return JSON.parse(JSON.stringify(object, replacer))
  },
}

function replacer (key, value) {
  if (key === 'plugins') {
    return value.map(v => v.toString())
  }

  if (value instanceof RegExp) {
    return value.toString()
  }

  return value
}
