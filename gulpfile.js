//================================================
// constants
//================================================
const targetWatch = ['ejs','sass','ts'];


//================================================
// require
//================================================
var plg = require('./gulp/plugin'),
	config = require('./gulp/config');


//================================================
// init
//================================================
plg.requireDir(config.base.tasks, {recurse: true});


//================================================
// tasks
//================================================
plg.gulp.task('watch', targetWatch, function(){
	Object.keys(config).forEach(function(key){
		var task = config[key];
		if(!task.name || targetWatch.indexOf(task.name) == -1) return true;
		plg.watch(task.base.src + task.input, [task.name]);

	});
});

plg.gulp.task('default', function(){
});
