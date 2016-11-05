const http = require('http');
const fs = require('fs');
const portNumber = process.argv[2];
const filePath = process.argv[3];

var server = http.createServer(function(req, res) {
    fs.createReadStream(filePath).pipe(res);
});

server.listen(portNumber);
