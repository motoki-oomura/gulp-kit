//================================================
// require
//================================================
var plg = require('../plugin'),
	config = require('../config').ejs;


//================================================
// task
//================================================
plg.gulp.task(config.name, function(){
	plg.gulp.src([config.input, config.reject])
		.pipe(plg.plumber())
		.pipe(plg.ejs())
		.pipe(plg.rename(config.rename))
		.pipe(plg.gulp.dest(config.output));
});