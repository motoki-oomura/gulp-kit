//================================================
// require
//================================================
var plg = require('../plugin'),
	config = require('../config').sass;


//================================================
// task
//================================================

plg.gulp.task(config.name, function(){
	plg.gulp.src([config.input, config.reject])
		.pipe(plg.plumber())
		.pipe(plg.sass(config.opt))
		.pipe(plg.gulp.dest(config.base.build + config.output));
});