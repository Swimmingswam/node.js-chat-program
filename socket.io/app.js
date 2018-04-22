// var http = require('http');
// var fs = require('fs');
// var server = http.createServer(function(req,res){
//     fs.readFile('./index.html',function(error,data){
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.end(data,'utf-8');
//     });
// }).listen(1000,"127.0.0.1");
// console.log('run http://127.0.0.1:1000');
// var io = require('socket.io').listen(server);
// io.sockets.on('connection',function(socket){
//     console.log('user-connect');
//     socket.on('disconnect',function(){
//         console.log('user-disconnect');
//     });
// });

//计数器
// var http = require('http');
// var fs = require('fs');
// var count = 0

// var server = http.createServer(function(req,res){
//     fs.readFile('./index.html',function(error,data){
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.end(data,'utf-8');
//     });
// }).listen(1000,"127.0.0.1");
// console.log('run http://127.0.0.1:1000');

// var io = require('socket.io').listen(server);

// io.sockets.on('connection',function(socket){
//     count++;
//     console.log('user-connect.' + count + 'users present');
//     socket.emit('users',{number:count});
//     socket.broadcast.emit('users',{number:count});
//     socket.on('disconnect',function(){
//         count--;
//         console.log('user-disconnect.' + count + 'users present');
//         socket.broadcast.emit('users',{number:count});
//     });
// });

//客户间发送消息
var http = require('http');
var fs = require('fs');
var count = 0

var server = http.createServer(function(req,res){
    fs.readFile('./index.html',function(error,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(data,'utf-8');
    });
}).listen(1000,"127.0.0.1");
console.log('run http://127.0.0.1:1000');

var io = require('socket.io').listen(server);

io.sockets.on('connection',function(socket){
    
    socket.on('message',function(data){
        socket.emit('push message',data);
        socket.broadcast.emit('push message',data);
    });
});