module.exports = ({devtool}) => {
  var sourceMap = `?sourceMap=${!!devtool}`
  return {
    packages: ['vue-loader@^10.0.1', 'vue-template-compiler@2.1.4'],
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loaders: {
              pug: 'pug-loader',
              css: `style-loader!css-loader${sourceMap}`,
              stylus: `style-loader!css-loader${sourceMap}!stylus-loader${sourceMap}`,
              less: `style-loader!css-loader${sourceMap}!less-loader${sourceMap}`,
              scss: `style-loader!css-loader${sourceMap}!sass-loader${sourceMap}`,
              sass: `style-loader!css-loader${sourceMap}!sass-loader${sourceMap}&indentedSyntax=true`
            }
          }
        }
      ]
    },
    resolve: {
      extensions: ['.vue']
    }
  }
}
