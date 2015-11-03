var http = require('http')
var url = process.argv[2]

http.get(url,function(res){
	//console.log("Got response: " + res.statusCode);
	res.setEncoding('utf8');
	res.on('data',function(chunk){
		console.log(chunk);
	});
	res.on('err', console.error)
})