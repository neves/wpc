/**
 * https://github.com/webpack/style-loader
 * https://github.com/webpack/css-loader
 */
module.exports = ({devtool}) => ({
  packages: ['css-loader@^0.26.1', 'style-loader@^0.13.1'],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            query: {
              sourceMap: !!devtool
            }
          }
        ]
      }
    ]
  }
})
