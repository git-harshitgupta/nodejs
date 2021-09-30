var http = require('http');
http.createServer(function(req,res){
    res.write("Hello from node js sever");
    res.end();
}).listen(5000);