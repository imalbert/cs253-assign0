const http = require('http')
const bl = require('bl')

let urls = process.argv.slice(2)
let count = 0

function getUrl(url) {
	http.get(url, function (response) {
		response.pipe(bl(function (err, data) {
			if (err) return console.error(err)
			str = data.toString()
		}))

		response.on('end', function (err, data) {
			console.log(str)
			if (count < urls.length - 1) {
				count++
				getUrl(urls[count])
			}
		})
	})
}

getUrl(urls[count])

