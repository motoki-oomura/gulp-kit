//================================================
// require
//================================================
var $ = require('../plugin'),
	config = require('../config').ts;


//================================================
// task
//================================================
$.gulp.task(config.name, function(){
	$.gulp.src(config.input)
		.pipe($.ts(config.opt))
		.pipe($.webpack(config.webpack))
		.pipe($.gulp.dest(config.output));
});

