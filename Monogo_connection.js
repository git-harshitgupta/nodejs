const express = require('express');
const app = express();
const mongo = require('mongoose')
const users = require('./models/users');
mongo.connect('mongodb+srv://Shadow:12345@harshit.mcjaj.mongodb.net/test?retryWrites=true&w=majority',
{
    useNewUrlParser:true,
    useUnifiedTopology:true
}
);

users.find({},function(err,data){
    if(err){
        console.log(err)
    }
    console.log(data);
})

const data = new users({
    _id : new mongo.Types.ObjectId,
    name:'Akash',
    email:'akash@test.com',
    addreas:'Durg'
});

data.save().then((result)=>{
    console.log(result);
}).catch(err=>console.log(err));


