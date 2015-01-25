module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    karma: {
      options: {
        configFile: 'karma.conf.js'
      },
      unit: {
        background: true,
        singleRun: false
      },
      dist: {
        singleRun: true,
        browsers: ['PhantomJS']
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        },
      },
      uses_defaults: ['js/**/*.js', 'test/**/*.js'] 
    },
    wiredep : {
      dev: {
        src: [
          '*.html'
        ],
        options: {
        }
      }
    },
    less: {
      dev: {
        options: {
          paths: ['less']
        },
        files: [
          /* This might be useful when we start using imports,
          http://stackoverflow.com/a/15600742/1328888

          */
          {
            expand: true,
            cwd: 'less',
            src: ['*.less'],
            dest: 'css/',
            ext: '.css'
          }
        ]
      },
      distMin: {
        options: {
          compress: true
        },
        files : {
          'dist/css/grunt-karma-bower.min.css': ['less/**/*.less']
        }
      },
      dist: {
        files : {
          'dist/css/grunt-karma-bower.css': ['less/**/*.less']
        }
      }

    },
    uglify: {
      dist: {        
        options: {
          mangle: false,
          compress: false,
          beautify: true
        },
        files: {
         'dist/js/grunt-karma-bower.js' : ['js/**/*.js']
        }
      },
      distMin: {        
        options: {
          mangle: false,
          compress: true,
          beautify: false
        },
        files: {
         'dist/js/grunt-karma-bower.min.js' : ['js/**/*.js']
        }
      }
    },
    clean: {
      dist : ['dist'] 
    },
    watch: {
      startup: {
        files: [],
        tasks: ['karma:unit:start'],
        options: {
            atBegin: true,
            spawn: false
        }
      },
      jshint: {
        files: ['js/**/*.js', 'test/**/*.js'],
        tasks: ['jshint']
      },
      karma: {
        files: ['js/**/*.js', 'test/**/*.js'],
        tasks: ['karma:unit:run']
      },
      less: {
        files: ['less/**/*.less'],
        tasks: ['less:dev']
      }
    }
  });

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('test', ['jshint', 'karma:dist']);
  grunt.registerTask('dist', ['clean', 'less:dist', 'less:distMin', 'uglify']);
  grunt.registerTask('build', ['test', 'dist']);
  grunt.registerTask('default', ['build']);

};
