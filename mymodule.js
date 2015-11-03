var fs = require('fs')
var path = require('path')

module.exports = function (dir, ext, callback) {

	//console.log('-->'+ext)

	fs.readdir(dir, function cb(err, data ) {
		if (err)
			return callback(err)

		data = data.filter(function (file) {
			return path.extname(file) ===  (ext?'.'+ext:'')	
		})
		
		callback( null, data)
	})		
	
}

