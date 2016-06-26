//================================================
// require
//================================================
var plg = require('../plugin'),
	config = require('../config').copy;

//================================================
// task
//================================================
plg.gulp.task(config.name, function(){
	plg.gulp.src([config.input, config.reject])
		.pipe(plg.gulp.dest(config.output));
});