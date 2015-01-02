# grunt-json-prettify

A grunt task to prettify JSON files

[![Npm Downloads][downloads-image]][npm-url]
[![Npm Version][npm-image]][npm-url]
[![Test Coverage][wercker-image]][github-url]
[![Dev Dependencies][devDependency-image]][devDependency-url]

## Installation

Install the task:
```bash
npm install grunt-json-prettify --save-dev
```

Then add the task to your Gruntfile.js:
```js
grunt.loadNpmTasks('grunt-json-prettify');
```

## Usage

In your Gruntfile.js:
```js
grunt.initConfig({
  jsonprettify: {
    options: {
      space: 4
    },

    all: { src: ['lib/*.json'] }
  }
});

// For this to work, you need to have run `npm install grunt-simple-mocha`
grunt.loadNpmTasks('grunt-json-prettify');

// Add a default task. This is optional, of course :)
grunt.registerTask('default', 'jsonprettify');
```

## Options

#### space

Type: `Number`  
Default: `2`

The indentation level to be used for pretty printing. (see [JSON.stringify][json-stringify-url])

#### replacer

Type: `Function(key, value)`

The replacer function to use when stringifying the JSON object. (see [JSON.stringify][json-stringify-url])

#### reviver

Type: `Function(key, value)`

The reviver function to use when parsing the JSON file. (see [JSON.parse][json-parse-url])



[downloads-image]: https://img.shields.io/npm/dm/grunt-json-prettify.svg?style=flat
[npm-image]: https://img.shields.io/npm/v/grunt-json-prettify.svg?style=flat
[wercker-image]: https://img.shields.io/wercker/ci/54a4987707fa3ea415011290.svg?style=flat
[devDependency-image]: https://david-dm.org/Risto-Stevcev/grunt-json-prettify/dev-status.svg

[npm-url]: https://npmjs.org/package/grunt-json-prettify
[github-url]: https://github.com/Risto-Stevcev/grunt-json-prettify
[devDependency-url]: https://david-dm.org/Risto-Stevcev/grunt-json-prettify#info=devDependencies

[json-stringify-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
[json-parse-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
