const mongo = require('mongoose');
const express = require('express');
const app=express();
const user = require('../models/users')
const bodyParsar = require('body-parser');



app.use(bodyParsar.urlencoded({extended:false}));
app.use(bodyParsar.json())
mongo.connect('mongodb+srv://Shadow:12345@harshit.mcjaj.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

app.post('/user',function(req,res) {
    const data=new user({
        _id:new mongo.Types.ObjectId(),
        name:req.body.name,
        email:req.body.email,
        addreas:req.body.address
    })
    data.save().then((result)=>{
        console.log(result);
        res.send(req.body);
    })
    
})

app.listen(5000);
