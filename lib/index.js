const install = require('./install.js')
const spawn = require('./spawn.js')
const { INSTALL_PATH } = require('./config.js')
const { fileExists, isArray, isString, options2Args } = require('./utils.js')

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
  } else if (isString(command)) {
    args = args.concat(
      command,
      options2Args(options)
    )
  }

  return run(args)
}

module.exports = themekit
