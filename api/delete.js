const mongo = require('mongoose');
const express = require('express');
const app=express();
const user = require('../models/users')


mongo.connect('mongodb+srv://Shadow:12345@harshit.mcjaj.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

app.delete('/user/:id',function(req,res){
    user.deleteOne({
        _id:req.params.id
    }).then((result)=>{
        res.json(result);
    })
})

app.listen(5000);