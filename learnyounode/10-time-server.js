const net = require('net');
const portNumber = process.argv[2];

var server = net.createServer(function(socket) {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hours = date.getHours();
    var min = date.getMinutes();

    function zeroPadd(obj) {
        return obj < 9 ? '0' + obj : obj;
    }

    var date0 = year + '-' + zeroPadd(month) + '-' + zeroPadd(day) + ' ' + zeroPadd(hours) + ':' + zeroPadd(min);
    socket.write(date0 + '\n');
    socket.end("");
})

server.listen(portNumber);
