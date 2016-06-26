//================================================
// target watch
//================================================
var targetWatch = ['sass', 'copy'];


//================================================
// require
//================================================
var plg = require('./plugin'),
	config = require('./config');


//================================================
// init
//================================================
plg.requireDir(config.base.tasks, {recurse: true});


//================================================
// tasks
//================================================
plg.gulp.task('watch',targetWatch, function(){
	Object.keys(config).forEach(function(key){
		var task = config[key];
		if(!task.name || targetWatch.indexOf(task.name) == -1) return true;
		plg.watch(task.input, function(){
			plg.gulp.start(task.name);
		});
	});
});

plg.gulp.task('default', function(){
});
