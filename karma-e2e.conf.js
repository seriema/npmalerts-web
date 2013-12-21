// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['ng-scenario'],

    // list of files / patterns to load in the browser
    files: [
			'.tmp/bower_components/jquery/jquery.min.js',
			'.tmp/bower_components/angular/angular.min.js',
			'.tmp/bower_components/angular-mocks/angular-mocks.js',
			'.tmp/bower_components/angular-scenario/angular-scenario.js',
			'.tmp/bower_components/angular-scenario/jstd-scenario-adapter.js',
			'.tmp/bower_components/angular-bootstrap/ui-bootstrap.min.js',
			'.tmp/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
			'.tmp/bower_components/lodash/dist/lodash.min.js',
			'.tmp/bower_components/ladda-boostrap-hakimel/dist/spin.min.js',
			'.tmp/bower_components/ladda-boostrap-hakimel/dist/ladda.min.js',
			'.tmp/scripts/app.js',
			'.tmp/scripts/controllers/signup.js',
			'.tmp/scripts/services/subscription.js',
			'test/e2e/**/*.js'
    ],

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8080,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Firefox'],


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'

		plugins : [
			'karma-chrome-launcher',
			'karma-jasmine',
			'karma-ng-scenario'
		]
  });
};
