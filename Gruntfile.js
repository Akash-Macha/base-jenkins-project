module.exports = function (grunt) {
  grunt.initConfig({
    run: {
      npmver: {
        cmd: 'npm.cmd',
        args: [
          'version',
          grunt.option('set-version')
        ]
      }
    }
  });

  // Load plugin
  grunt.loadNpmTasks('grunt-run')

  // Register and run a Task
  grunt.registerTask('nx-process', ['run:npmver']);
}

// grunt nx-process --set-version=1.1.0