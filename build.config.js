/**
 * This file/module contains all configuration for the build process.
 */
module.exports = {
	dir: {
		dev: 'bin/dev',
		prod: 'bin/prod'
	},

	/**
	 * This is a collection of file patterns that refer to our app code (the
	 * stuff in `src/`). These file paths are used in the configuration of
	 * build tasks. `js` is all project javascript, less tests. `ctpl` contains
	 * our reusable components' (`src/common`) template HTML files, while
	 * `atpl` contains the same, but for our app's code. `html` is just our
	 * main HTML file, `less` is our main stylesheet, and `unit` contains our
	 * app's unit tests.
	 */
	src: {
		root: 'src',

		static_files: [
			'assets/**/*',
			'lib/**/.htaccess',
			'css/**/*.eot',
			'css/**/*.svg',
			'css/**/*.ttf',
			'css/**/*.woff',
			'css/**/*.otf'
		],

		app: [ 'app/**/*.js' ],
		templates: [ 'src/app/**/*.html' ],
		html: [ 'index.html' ],
		lib: [
			'lib/js/angular-ui-router.min.js',
			'lib/js/ui-bootstrap-tpls-0.6.0.min.js',
			'lib/js/ui-utils.min.js',
			'lib/js/d3.v3.min.js',
			'lib/js/underscore.min.js',
		]
	}
};
