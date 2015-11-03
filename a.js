var args = process.argv;

var len = args.length;
var result = 0;

if (len<3) {
	return console.log(result);
};

for (var i=2;i<len;i++) {
	result += Number(args[i]);

};

return console.log(result);
