//================================================
// require
//================================================
var $ = require('../plugin'),
	config = require('../config').js;


//================================================
// task
//================================================
$.gulp.task(config.name, function(){
	$.gulp.src(config.base.src + config.input)
		.pipe($.plumber())
		.pipe($.gulp.dest(config.output));
});