var http = require('http');
urls = ['shapeshed.com','www.bbc.co.uk','edition.cnn.com'];
function fetchPage(url){
    var start = new Date();
    http.get({host:url},function(res){
        console.log("got res from"+url);
        console.log("req" ,new Date()-start,'ms');
    });
}
for(var i = 0 ; i<urls.length;i++){
    fetchPage(urls[i]);
}