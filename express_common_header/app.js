const express = require('express');
const app = express();
var bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/assets',express.static('assets'))
app.set('view engine','ejs');
app.get('/profile/:name',function(req,res){
    console.log(req.params)
    data={email:'test@test.com',
            address:'Durg',
            skills:['node','react','java']
    }
    res.render('Profile',{name:req.params.name,data:data})
})
app.get('/login',function(req,res){
    console.log('in get method');
    console.log("get "+req.query.email);
    res.render('Login');
})
app.post('/login',function(req,res){
    console.log('in post method');
    console.log(req.body.email);
    res.redirect('/login');
})
app.get('/',function(req,res){
    res.render('Home');
})
app.listen(5000);