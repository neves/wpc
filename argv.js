// copy configs from argv to webpack-config
module.exports = ({argv:{context, devtool, entry, output} = {}}) => ({
  context,
  devtool,
  entry,
  output
})
