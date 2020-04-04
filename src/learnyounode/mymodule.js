module.exports = function (dirPath, ext, callback) {
  return require('fs').readdir(dirPath, (err, data) => {
    if (err) { return callback(err) }
    const filtered = data.filter(file => require('path').extname(file).includes(ext))
    callback(null, filtered)
  })
}
