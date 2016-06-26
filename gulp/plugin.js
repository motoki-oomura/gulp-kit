//================================================
// plugin
//================================================
module.exports = {
	gulp: require("gulp"),
	requireDir: require('require-dir'),
	plumber: require('gulp-plumber'),
	browserSync: require('browser-sync'),
	watch: require('gulp-watch'),
	rename: require("gulp-rename"),
	ejs: require("gulp-ejs"),
	sass: require("gulp-sass"),
	babel: require("gulp-babel"),
	ts: require('gulp-typescript'),
	webpack: require('gulp-webpack'),
	del: require('del')
};