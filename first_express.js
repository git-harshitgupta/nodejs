const expree = require('express');
const app = expree();
app.get('/',function(req,res){
    res.send("Hello express js");
}).listen(5000);