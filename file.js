// var fs = require('fs');
// fs.readFile('somefile.txt','utf-8',function(err,data){
//     if(err) throw err;
//     console.log(data);
// })

var fs = require('fs');
data = "something is hahah!"
fs.writeFile('somefile1.txt',data,function(err){
    if(!err){
        console.log('write successful');
    }else{
        throw err;
    }
})