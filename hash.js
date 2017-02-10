// converts hash filename like:
//   fonts/[name].[hash:7].[ext] (in distribution)
// into:
//   fonts/[name].[ext] (in build)
module.exports = name => {
  if (process.env.NODE_ENV === 'production') {
    return name
  } else {
    return name.replace(/\[(\w+)?hash(:\d)?\]\./, '')
  }
}
