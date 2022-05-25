
var http = require('http');
var url  = require('url');
var fs   = require('fs');

var neededstats = [];

http.createServer(function(req, res) {
    if (req.url == '/index.html' || req.url == '/') {
        fs.readFile('./index.html', function(err, data) {
            res.end(data);
        });
    } else if (req.url == '/about.html') {
        fs.readFile('./about.html', function(err, data) {
            res.end(data);
        });
    }else if (req.url == '/contact.html') {
        fs.readFile('./contact.html', function(err, data) {
            res.end(data);
        });
    }else {
        fs.readFile('./404.html', function(err, data) {
            res.end(data);
        });
    }
}).listen(8080, '0.0.0.0');
console.log('Server running.');