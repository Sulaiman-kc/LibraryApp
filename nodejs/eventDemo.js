// var events=require('events');
// var eventEmitter=new events.EventEmitter();
// function ringBell()
// {
//     console.log('ring ring ring');

// }
// eventEmitter.on('doorOpen',ringBell);
// eventEmitter.emit('doorOpen');

// var EventEmitter=require('events');
// var emitter=new EventEmitter();
// var eventFunction=function(){
//     console.log("My event occured")
// }
// emitter.on("myevent",eventFunction);
// emitter.emit("myevent");

// var EventEmitter=require('events');
// var emitter=new EventEmitter();
// emitter.on("myevent",(arg1)=>{
//     console.log("id is"+arg1.id + "name is" +arg1.name)
// });
// emitter.emit("myevent",{id:7,name:"ash"});

// var EventEmitter=require('events');
// var emitter=new EventEmitter();
// emitter.emit("myevent");

var EventEmitter=require('events');
var emitter=new EventEmitter();
emitter.once("error",(err)=>{
        console.error(err+"there was an error")
     });

emitter.emit("error","whoops!!");
