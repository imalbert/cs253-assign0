const strftime = require('strftime')
const net = require('net')
const port = process.argv[2]
const server = net.createServer(function (socket) {
	// "YYYY-MM-DD hh:mm"
	const fmt = "%F %H:%M"
	const date = new Date()
	socket.end(strftime(fmt, date) + '\n')
})
server.listen(port)
