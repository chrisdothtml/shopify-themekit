const install = require('./install.js')
const spawn = require('./spawn.js')
const { INSTALL_PATH } = require('./config.js')
const { fileExists } = require('./utils.js')
const { isArray } = Array

async function run (args) {
  const isInstalled = await fileExists(INSTALL_PATH)

  if (!isInstalled) {
    await install()
  }

  return spawn(INSTALL_PATH, args, { stdio: 'inherit' })
}

async function themekit (command, options = {}) {
  let args = []

  if (isArray(command)) {
    args = command
  } else if (command) {
    args.push(command)

    Object.keys(options).forEach(key => {
      const value = options[key]
      let arg

      if (value === true) {
        arg = `--${arg}`
      } else if (value === false) {
        arg = `--no-${arg}`
      } else if (value) {
        arg = `--${arg}=${value}`
      }

      if (arg) args.push(arg)
    })
  }

  return run(args)
}

module.exports = themekit
