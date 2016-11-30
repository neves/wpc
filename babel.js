module.exports = ({env}) => ({
  packages: ['babel-loader@^6.2.8', 'babel-core@^6.18.2'],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        },
        include: [env.src]
      }
    ]
  }
})
