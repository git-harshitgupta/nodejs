var mysql = require('mysql')
var con= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'12345',
    database:'test'

});
con.connect(function(err){
    if(err)
    throw err;
    con.query("select * from books",function(err,result){
        if(err)
    throw err;
    console.log(result);
    })

})