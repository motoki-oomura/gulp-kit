//================================================
// target watch
//================================================
var targetWatch = ['sass', 'copy'];
var targetBuild = targetWatch;


//================================================
// require
//================================================
var $ = require('./plugin'),
	config = require('./config');


//================================================
// init
//================================================
$.requireDir(config.base.tasks, {recurse: true});


//================================================
// tasks
//================================================
$.gulp.task('watch',targetWatch, function(){
	Object.keys(config).forEach(function(key){
		var task = config[key];
		if(!task.name || targetWatch.indexOf(task.name) == -1) return true;
		$.watch(task.input, function(){
			$.gulp.start(task.name);
		});
	});
});

$.gulp.task('build', targetBuild, function(){

});

$.gulp.task('default', function(){
});
