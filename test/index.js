const themekit = require('../lib/index.js')

async function version () {
  return themekit('version')
}

function runTests () {
  return Promise.all([
    version()
  ])
}

runTests()
  .then(() => console.log('tests passed!'))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
