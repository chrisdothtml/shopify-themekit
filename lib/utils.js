const fs = require('fs')
const { promisify } = require('util')
const { isArray } = Array

function fileExists (path) {
  return new Promise(resolve => {
    promisify(fs.access)(path)
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
  const result = []

  if (isObject(options)) {
    Object.keys(options).forEach(key => {
      const value = options[key]
      let arg

      if (value === true) {
        arg = `--${key}`
      } else if (value === false) {
        arg = `--no-${key}`
      } else if (value) {
        arg = `--${key}=${value}`
      }

      if (arg) result.push(arg)
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
