module.exports = (lang) =>  {
  if(['es', 'en', 'it', 'fr'].indexOf(lang) != -1)
    return lang
  else
    throw Error('Invalid language')
}
