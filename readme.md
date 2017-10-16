# shopify-themekit

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
  // --allenvs
  allenvs: true,
  // --no-ignore
  ignore: false,
  // --store=...
  store: '...'
}

themekit('upload', options)
  .then(...)
  .catch(...)
```

### CLI

```bash
# arguments passed directly to themekit
theme upload --allenvs
```
