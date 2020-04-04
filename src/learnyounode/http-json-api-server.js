var http = require('http')
var url = require('url')
var port = process.argv[2]
var server = http.createServer(function(req, res) {
	res.writeHead(200, { 'Content-Type': 'application/json' });
	if(req.method != 'GET') { return res.end('send me a GET\n'); }

	var _urlObj = url.parse(req.url, true)
	var _path = _urlObj.pathname
	var _originTime = _urlObj.query.iso
	var _date
	var _result

	if(!_originTime) {
		return res.end('no query string \'iso\'\n');
	}

	_date = new Date(_originTime);

	if(_path === '/api/parsetime') {
		_result = JSON.stringify({
			hour: _date.getHours(),
			minute: _date.getMinutes(),
			second: _date.getSeconds()
		});
	} else if(_path === '/api/unixtime') {
		_result = JSON.stringify({ unixtime: _date.getTime() });
	} else {
		_result = 'illegal request path!\n';
	}
	return res.end(_result);
});
server.listen(port);
