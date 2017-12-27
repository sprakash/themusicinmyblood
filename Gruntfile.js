module.exports = function (grunt) {
	 grunt.initConfig({ 
		pkg: grunt.file.readJSON('package.json'),
		

		//Tasks
		sass: {
			dist: {
				options:{
					sourcemap: 'none'
				},
				files: [{
					expand: true,
					cwd:'sass',
					src:['*.scss'],
					dest:'css',
					ext:'.css'
				}]
			}
		},

		postcss: {
			options:{
				map: false,
				processors: [
					require('autoprefixer')({
						browsers: ['last 2 versions']
					})
				]
			},
			dist: {
				src:'css/base.css'
			}
		},
		
		cssmin:{
			target:{
				files: [{
					expand: true,
					cwd: 'css',
					src: ['*.css', '!*.min.css'],
					dest: 'css',
					ext: '.min.css'
				}]
			}
		},

		responsive_images: {
			dev: {
				options: {
					sizes: [{
						width: 400
					},{
						upscale: true,
						width: 800
					}]
				},
				files: [{
					expand: true,
					src: ['images/**/*.{gif,jpg,png}'],
					cwd: 'src/',
					dest: 'dist/'
				}]
			}
		},

		watch:{
			css:{
				files: '**/*.scss',
				tasks: ['sass', 'postcss', 'cssmin', 'responsive_images']
			}
		}

	});

	//Load Grunt Plugins
	grunt.loadNpmTasks('grunt-responsive-images');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');


	//Register Grunt tasks
	grunt.registerTask('default',['watch']);

};
