const fs = require('fs');
const fileName = process.argv[2];

fs.readFile(fileName, function(err, fileData) {
    if (err) {
        console.log(err);
    }

    var lines = fileData.toString().split('\n');
    console.log(lines.length - 1);
});
