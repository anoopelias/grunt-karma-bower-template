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
      }
    },
    wiredep : {
      task: {
        src: [
          '*.html'
        ],
        options: {
        }
      }
    },
    less: {
      development: {
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
      }
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
      karma: {
        files: ['js/**/*.js'],
        tasks: ['karma:unit:run']
      },
      less: {
        files: ['less/**/*.less'],
        tasks: ['less']
      }
    },
  });

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
};
