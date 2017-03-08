const request = require('request-promise-native')
const processHtml = require('./lib/process-html')
const validateLanguage = require('./lib/validate-language')
require('babel-core/register')
require('babel-polyfill')
/**
 * Gets the result for the given word
 * @param  {String} word Word to be searched
 * @param  {String} from from language, default en
 * @param  {String} to   to language, default es
 * @return {Object}      Object with the word data
 */

module.exports = async (word, from = 'en', to = 'es') => {
  validateLanguage(from)
  validateLanguage(to)
  // Set the url
  var url = `http://www.wordreference.com/${from}${to}/${word}`
  // Make the request
  var html = await request({
    method: 'GET',
    uri: url,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36'
    }
  })
  // Process the HTML
  return processHtml(html)
}