//================================================
// require
//================================================
var $ = require('../plugin'),
	config = require('../config').sass;


//================================================
// task
//================================================

$.gulp.task(config.name, function(){
	$.gulp.src([config.input, config.reject])
		.pipe($.if(config.base.isDevelopment && config.dev.sourcemaps, $.sourcemaps.init()))
		.pipe($.plumber())
		.pipe($.sass(config.opt).on('error', $.sass.logError))
		.pipe($.if(config.base.isDevelopment && config.dev.sourcemaps, $.sourcemaps.write()))
		.pipe($.if(config.base.isProduction, $.cssmin()))
		.pipe($.gulp.dest(config.output));
});