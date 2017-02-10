// this is not NODE_ENV nor process.env, but env attributes from command line
module.exports = ({env, argv}) => {
  // --env.hash always has precedence over -p
  let hash = env.hash === undefined ? (argv.p ? 7 : 0)
                                    : (isNaN(parseInt(env.hash)) ? 7 : parseInt(env.hash))
  return {
    env: {
      js:   env.js   || (hash ? `[name].[chunkhash:${hash}].js`     : '[name].js'),
      css:  env.css  || (hash ? `[name].[contenthash:${hash}].css`  : '[name].css'),
      font: env.font || (hash ? `fonts/[name].[hash:${hash}].[ext]` : 'fonts/[name].[ext]'),
      img:  env.img  || (hash ? `img/[name].[hash:${hash}].[ext]`   : 'img/[name].[ext]')
    }
  }
}
