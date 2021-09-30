const express = require('express');
const app = express();

app.set('view engine','ejs');
app.get('/profile/:name',function(req,res){
    console.log(req.params)
    data={email:'test@test.com',
            address:'Durg',
            skills:['node','react','java']
    }
    res.render('Profile',{name:req.params.name,data:data})
})

app.listen(5000);