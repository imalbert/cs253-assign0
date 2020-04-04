const mymodule = require('./mymodule.js')

function callback (err, data) {
  if (err) return console.log('There was an error:', err)

  data.forEach(filename => console.log(filename))
}

mymodule(process.argv[2], process.argv[3], callback)
