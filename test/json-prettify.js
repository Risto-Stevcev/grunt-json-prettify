var should = require('should')
var grunt = require('grunt')

describe('json-prettify', function () {
  'use strict';
  function testGruntOutput(filename) {
    var filename = filename 
    var expected = grunt.file.read('./test/expected/' + filename)
    var actual = grunt.file.read('./test/tmp/' + filename)
    actual.should.equal(expected);
  }

  describe('basic.json', function () {
    it('should prettify the file', function () {
      testGruntOutput('basic.json')
    })
  })

  describe('basic2.json', function () {
    it('should prettify the file', function () {
      testGruntOutput('basic2.json')
    })
  })

  describe('empty.json', function () {
    it('should leave the empty object intact', function () {
      testGruntOutput('empty.json')
    })
  })

  describe('boolean.json', function () {
    it('should leave the boolean value intact', function () {
      testGruntOutput('boolean.json')
    })
  })

  describe('number.json', function () {
    it('should leave the number value intact', function () {
      testGruntOutput('number.json')
    })
  })

  describe('string.json', function () {
    it('should leave the string value intact', function () {
      testGruntOutput('string.json')
    })
  })
})
