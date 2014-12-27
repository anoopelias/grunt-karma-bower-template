module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    karma: {
      unit: {
          configFile: 'karma.conf.js'
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
    }
  });

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.registerTask('default', ['karma']);
};
