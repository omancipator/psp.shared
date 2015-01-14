module.exports = function(grunt) {

  grunt.initConfig({

    bowercopy: {
      options: {
        // Task-specific options go here
      },
      your_target: {
        // Target-specific file lists and/or options go here
      }
    }


    //jshint: {
    //  files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
    //  options: {
    //    globals: {
    //      jQuery: true
    //    }
    //  }
    //},
    //watch: {
    //  files: ['<%= jshint.files %>'],
    //  tasks: ['jshint']
    //}
  });


  grunt.loadNpmTasks('grunt-bowercopy');

  grunt.registerTask('default', ['bowercopy']);

};