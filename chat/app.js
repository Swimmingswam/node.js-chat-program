// //var app = module.exports = express.createServer(),
// var app = require('express').createServer(),
//     io = require('socket.io').listen(app);

// app.listen(1111);

// app.get('/',function(req,res){

//     res.sendfile('/index.html', {root: __dirname});
//     //var root = options.root ? normalize(options.root) : null
//     //var path = normalize(join(root, path));
//     //res.sendfile(path.join(__dirname, 'index.html'));

// });

// io.sockets.on('connection',function(socket){
//     socket.emit('welcome',{text:'hello world!'})
// })

var http = require('http');
var express = require('express'),
    app = module.exports.app = express();

var server = http.createServer(app);
var io = require('socket.io').listen(server);  //pass a http.Server instance
server.listen(1111);  //listen on port 3000
var nicknames = [];

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function (socket) {
    socket.on('nickname', function (data, callback) {
        if (nicknames.indexOf(data) != -1) {
            callback(false);
        } else {
            callback(true);
            nicknames.push(data);
            socket.nickname = data;
            console.log('nicknames are ' + nicknames);
            io.sockets.emit('nicknames',nicknames);
        }
    });
    socket.on('disconnect', function () {
        if (!socket.nickname) return;
        if (nicknames.indexOf(socket.nickname) > -1) {
            nicknames.splice(nicknames.indexOf(socket.nickname), 1)
        }
        console.log('nicknames are ' + nicknames);
        io.sockets.emit("nicknames",nicknames);
    });
    socket.on('user_message',function(data){
        io.sockets.emit('user_message',{
            nick:socket.nickname,
            message:data
        });
    });

});
