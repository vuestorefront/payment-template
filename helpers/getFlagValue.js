module.exports = (flag) => {
  const flagIndex = process.argv.findIndex((argument) => argument === flag)
  return flagIndex > 0 ? process.argv[flagIndex + 1] : false
}
