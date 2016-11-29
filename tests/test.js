const webpack = require('webpack')
const MemoryFS = require('memory-fs')
const WebpackOptionsDefaulter = require('webpack/lib/WebpackOptionsDefaulter')
const merge = require('webpack-merge-plus')
const resolve = require('path').resolve

var options = {
  entry: './index.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}

const style = {
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: ['style-loader']
      }
    ]
  }
}

const css = {
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: ['css-loader']
      }
    ]
  }
}

options = merge(options, style, css)


// new WebpackOptionsDefaulter().process(options)
console.log(JSON.stringify(options, null, 2))

var fs = new MemoryFS()
var compiler = webpack(options)
// compiler.outputFileSystem = fs
compiler.run( (err, stats) => {
  if (err) {
    throw err
  } else {
    // console.log(stats)
    // console.log(fs.readFileSync('/bundle.js').toString())
  }
})
