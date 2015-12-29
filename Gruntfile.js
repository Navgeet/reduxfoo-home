module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    wiredep: {
      app: {
        src: 'index.html'
      }
    },

    useminPrepare: {
      html: 'index.html',
      options: {
        flow: {
          html: {
            steps: {
              js: ['concat']
            },
            post: {}
          }
        }
      }
    }
  });

  grunt.registerTask('build', [ 'useminPrepare', 'concat:generated' ]);
  
};
