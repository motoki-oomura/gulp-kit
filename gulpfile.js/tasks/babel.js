//================================================
// require
//================================================
var $ = require('../plugin'),
	config = require('../config').babel;


//================================================
// task
//================================================
$.gulp.task(config.name, function(){
	$.gulp.src([config.input, config.reject])
		.pipe($.plumber())
		.pipe($.babel(config.opt))
		.pipe($.if(config.concat, $.concat(config.concatName)))
		.pipe($.if(config.uglify && config.base.isProduction, $.uglify({preserveComments: 'some'})))
		.pipe($.if(config.uglify && config.base.isProduction, $.rename(config.uglifyName)))
		.pipe($.gulp.dest(config.output));
});