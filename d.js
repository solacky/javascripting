var my = require('./mymodule.js')
var dir = process.argv[2]
var ext = process.argv[3] ;


function callback(err, data) {
	
	if (err) {
		return console.error('There was an error: ',err)
	} 

	var results = ''

	data.forEach( function (file) {
		console.log(file)
	})
}

my(dir, ext, callback) 