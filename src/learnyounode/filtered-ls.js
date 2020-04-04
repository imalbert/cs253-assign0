const dirPath = process.argv[2]
const ext = process.argv[3]

require('fs').readdir(dirPath, (err, list) => {
  list
    .filter(filename => filename.includes('.' + ext))
    .forEach(filename => {
      console.log(filename)
    })
})
