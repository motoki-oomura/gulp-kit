//================================================
// plugin
//================================================
module.exports = {
	gulp		: require('gulp'),
	minimist	: require('minimist'),
	if			: require('gulp-if'),
	zip			: require('gulp-zip'),
	requireDir	: require('require-dir'),
	plumber		: require('gulp-plumber'),
	browserSync	: require('browser-sync'),
	watch		: require('gulp-watch'),
	rename		: require('gulp-rename'),
	ejs			: require('gulp-ejs'),
	sass		: require('gulp-sass'),
	cssmin		: require('gulp-cssmin'),
	sourcemaps	: require('gulp-sourcemaps'),
	babel		: require('gulp-babel'),
	ts			: require('gulp-typescript'),
	webpack		: require('gulp-webpack'),
	concat		: require('gulp-concat'),
	uglify		: require('gulp-uglify'),
	del			: require('del')
};