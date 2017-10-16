const fs = require('fs')
const { promisify } = require('util')

exports.fileExists = function (path) {
  return new Promise(resolve => {
    promisify(fs.access)(path)
      .then(() => resolve(true))
      .catch(() => resolve(false))
  })
}
