// const fs=require('fs');

// const file= fs.readdir('./',function(err,file){
//     if (err){
//     console.log('error'+ err);
// }
//     else{
//         console.log(file);
//     }
// });

// ..........Write Async........
// fs.writeFile('new.txt',function(e,f){
//     if (error){
//         console.log('error'+e);
//     }
//     else{
//         console.log('f');
//     }
// });

// ..........create server..........
var http=require('http');

http.createServer(function(req,res){
    res.write('hello world');
    res.end();

}).listen(8080);