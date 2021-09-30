var nodemailer=require('nodemailer')
var transport=nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    auth:{
        user:'shadowharshit@gmail.com',
        pass:'Harshit@10'
    }
});
var mailoption={
    from:'shadowharshit@gmail.com',
    to:'shadowharshit@gmail.com',
    subject:'test node mail',
    text:'Hello'
}

transport.sendMail(mailoption,function(error,info){
    if(error){
        console.log(error);
    }
    else{
        console.log("email has send",info.response);
    }
})