var http = require('http');
var url = require('url');

var portNumber = process.argv[2];

var jsonServer = http.createServer(function(req, res) {
    if (req.method === 'GET') {
        var params = url.parse(req.url, true);
        var date = new Date(params.query.iso);
        var result;

        if (params.pathname === '/api/parsetime') {
            result = {
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds()
            };
        }

        if (params.pathname === '/api/unixtime') {
            result = {
                unixtime: date.getTime()
            };
        }
        if (result) {
            res.writeHead(200, {
                'Content-Type': 'application/json'
            })
            res.end(JSON.stringify(result));
        } else {
            res.writeHead(404);
            res.end();
        }

    }
}).listen(portNumber);
