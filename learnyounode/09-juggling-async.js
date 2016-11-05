const http = require('http');
var urls = [];
var urlData = [];
var count = 0;

for (var i = 2; i < process.argv.length; i++) {
    urls[i - 2] = process.argv[i];
}

urls.forEach(function(url, index) {
    http.get(url, function(response) {
        response.setEncoding('utf8');
        response.on('error', function(err) {
            console.log(err);
        });
        allData = '';
        response.on('data', function(data) {
            allData += data;
        });
        response.on('end', function() {
            urlData[index] = allData;
            count++;

            if (count === urls.length) {
                urlData.forEach(function(data) {
                    console.log(data);
                });
            }
        });
    });
});
