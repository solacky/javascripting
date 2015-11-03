var fs = require('fs')
var path = require('path')

var callback = function ( callback ) {
	foo(function (err, data) {
		if (err) {
			return callback(err)
		}
		callback(null,data)
	})
	if (err) {
		return ca
	}

	if (!err) {
		for ( var i=0;i<list.length;i++) {
			if (!ext) { 
				console.log(list[i])
			} else {
				if (path.extname(list[i]) ===  '.'+ext) 
					console.log(list[i])
			}
		}
	}
}


fs.readdir( paths, function )

var myfunc (paths,ext) {

} 

