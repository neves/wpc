module.exports = ({env}) => ({
  packages: ['url-loader@^0.5.7', 'file-loader@^0.9.0'],
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          name: env.img,
          limit: 1024
        }
      }
    ]
  }
})
