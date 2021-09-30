var express = require('express');
var app = express();
var router = express.Router();
const checkUrl=require('./middleware');
// const checkUrl=function(req,res,next){
//     console.log("Current url is "+req.originalUrl);
//     next();
// }
app.get('/about',function(req,res){
    res.send('Inside about page');
})
router.get('/login',checkUrl,function(req,res){
    res.send('inside get method of login');
})
app.post('/login',function(req,res){
    res.send('inside post method of login');
})
app.use('/',router);

app.listen(5000);