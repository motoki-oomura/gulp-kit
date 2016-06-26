//================================================
// require
//================================================
var plg = require('../plugin'),
	config = require('../config').zip;

//================================================
// task
//================================================
plg.gulp.task('zip', function(){
	plg.gulp.src(config.input, config.opt)
		.pipe(plg.zip(config.zipName))
		.pipe(plg.gulp.dest(config.output));
});
