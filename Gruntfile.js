'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      ignore_warning: {
        options: {
          '-W033': true  // Missing semicolon
        },
        src: ['tasks/*.js']
      }
    },

    clean: {
      tests: ['test/tmp']
    },

    copy: {
      tests: {
        expand: true,
        cwd: 'test/fixtures',
        src: '**',
        dest: 'test/tmp'
      }
    },

    jsonprettify: {
      all: {
        options: {
          space: 4
        },
        files: {
          src: [ 'test/tmp/*.json' ]
        }
      }
    },

    simplemocha: {
      all: { 
        src: 'test/*.js'
      }
    }
  })

  // Load in this plugin
  grunt.loadTasks('tasks')

  // Load other necessary tasks
  grunt.loadNpmTasks('grunt-contrib-jshint')
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-simple-mocha')

  grunt.registerTask('test', ['jshint', 'clean', 'copy', 'jsonprettify', 'simplemocha'])
  grunt.registerTask('default', ['test'])
}
