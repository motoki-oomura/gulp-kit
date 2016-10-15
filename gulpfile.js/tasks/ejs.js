//================================================
// require
//================================================
var $ = require('../plugin'),
	config = require('../config').ejs;


//================================================
// task
//================================================
$.gulp.task(config.name, function(){
	$.gulp.src([config.input, config.reject])
		.pipe($.plumber())
		.pipe($.ejs())
		.pipe($.rename(config.rename))
		.pipe($.gulp.dest(config.output));
});