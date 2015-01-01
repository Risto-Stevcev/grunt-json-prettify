# grunt-json-prettify

A grunt task to prettify JSON files

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

    all: { src: ['test/*.js'] }
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


[json-stringify-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
[json-parse-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
