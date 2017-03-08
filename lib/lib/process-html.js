const cheerio = require('cheerio')
/**
 * Process the html returned from the request and generates the JSON.
 * @param  {string} html html string to be parsed
 * @return {Object}      worldreference object
 */
module.exports = (html) => {
  var $ = cheerio.load(html)
  var result = {}
  result.word = $('h3.headerWord').text()
  result.pronWR = $('span#pronWR').text()
  result.audio = $('div#listen_widget audio source')
    .map(function (i, el) { return $(this).attr('src') })
    .get()
  var tables = $('table.WRD')
    .map(function (i, el) { return $(this).html() })
    .get()
  result.translations = tables.map(WRDtableMap)

  return result
}
/**
 * Parses the a table.WRD html element and return it as a json
 * @param {String} html table.WRD html
 * @return {Object} table parsed
 */
function WRDtableMap (html) {
  var $ = cheerio.load(html)
  var result = {}
  result.title = ''
  result.translations = []

  $('tr').map(function (i, el) {
    var element = $(this)
    var id = element.attr('id')
    var clss = element.attr('class')

    if (clss === 'wrtopsection'){
      result.title = element.text() 
    } else if (id !== undefined && (clss === 'even' || clss === 'even')) {
      var V = cheerio.load($(this).html())

      var from = V('strong').text()
      V('.ToWrd em span').remove()
      V('.FrWrd em span').remove()
      var fromType = V('.FrWrd em').text()
      var toType = V('.ToWrd em').text()
      V('.ToWrd em').remove()
      var to = V('.ToWrd').text()
      var item = {
        from,
        fromType,
        toType,
        to
      }
      result.translations.push(item)
    }
  })
  return result
}
