const { join } = require('path')

const BIN_NAME = process.platform === 'win32' ? 'theme.exe' : 'theme'

module.exports = {
  INSTALL_PATH: join(__dirname, '../bin', BIN_NAME)
}
