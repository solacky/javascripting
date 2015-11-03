var fs = require('fs')
var path = require('path')

module.exports = function (paths, ext, callback) {

	function read (a, cb) {
		fs.readdir(a, cb) 		
	} 

	read(paths,cb)

	function cb(err, data ) {
		if (err)
			return callback(err)

		return callback(data.map(myfilter))
	}

	function myfilter(file) {
		return path.extname(file) ===  '.'+ext
	}

	

}

