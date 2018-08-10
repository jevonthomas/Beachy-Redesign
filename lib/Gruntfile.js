module.exports = function(grunt) {
	grunt.initConfig({
		browserify: {
			js: {
				src: ['../javascripts/app.js'],
				dest: '../dist/app.js'
			},
			options: {
				transform: ['hbsfy'],
				browserifyOptions: {
					paths: ['./node_modules']
				}
			}
		},
		sass: {
			dist: {
				files: {
					'../css/app.css': '../sass/app.scss'
				},
				options: {
					loadPath: ['node_modules/foundation-sites/scss', 'node_modules/motion-ui/src']
				}
			}
		},
		watch: {
			javascripts: {
				files: ['../javascripts/**/*.js'],
				tasks: ['browserify']
			},
			sass: {
				files: ['../sass/**/*.scss'],
				tasks: ['sass']
			},
			hbs: {
				files: ['../templates/**/*.hbs'],
				tasks: ['browserify']
			}
		}
	});

	require('matchdep')
		.filterDev('grunt-*')
		.forEach(grunt.loadNpmTasks);

	grunt.registerTask('default', ['sass', 'browserify', 'watch']);
};
