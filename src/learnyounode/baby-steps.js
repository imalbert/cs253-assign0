console.log(process.argv.slice(2).reduce(function (sum, arg) { return sum + Number(arg) }, 0))
