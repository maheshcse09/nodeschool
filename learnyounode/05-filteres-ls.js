const fs = require('fs');
const path = require('path');
const dirPath = process.argv[2];
const fileExt = process.argv[3];

fs.readdir(dirPath, function(err, fileList) {
    if (err) {
        console.log(err);
    }

    var filteredList = fileList.filter(function(file) {
        return path.extname(file) === '.' + fileExt;
    });

    filteredList.forEach(function(file) {
        console.log(file);
    });

});
