var fs = require('fs')
var path = require('path')
var paths =  process.argv[2]
var ext = ''
if (process.argv[3]) {
	ext = process.argv[3]
}

fs.readdir( paths, function ( err, list ) {
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
})