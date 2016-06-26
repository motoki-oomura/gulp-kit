//================================================
// require
//================================================
var plg = require('../plugin'),
	config = require('../config').clean;


//================================================
// task
//================================================
plg.gulp.task(config.name, function(){
	plg.del.sync([config.base.build]);
});