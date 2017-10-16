const childProcess = require('child_process')

function spawn () {
  const args = arguments

  return new Promise((resolve, reject) => {
    const process = childProcess.spawn.apply(childProcess, args)

    process.on('error', reject)
    process.on('close', code => {
      if (code === 0) {
        resolve()
      } else {
        reject(new Error())
      }
    })
  })
}

module.exports = spawn
