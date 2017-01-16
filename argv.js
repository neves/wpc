// copy from argv to config
module.exports = ({argv:{context, devtool, entry, output, debug} = {}}) => ({
  context,
  devtool,
  entry,
  output,
  debug
})
