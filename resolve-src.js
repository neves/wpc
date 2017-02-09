// Add project src to search path
module.exports = ({env}) => {
  return {
    resolve: {
      modules: [env.src]
    }
  }
}
