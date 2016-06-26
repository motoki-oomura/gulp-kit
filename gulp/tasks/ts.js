//================================================
// require
//================================================
var plg = require('../plugin'),
	config = require('../config').ts;


//================================================
// task
//================================================
plg.gulp.task(config.name, function(){
	plg.gulp.src(config.input)
		.pipe(plg.ts(config.opt))
		.js
		.pipe(plg.webpack(config.webpack))
		.pipe(plg.gulp.dest(config.output));
});

