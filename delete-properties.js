module.exports = conf => {
  delete conf.packages
  delete conf.env
  delete conf.argv
}
