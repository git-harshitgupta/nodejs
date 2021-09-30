const mongo = require('mongoose');
const express = require('express');
const app=express();
const user = require('../models/users')
mongo.connect('mongodb+srv://Shadow:12345@harshit.mcjaj.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

app.get('/users',function(req,res){
    user.find().select('name').then((data)=>{//to fetch all data just remove select()
         res./*status(201).*/json(data); //to change status of the json
    })
})

app.listen(5000);