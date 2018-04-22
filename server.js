// var http = require('http');

// http.createServer(function (request, response) {

//     // 发送 HTTP 头部 
//     // HTTP 状态值: 200 : OK
//     // 内容类型: text/plain
//     response.writeHead(200, {'Content-Type': 'text/plain'});

//     // 发送响应数据 "Hello World"
//     response.end('Hello World!!!\n');
// }).listen(3001,"127.0.0.1");

// // 终端打印如下信息
// console.log('Server running at http://127.0.0.1:3001/');


// var http = require('http');
// var url = require('url');

// http.createServer(function (req, response) {
//     var pathname = url.parse(req.url).pathname;
//     if(pathname==='/'){
//         response.writeHead(200, {'Content-Type': 'text/plain'});
//         response.end('Hello World!!!\n');
//     } else if (pathname === '/about'){
//         response.writeHead(200, {'Content-Type': 'text/plain'});
//         response.end('about us\n');
//     } else if (pathname === '/redirect'){
//         response.writeHead(301, {'Location': 'http://www.baidu.com'});
//         response.end();
//     } else {
//         response.writeHead(404, {'Content-Type': 'text/plain'});
//         response.end('page not found\n');
//     }
// }).listen(3004,"127.0.0.1");

// // 终端打印如下信息
// console.log('Server running at http://127.0.0.1:3004/');


var http = require('http');
var options ={
    host:'baidu.com',
    port:80,
    path:'/'
}

http.get(options,function(res){
    if(res.statusCode == 200){
        console.log("is up!")
    }else{
        console.log("is down!")
    }
}).on('error',function(e){
    console.log("err is"+e.message)
});