var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/download', function (req, res, next) {
    // var filePath = path.join(__dirname, './file');
    var fileName = 'CV-FE-Guo-Jiawei.pdf';

    var filePath = path.join('./file', fileName);
    console.log(filePath);
    res.download(filePath);
});

var server = app.listen(3000, function () {
    var host = server.address().address,
        port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
