const http = require('http');
const url = process.argv[2];

http.get(url, function(response) {
    response.setEncoding('utf8');
    response.on('error', function(err) {
        console.log(err);
    })
    var allData = '';
    response.on('data', function(data) {
        allData += data;
    });
    response.on('end', function() {
        console.log(allData.length);
        console.log(allData);
    });
});
