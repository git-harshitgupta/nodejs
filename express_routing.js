var express = require('express');
var app = express();
app.get('/',function(req,res){
    res.send('Inside home page')
})
app.get('/about',function(req,res){
    res.send('Inside about page');
})
app.get('/login',function(req,res){
    res.send('inside get method of login');
})
app.post('/login',function(req,res){
    res.send('inside post method of login');
})

app.listen(5000);