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
		.pipe(plg.if(config.dev.sourcemaps, plg.sourcemaps.init()))
		.pipe(plg.plumber())
		.pipe(plg.sass(config.opt).on('error', plg.sass.logError))
		.pipe(plg.if(config.dev.sourcemaps, plg.sourcemaps.write()))
		.pipe(plg.gulp.dest(config.output));
});