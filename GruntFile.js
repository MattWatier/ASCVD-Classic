module.exports = function(grunt){
//Project Config
	var vars = grunt.file.readJSON('./htmlsource/models/_global.json');
	grunt.initConfig({
		auto_install: {
  		local: {},
  		subdir: {
  		  options: {
  		    cwd: 'node_modules',
  		    stdout: true,
  		    stderr: true,
  		    failOnError: true,
  		    npm: true
  		  }
  		}
		},
    uglify: {
      options: {
        mangle: false,
        compress:false,
        beautify:true,
        sourceMap:true,
      },
    appCode: {
      files: {
        'www/assets/js/application.min.js': [
          'htmlsource/assets/js/app.js', 
          'htmlsource/assets/js/appdata.js', 
          'htmlsource/assets/js/formdata.js', 
          'htmlsource/assets/js/appviewmodel.js',
          'htmlsource/assets/js/query-string.js',
          'htmlsource/assets/js/email.js',
          'htmlsource/assets/js/customAnalytics.js', 
          ]
      }
    },
    vendorCode: {
      files: {
        'www/assets/js/vendor.min.js': [
          'htmlsource/assets/js/dist/jquery.js', 
          'htmlsource/assets/js/dist/knockout.js', 
          'htmlsource/assets/js/underscore.js', 
          'htmlsource/assets/js/dist/foundation.js',
          'htmlsource/assets/js/koui.js',
          'htmlsource/assets/js/jquery.unveil.js',
          'htmlsource/assets/js/jquery.waypoints.js',
          'htmlsource/assets/js/waypoint/shortcuts/sticky.js', 
          'htmlsource/assets/js/jquery.panzoom.js', 
          'htmlsource/assets/js/pager.js'
          ]
      }
    }
  },
    bower: {
      dev: {
        dest: 'htmlsource/assets/',
        js_dest: 'htmlsource/assets/js',
        css_dest: 'htmlsource/assets/css',
        options: {
          ignorePackages: ['foundation-sites']
        }
      }
    },	
		connect:{
		  server:{
		    options:{
				livereload:true,
		      	port: 8000,
		      	open:{
		        target: 'http://localhost:8000', // target url to open
		      },
		    //keepalive:true,
		    }
		  }
		},
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: [{
          expand: true,
          cwd: 'htmlsource/assets/css',
          src: ['*.css', '!*.min.css', '!*.css.map'],
          dest: 'htmlsource/assets/css',
          ext: '.min.css'
        }]
      }
    },
    sass:{
      dist:{
        options: {                       // Target options
            style: 'expanded'
          },      
        files:[{
          expand: true,
          cwd: './htmlsource/assets/scss',
          src: ['*.scss','browserFIX/*.scss'],
          dest: './htmlsource/assets/css',
          ext: '.css' 
        }]
      },
      vendor:{
        files:[{
          expand: true,
          cwd: './htmlsource/assets/scss/vendor',
          src: ['**.scss','*/**.scss','*/**.**.scss','/jquery-ui/jquery-ui.structure.scss','/foundation-sites/vendor/*.scss','/jquery-ui/*'],
          dest: './htmlsource/assets/css',
          ext: '.css',
          flatten:true  
        }]
      }
    },
    copy:{ 
      STYLES:{
        files:[
        {
          expand:true,
          cwd:'htmlsource/assets/css',
          src:'**',
          dest:'www/assets/css'
        }
        ]},
      BOWER:{

        files:[
        {
          expand:true,
          cwd:'bower_components/bristol/Assets/scss',
          src:['**.scss','!vendor/**'],
          dest:'htmlsource/assets/scss'
        },{
          expand:true,
          cwd:'bower_components/jquery/dist',
          src:['**.js','**.map'],
          dest:'htmlsource/assets/js'
        },
        {
          expand:true,
          cwd:'bower_components/foundation-sites/dist',
          src:['**.js','**.map'],
          dest:'htmlsource/assets/js'
        },
        {
          expand:true,
          cwd:'bower_components/knockout/dist',
          src:['**.js','**.map'],
          dest:'htmlsource/assets/js'
        },
        {
          expand:true,
          cwd:'bower_components/waypoints/lib',
          src:['**.js','**.map'],
          dest:'htmlsource/assets/js'
        },
        {
          expand:true,
          cwd:'bower_components/pagerjs/dist',
          src:['**.js','**.map'],
          dest:'htmlsource/assets/js'
        },
        {
          expand:true,
          cwd:'bower_components/foundation-sites/dist',
          src:['**.css','**.map'],
          dest:'htmlsource/assets/css'
        },
        {
          expand:true,
          cwd:'bower_components/animate.css',
          src:['**.css','**.map'],
          dest:'htmlsource/assets/css'
        }
        ]
      },
      INTERNAL:{
        files:[
        {
          expand:true,
          cwd:'htmlsource/assets/js',
          src:['jquery.panzoom.*'],
          dest:'www/assets/js'
        }
        ,{
          expand:true,
          cwd:'htmlsource/assets/css',
          src:[ 'normalize.min.*','ascvd.min.*','font-awesome.min.*', 'foundation-sites.min.*', 'browserFIX/Fallback-IE9.*' ],
          dest:'www/assets/css'
        },{
          expand:true,
          cwd:'htmlsource/assets/img',
          src:'**',
          dest:'www/assets/img'
        },{
          expand:true,
          cwd:'htmlsource/assets/fonts',
          src:'**',
          dest:'www/assets/fonts'
        }]
      }

    },

		liquid: {
			options: {
			 includes: 'htmlsource/templates/includes',
			 global: vars,
			},
			pages: {
			  files: [
			    {expand: true, flatten: true, src: 'htmlsource/templates/*.liquid', dest: 'www/', ext: '.html' }
			  ]
			}
		},
		watch: {
			options: {
			      livereload: true,
			    },
      scss: {
        files: [ 'htmlsource/assets/scss/*.scss' ],
        tasks: [ 'sass:dist','cssmin','copy:INTERNAL'],
      },
      js: {
        files: [ 'htmlsource/assets/js/*.js','htmlsource/assets/js/*.json','models/*.json' ],
        tasks: [  'uglify:appCode'],
      },
			data: {
  			files: [ 'htmlsource/templates/**' ],
  			tasks: [ 'liquid' ],

			}
		}
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-copy');	
	grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-liquid');
	grunt.loadNpmTasks('grunt-styledown');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-sass-convert');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-auto-install');
  grunt.loadNpmTasks('grunt-bower');
	// Default task.
	grunt.registerTask('build', [
    'copy:BOWER',
		'sass:vendor',
    'sass:dist',
    'cssmin',
    'uglify:vendorCode',
    'uglify:appCode',
    'copy:INTERNAL',
    'liquid',
		
	]);
	grunt.registerTask('serve', [
		'sass:vendor',
    'sass:dist',
    'cssmin',
    'uglify:vendorCode',
    'uglify:appCode',
    'copy:INTERNAL',
    'liquid',
    'connect',
    'watch',]);
	grunt.registerTask('update', [
		'auto_install',]);

}
