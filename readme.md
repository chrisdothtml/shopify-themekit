# shopify-themekit

[![StandardJS](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![travis-ci build status](https://api.travis-ci.org/chrisdothtml/shopify-themekit.svg?branch=master)](https://travis-ci.org/chrisdothtml/shopify-themekit/branches)
[![appveyor build status](https://ci.appveyor.com/api/projects/status/ir2eo2tqefcoawvj/branch/master?svg=true)](https://ci.appveyor.com/project/chrisdothtml/shopify-themekit)

> node wrapper for [Shopify ThemeKit](http://shopify.github.io/themekit)

This is based on [node-themekit](https://github.com/Shopify/node-themekit). I didn't agree with a lot of the ways that package was handling it, so I made my own.

## Install

```bash
yarn add shopify-themekit

# or npm
npm install --save shopify-themekit
```

## Use

See [ThemeKit Docs](https://shopify.github.io/themekit/commands) for full list of commands and options

### API

```javascript
const themekit = require('shopify-themekit')
const options = {
  files: ['assets/file.js', 'assets/file.css'],
  ignore: false,
  store: '...'
}

// equivalent to:
// theme upload assets/file.js assets/file.css --no-ignore --store=...
themekit('upload', options)
  .then(...)
  .catch(...)
```

### CLI

```bash
# arguments passed directly to themekit
theme upload --allenvs
```

## License

[MIT](LICENSE)
