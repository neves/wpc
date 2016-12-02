const HtmlWebpackPlugin = require('html-webpack-plugin')
const resolve = require('path').resolve
const fs = require('fs')

function localOrGlobalHtmlTemplate (src) {
  var local = resolve(src, 'index.html')
  return fs.existsSync(local) ? local : resolve(__dirname, 'index.html')
}

module.exports = ({env}) => ({
  packages: ['html-webpack-plugin@^2.24.1'],
  plugins: [
    new HtmlWebpackPlugin({
      template: localOrGlobalHtmlTemplate(env.src)
    })
  ]
})
