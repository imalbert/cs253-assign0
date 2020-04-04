// const fs = require('fs')
// const str = fs.readFileSync(process.argv[2]).toString()
// console.log(str.split('\n').length - 1)
console.log(require('fs').readFileSync(process.argv[2], 'utf-8').split('\n').length - 1)
