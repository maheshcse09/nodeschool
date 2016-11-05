const fs = require('fs');
const path = require('path');

module.exports = function(dirName, fileExt, callback) {
    fs.readdir(dirName, function(err, fileList) {
        if (err) {
            return callback(err);
        }

        var filteredList = fileList.filter(function(file) {
            return path.extname(file) === '.' + fileExt;
        });

        callback(null, filteredList);

    });
}
