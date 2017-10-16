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
    'dir/file.txt',
    'dir/file.js',
    '--allsites',
    '--env=dev',
    '--no-ignore'
  ]

  expect(options2Args(input)).to.have.ordered.members(output)
}

module.exports = run
