console.log("==========> starting8888...");
var http = require('http');
var fs = require('fs');
var path = require('path');
var ext = /[\w\d_-]+\.[\w\d]+$/;

http.createServer(function(req, res){
    if (req.url === '/') {
		console.log("Loading 200 index.html");
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream('index.html').pipe(res);
    } else {
        //  add a RESTful service
		console.log("You need add a RESTful service");
    }
}).listen(5000);

