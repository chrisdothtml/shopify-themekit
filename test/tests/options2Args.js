const { expect } = require('chai')
const { options2Args } = require('../../lib/utils.js')

function run () {
  const input = {
    allsites: true,
    env: 'dev',
    files: ['dir/file.txt', 'dir/file.js'],
    ignore: false
  }
  const output = [
    '--allsites',
    '--env=dev',
    '--no-ignore',
    'dir/file.txt',
    'dir/file.js'
  ]

  expect(options2Args(input)).to.have.members(output)
}

module.exports = run
