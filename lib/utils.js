const fs = require('pfs')
const { isArray } = Array

function fileExists (path) {
  return new Promise(resolve => {
    fs.access(path)
      .then(() => resolve(true))
      .catch(() => resolve(false))
  })
}

function isString (thing) {
  return typeof thing === 'string'
}

function isObject (thing) {
  return typeof thing === 'object' && !isArray(thing)
}

function options2Args (options) {
  let result = []

  if (isObject(options)) {
    Object.keys(options)
      // ensure `files` is first
      .sort((a, b) => {
        if (a === 'files') return -1
        else if (b === 'files') return 1
        else return 0
      })
      .forEach(key => {
        const value = options[key]
        let arg

        if (key === 'files' && isArray(value)) {
          arg = value
        } else if (value === true) {
          arg = `--${key}`
        } else if (value === false) {
          arg = `--no-${key}`
        } else if (value) {
          arg = `--${key}=${value}`
        }

        if (arg) result = result.concat(arg)
      })
  }

  return result
}

module.exports = {
  fileExists,
  isArray,
  isString,
  isObject,
  options2Args
}
