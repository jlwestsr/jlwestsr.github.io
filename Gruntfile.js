module.exports = function(grunt) {

	grunt.initConfig({
		sass: {
			// this is the "dev" SASS config used with "grunt watch" command
			dev: {
				options : {
					style: 'expanded',
					// tell SASS to look in the Bootstrap stylesheets directory when compiling
					loadPath: 'node_modules/bootstrap-sass/assets/stylesheets/'
				},
				files: {
					// the first path is the output and the second is the input
					'_site/assets/main.css':'_sass/main.scss'
				}
			},
			// This is the "production" SASS config used with the "grunt buildcss" command
			dist: {
				options: {
					style: 'compressed',
					loadPath: 'node_modules/bootstrap-sass/assets/stylesheets/'
				},
				files: {
					'_site/assets/main.css':'_sass/main.scss'
				}
			}
		},
		uglify: {
			jquery: {
				files: {
					'_site/assets/jquery.min.js':'bower_components/jquery/dist/jquery.js'
				}
			},
			bootstrap: {
				files: {
					'_site/assets/js/bootstrap.min.js': [
						'node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js'
					]
				}
			}
		},
		copy: {
			boostrap: {
				files: [
					{expand: true, cwd: 'node_modules/bootstrap-sass/assets/images/', src: ['**'], dest: '_site/assets/img/'},
					{expand: true, cwd: 'node_modules/bootstrap-sass/assets/fonts/', src: ['**'], dest: '_site/assets/fonts/'}
				]
			}
		},
		exec: {
			build: {
				cmd: 'bundle exec jekyll build'
			},
			serve: {
				cmd: 'bundle exec jekyll serve --watch'
			},
			deploy: {

			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-exec');


	grunt.registerTask('default', ['sass:dev', 'uglify', 'copy', 'exec:build' ]);
}