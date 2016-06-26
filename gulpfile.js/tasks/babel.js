//================================================
// require
//================================================
var plg = require('../plugin'),
	config = require('../config').babel;


//================================================
// task
//================================================
plg.gulp.task(config.name, function(){
	plg.gulp.src([config.input, config.reject])
		.pipe(plg.plumber())
		.pipe(plg.babel(config.opt))
		.pipe(plg.gulp.dest(config.output));
});