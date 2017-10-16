const options2Args = require('./tests/options2Args.js')
const version = require('./tests/version.js')

function runTests () {
  return Promise.all([
    options2Args(),
    version()
  ])
}

runTests()
  .then(() => console.log('tests passed!'))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
