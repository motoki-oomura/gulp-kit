//================================================
// require
//================================================
var $ = require('../plugin'),
	config = require('../config').zip;

//================================================
// task
//================================================
$.gulp.task('zip', function(){
	$.gulp.src(config.input, config.opt)
		.pipe($.zip(config.zipName))
		.pipe($.gulp.dest(config.output));
});
