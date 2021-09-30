const express = require('express');
const mongo = require('mongoose');
const user = require('../models/users');
const app = express();
const bodyParsar = require('body-parser');

mongo.connect('mongodb+srv://Shadow:12345@harshit.mcjaj.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

app.use(bodyParsar.urlencoded({extended:false}))
app.use(bodyParsar.json())

app.put('/user_update/:id',function(req,res){
    user.updateOne({
        _id:req.params.id
    },
    {
        $set:{
            name:req.body.name
        }
    }).then((result)=>{
        res.send(result);
    })
})

app.listen(5000);