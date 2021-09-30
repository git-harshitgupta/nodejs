var http = require('http');
var data = [{
    "name":"Harshit",
    "age":"18",
    "email":"anil@test.com"
},
{
    "name":"shivendra",
    "age":"18",
    "email":"anil@test.com"
}

]
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'application\json'})
    res.write(JSON.stringify(data));
    res.end();
}).listen(5000)