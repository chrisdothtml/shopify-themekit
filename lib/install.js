const { INSTALL_PATH } = require('./config.js')
const { fileExists } = require('./utils.js')

const PLATFORM_NAMES = {
  'darwin-386': ['darwin'],
  'darwin-amd64': ['darwin', 'x64'],
  'linux-386': ['linux'],
  'linux-amd64': ['linux', 'x64'],
  'windows-386': ['win32'],
  'windows-amd64': ['win32', 'x64']
}

function download (pkg) {
  const { basename, dirname } = require('path')
  const { promisify } = require('util')
  const BinWrapper = require('bin-wrapper')
  const bin = new BinWrapper()
    .dest(dirname(INSTALL_PATH))
    .use(basename(INSTALL_PATH))

  // add platforms
  pkg.platforms.forEach(platform => {
    // e.g. ['https://.../darwin-amd64/theme', 'darwin']
    const args = [platform.url]
      .concat(PLATFORM_NAMES[platform.name])

    bin.src.apply(bin, args)
  })

  // download and verify with test command (--help)
  return promisify(bin.run.bind(bin))(['--help'])
}

async function getLatest () {
  const fetch = require('isomorphic-fetch')
  const uri = 'https://shopify-themekit.s3.amazonaws.com/releases/latest.json'
  const response = await fetch(uri)

  return response.json()
}

async function install () {
  const alreadyInstalled = await fileExists(INSTALL_PATH)

  if (!alreadyInstalled) {
    const ora = require('ora')
    const spinner = ora({ color: 'blue' })

    spinner.start('Fetching latest ThemeKit version...')
    const pkg = await getLatest()
    spinner.text = 'Downloading ThemeKit...'
    await download(pkg)
    spinner.stop()
  }
}

if (process.argv.includes('--initial-install')) {
  install()
    .catch(console.error)
}

module.exports = install
