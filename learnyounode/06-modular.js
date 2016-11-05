const filter = require('./06a-file-filter');

const dirName = process.argv[2];
const fileExt = process.argv[3];

filter(dirName, fileExt, function(err, list) {
    if (err) {
        console.log(err);
    }

    list.forEach(function(file) {
        console.log(file);
    });
});
