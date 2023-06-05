module.exports = (lang) =>  {
  if(['es', 'en', 'it', 'fr', 'pt'].indexOf(lang) != -1)
    return lang
  else
    throw Error('Invalid language')
}
