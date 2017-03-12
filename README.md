# wordreference-api [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url][![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](http://standardjs.com/)

> An api to use the worldreference.com information

## Installation

```sh
$ npm install --save wordreference-api
```

## Usage

```js
var wr = require('wordreference-api');
/**
 * wr
 * Gets the result for the given word, available languages: 'es', 'en', 'it', 'fr'
 * @param  {String} word Word to be searched
 * @param  {String} from from language, default 'en'
 * @param  {String} to   to language, default 'es'
 * @return {Object}      Object with the word data
 */
wr('Rainbow');
wr('Rainbow','en','fr').then((result)=> console.log);
```
Return:
``` javascript
{
  "word": "Rainbow",
  "pronWR": "/ˈreɪnˌbəʊ/",
  "audio": [
    "/audio/en/us/us/en069238.mp3",
    "/audio/en/uk/general/en069238.mp3",
    "/audio/en/uk/Yorkshire/en069238-55.mp3",
    "/audio/en/Irish/en069238.mp3",
    "/audio/en/scot/en069238.mp3",
    "/audio/en/us/south/en069238.mp3",
    "/audio/en/Jamaica/en069238.mp3"
  ],
  "translations": [
    {
      "title": "Principal Translations",
      "translations": [
        {
          "from": "rainbow",
          "fromType": "n",
          "toType": "grupo nom",
          "to": "arco iris "
        }
      ]
    },
    {
      "title": "Compound Forms:",
      "translations": [
        {
          "from": "rainbow trout",
          "fromType": "n",
          "toType": "nf",
          "to": "trucha arcoiris "
        }
      ]
    }
  ]
}
```
## License

MIT © [Fabian Gutierrez](fabiangutierrez.co)


[npm-image]: https://badge.fury.io/js/wordreference-api.svg
[npm-url]: https://npmjs.org/package/wordreference-api
[travis-image]: https://travis-ci.org/fega/wordreference-api.svg?branch=master
[travis-url]: https://travis-ci.org/fega/wordreference-api
[daviddm-image]: https://david-dm.org/fega/wordreference-api.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/fega/wordreference-api
[coveralls-image]: https://coveralls.io/repos/fega/wordreference-api/badge.svg
[coveralls-url]: https://coveralls.io/r/fega/wordreference-api
