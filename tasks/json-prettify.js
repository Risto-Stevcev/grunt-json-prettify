module.exports = function (grunt) {
  'use strict';
  grunt.registerMultiTask('jsonprettify', 'Prettify JSON files', function () {
    /* Defaults  */
    var options = this.options({
      replacer: undefined,
      reviver: undefined,
      space: 2
    })

    /* JSON Prettify */
    this.files.forEach(function (file) {
      file.src.forEach(function (src) {
        if (grunt.file.isFile(src)) {
          var prettified = JSON.stringify( JSON.parse(grunt.file.read(src), options.reviver),
                                           options.replacer,
                                           options.space )
          grunt.file.write(src, prettified)
        }
      })
    })
  })
}
