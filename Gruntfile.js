// Generated on 2013-11-16 using generator-angular 0.6.0-rc.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);

	grunt.initConfig({
		yeoman: {
			// configurable paths
			app: require('./bower.json').appPath || 'app',
			dist: 'dist',
			tmp: '.tmp'
		},
		watch: {
			coffee: {
				files: ['<%= yeoman.app %>/scripts/{,*/}*.coffee'],
				tasks: ['coffee:dist']
			},
			coffeeTest: {
				files: ['test/spec/{,*/}*.coffee'],
				tasks: ['coffee:test']
			},
			styles: {
				files: ['<%= yeoman.app %>/styles/{,*/}*.css'],
				tasks: ['copy:styles', 'autoprefixer']
			},
			scripts: {
				files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
				tasks: ['copy:scripts', 'autoprefixer']
			},
			livereload: {
				options: {
					livereload: '<%= connect.options.livereload %>'
				},
				files: [
					'<%= yeoman.app %>/{,*/}*.html',
					'.tmp/styles/{,*/}*.css',
					'{.tmp,<%= yeoman.app %>}/scripts/{,*/}*.js',
					'<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
				]
			},
			jade: {
				files: '<%= yeoman.app %>/**/*.jade',
				tasks: ['jade']
			}
		},
		autoprefixer: {
			options: ['last 1 version'],
			dist: {
				files: [{
					expand: true,
					cwd: '.tmp/styles/',
					src: '{,*/}*.css',
					dest: '.tmp/styles/'
				}]
			}
		},
		connect: {
			options: {
				port: 9000,
				// Change this to '0.0.0.0' to access the server from outside.
				hostname: 'localhost',
				livereload: 35729
			},
			livereload: {
				options: {
					open: true,
					base: [
						'.tmp',
						'<%= yeoman.dist %>'
					]
				}
			},
			test: {
				options: {
					port: 9001,
					base: [
						'.tmp',
						'test',
						'<%= yeoman.app %>'
					]
				}
			},
			dist: {
				options: {
					base: '<%= yeoman.dist %>'
				}
			}
		},
		clean: {
			dist: {
				files: [{
					dot: true,
					src: [
						'<%= yeoman.tmp %>/*',
						'<%= yeoman.dist %>/*',
						'!<%= yeoman.dist %>/.git*'
					]
				}]
			},
			server: '.tmp'
		},
		jshint: {
			options: {
				jshintrc: '.jshintrc',
				reporter: require('jshint-stylish')
			},
			all: [
				'Gruntfile.js',
				'<%= yeoman.app %>/scripts/{,*/}*.js',
				'!<%= yeoman.app %>/scripts/analytics.js'
			]
		},
		coffee: {
			options: {
				sourceMap: true,
				sourceRoot: ''
			},
			dist: {
				files: [{
					expand: true,
					cwd: '<%= yeoman.app %>/scripts',
					src: '{,*/}*.coffee',
					dest: '.tmp/scripts',
					ext: '.js'
				}]
			},
			test: {
				files: [{
					expand: true,
					cwd: 'test/spec',
					src: '{,*/}*.coffee',
					dest: '.tmp/spec',
					ext: '.js'
				}]
			}
		},
		rev: {
			dist: {
				files: {
					src: [
						'<%= yeoman.dist %>/scripts/{,*/}*.js',
						'<%= yeoman.dist %>/styles/{,*/}*.css',
						'<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
						'<%= yeoman.dist %>/styles/fonts/*'
					]
				}
			}
		},
		useminPrepare: {
			html: ['<%= yeoman.dist %>/**/*.html']
		},
		usemin: {
			html: ['<%= yeoman.dist %>/**/*.html']
		},
		imagemin: {
			dist: {
				files: [{
					expand: true,
					cwd: '<%= yeoman.app %>/images',
					src: '{,*/}*.{png,jpg,jpeg}',
					dest: '<%= yeoman.dist %>/images'
				}]
			}
		},
		svgmin: {
			dist: {
				files: [{
					expand: true,
					cwd: '<%= yeoman.app %>/images',
					src: '{,*/}*.svg',
					dest: '<%= yeoman.dist %>/images'
				}]
			}
		},
		htmlmin: {
			dist: {
				options: {
					removeCommentsFromCDATA: true,
					// https://github.com/yeoman/grunt-usemin/issues/44
					collapseWhitespace: true,
					collapseBooleanAttributes: true,
					removeAttributeQuotes: true,
					removeRedundantAttributes: true,
					useShortDoctype: true,
					removeEmptyAttributes: true,
					removeOptionalTags: true
				},
				files: [{
					expand: true,
					cwd: '<%= yeoman.dist %>',
					src: '*.html',
					dest: '<%= yeoman.dist %>'
				}]
			}
		},
//		cssmin: {
//			combine: {
//				files: {
//					'<%= yeoman.tmp %>/styles/styles.css': [
//						'<%= yeoman.app %>/bower_components/bootstrap/dist/css/bootstrap.min.css',
//						'<%= yeoman.app %>/bower_components/bootstrap/dist/css/bootstrap-theme.min.css',
//						'<%= yeoman.app %>/bower_components/font-awesome/css/font-awesome.min.css',
//						'<%= yeoman.app %>/styles/**/*.css'
//					]
//				}
//			},
//			minify: {
//				expand: true,
//				cwd: '<%= yeoman.tmp %>/styles/',
//				src: ['*.css', '!*.min.css'],
//				dest: '<%= yeoman.dist %>/styles/',
//				ext: '.min.css'
//			}
//		},
		// Put files not handled in other tasks here
		copy: {
			dist: {
				files: [{
					expand: true,
					dot: true,
					cwd: '<%= yeoman.app %>',
					dest: '<%= yeoman.dist %>',
					src: [
						'*.{ico,png,txt}',
						'.htaccess',
						'.nojekyll',
//						'bower_components/**/*',
						'images/{,*/}*.{gif,webp}',
						'fonts/**/*',
//						'scripts/**/*',
//						'styles/**/*'
					]
				}, {
					expand: true,
					cwd: '.tmp/images',
					dest: '<%= yeoman.dist %>/images',
					src: [
						'generated/*'
					]
				}]
			}
//			styles: {
//				expand: true,
//				cwd: '<%= yeoman.app %>/styles',
//				dest: '.tmp/styles/',
//				src: '{,*/}*.css'
//			},
//			scripts: {
//				expand: true,
//				cwd: '<%= yeoman.app %>/scripts',
//				dest: '.tmp/scripts/',
//				src: '**/*.js'
//			}
		},
		concurrent: {
			server: [
				'coffee:dist',
				'copy:styles'
			],
			test: [
				'coffee',
				'copy:styles'
			],
			dist: [
				'imagemin',
				'svgmin'
			]
		},
		karma: {
			unit: {
				configFile: 'karma.conf.js',
				singleRun: true
			}
		},
		cdnify: {
			dist: {
				html: ['<%= yeoman.dist %>/*.html']
			}
		},
		ngmin: {
			dist: {
				files: [{
					expand: true,
					cwd: '<%= yeoman.app %>/scripts',
					src: '**/*.js',
					dest: '<%= yeoman.tmp %>/scripts'
				}]
			}
		},
//		uglify: {
//			dist: {
//				files: {
//					'<%= yeoman.dist %>/scripts/scripts.min.js': [
//						'<%= yeoman.tmp %>/scripts/**/*.js'
//					],
//					'<%= yeoman.dist %>/scripts/plugins.min.js': [
//						'<%= yeoman.app %>/bower_components/angular/angular.min.js',
//						'<%= yeoman.app %>/bower_components/angular-bootstrap/ui-bootstrap.min.js',
//						'<%= yeoman.app %>/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
//						'<%= yeoman.app %>/bower_components/lodash/dist/lodash.min.js'
//					]
//				}
//			}
//		},
		jade: {
			compile: {
				options: {
					pretty: true,
					data: {
						debug: true,
						timestamp: '<%= grunt.template.today() %>'
					}
				},
				files: {
					'<%= yeoman.dist %>/index.html': ['<%= yeoman.app %>/index.jade'],
					'<%= yeoman.dist %>/404.html': ['<%= yeoman.app %>/404.jade']
				}
			}
		},
		'gh-pages': {
			options: {
				base: 'dist'
			},
			src: ['**/*', '.nojekyll']
		}
	});

	grunt.registerTask('server', function (target) {
		if (target === 'dist') {
			return grunt.task.run(['build', 'connect:dist:keepalive']);
		}

		grunt.task.run([
			'clean:server',
			'jade',
			'concurrent:server',
			'autoprefixer',
			'connect:livereload',
			'watch'
		]);
	});

	grunt.registerTask('test', [
		'clean:server',
		'concurrent:test',
		'autoprefixer',
		'connect:test',
		'karma'
	]);

	grunt.registerTask('build', [
		'clean:dist',
		'jade',
		'cdnify',
		'useminPrepare',
		'concurrent:dist',
		'autoprefixer',
		'ngmin',
		'concat',
		'uglify',
		'cssmin',
		'copy:dist',
//		'rev',
		'usemin',
		'htmlmin'
	]);

	grunt.registerTask('publish', [
		'jshint',
		'test',
		'build',
		'gh-pages'
	]);

	grunt.registerTask('default', [
		'jshint',
		'test'
	]);
};
