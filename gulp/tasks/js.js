//================================================
// require
//================================================
var plg = require('../plugin'),
	config = require('../config').js;


//================================================
// task
//================================================
plg.gulp.task(config.name, function(){
	plg.gulp.src(config.base.src + config.input)
		.pipe(plg.plumber())
		.pipe(plg.gulp.dest(config.output));
});