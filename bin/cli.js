#! /usr/bin/env node

require('../lib/index.js')(process.argv.slice(2))
  .catch(console.error)
