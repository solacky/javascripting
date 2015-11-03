var fs = require('fs');
var file = process.argv[2];
var len = 0;

var callback = function (err, data) {

	if (err) {
		return console.log(len);
	};

	len = data.split('\n').length-1;

	return console.log(len);

};

fs.readFile(file,'utf8', callback);

