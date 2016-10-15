//================================================
// require
//================================================
var $ = require('../plugin'),
	config = require('../config').copy;

//================================================
// task
//================================================
$.gulp.task(config.name, function(){
	$.gulp.src([config.input, config.rejectJs, config.rejectSass])
		.pipe($.gulp.dest(config.output));
});