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
      }
    },
  });

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-contrib-watch');
};
