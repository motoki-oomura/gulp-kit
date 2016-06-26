//================================================
// config
//================================================
var base = {
	src : './src',
	build : './build',
	root : './',
	tasks : './tasks'
};


//================================================
// exports
//================================================
module.exports = {
	base: base,
	clean: {
		base: base,
		name: 'clean'
	},
	copy: {
		base: base,
		name: 'copy',
		input: base.src + '/**/*',
		reject: '!' + base.src + '/**/*.{scss,ejs,js,ts,tsx}',
		rejectSass: '!' + base.src + '/sass',
		rejectJs: '!' + base.src + '/js',
		output: base.build + '/'
	},
	zip: {
		base: base,
		name: 'zip',
		input: base.build + '/*',
		output: base.root,
		zipName: 'archive.zip',
		opt: {
			base: 'build'
		}
	},
	ejs: {
		base: base,
		name: 'ejs',
		input: base.src + '/**/*.ejs',
		reject: '!' + base.src + '/**/_*.ejs',
		output: base.build + '/',
		rename: function(path){
			path.extname = '.html';
		}
	},
	sass: {
		base: base,
		name: 'sass',
		input: base.src + '/sass/**/*.scss',
		reject: '!' + base.src + '/sass/**/_*.scss',
		output: base.build + '/css/',
		opt: {
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1'
		},
		dev: {
			sourcemaps: true,
		}
	},
	js: {
		base: base,
		name: 'js',
		input: base.src + '/js/**/*.js',
		output: base.build + '/js/'
	},
	babel: {
		base: base,
		name: 'babel',
		input: base.src + '/babel/**/*.js',
		reject: '!' + base.src + '/babel/**/_*/js',
		output: base.build + '/js/',
		opt: {
			'presets': ['es2015']
		}
	},
	ts: {
		base: base,
		name: 'ts',
		input: [base.src + '/**/*.tsx', base.src + '/**/*.ts'],
		output: base.build + '/',
		opt: {
			target: 'ES5',
			jsx: 'react',
			module: 'commonjs',
			removeComment: true
		},
		webpack: {
			entry: [base.src + '/main.js'],
			output: {
				filename: 'app.js',
				library: 'app'
			},
			devtool: 'source-map',
			resolve: {
				extensions: ['', '.js']
			}
		}
	}
};