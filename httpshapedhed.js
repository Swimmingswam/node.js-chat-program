var http = require('http');
http.get({host:'baidu.com'},function(res){      //后返回    （异步）
    console.log('res'+res.statusCode);
}).on('error',function(e){
    console.log("error"+e.message);
})


var fs = require('fs'); 
fs.readFile('somefile.txt','utf-8',function(err,data){            //先返回
    if(err) throw err;
    console.log(data);
})