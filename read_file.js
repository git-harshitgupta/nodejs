var http = require('http');
var fs = require('fs');
const { RSA_NO_PADDING } = require('constants');

http.createServer(function(req,res){
    fs.readFile('demo.html',function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end();
    })
}).listen(5000);