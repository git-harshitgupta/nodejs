var fs = require('fs');
var event = require('events');
var rs = fs.createReadStream('./demo.txt');
rs.on('open',function(){
    console.log('file is open');
})

var eventEmitter = new event.EventEmitter();
eventEmitter.on('speak',function(name){
    console.log(name+" is speaking");
})

eventEmitter.emit('speak','Peter');