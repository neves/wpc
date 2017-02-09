#!/usr/bin/env node

// Alternative: https://github.com/jprichardson/node-kexec (unix only)

const path = require('path')
const fs = require( 'fs')

const cmd = process.argv[2]
const args = process.argv.slice(3)
args.push('--progress')
var webpack
var env = process.env.NODE_ENV

switch (cmd) {
  case 'build':
    webpack = 'webpack'
    env = env || 'production'
    break

  case 'dist':
    webpack = 'webpack'
    env = env || 'production'
    args.push('-p')
    break

  case 'dev':
  case 'start':
    webpack = 'webpack-dev-server'
    env = env || 'development'
    args.push('--hot')
    break

  case '--version':
  case '-v':
    console.log(require('../package.json').version)
    process.exit(1)
    return

  default:
    console.log('missing command: build, dev or dist')
    process.exit(1)
}

function isValidNodeModules(nodeModulePath) {
  return path.basename(nodeModulePath) === 'node_modules' && fs.existsSync(nodeModulePath)
}

var nodePath = [
  path.resolve(process.cwd(), 'node_modules'), // local project
  path.resolve(__dirname, '../node_modules'), // wpc
  path.resolve(__dirname, '../..') // global
].filter(isValidNodeModules).join(path.delimiter)

if (process.env.NODE_PATH) {
  nodePath += path.delimiter + process.env.NODE_PATH
}

const run = `NODE_ENV=${env} NODE_PATH=${nodePath} ${webpack} ${args.join(' ')}`

console.log(run)
