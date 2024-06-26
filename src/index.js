function capitalizeText(string) {
  if (typeof string !== 'string') return ''
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function reverseString(string) {
  if (typeof string !== 'string') return ''
  return string.split('').reverse().join('')
}

function stringLen(string) {
  if (typeof string !== 'string') return 0
  return string.length
}

module.exports = {
  capitalizeText,
  reverseString,
  stringLen
}
