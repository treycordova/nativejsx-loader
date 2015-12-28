## jsxdom-loader [![Build Status](https://travis-ci.org/treycordova/jsxdom-loader.svg?branch=master)](https://travis-ci.org/treycordova/jsxdom-loader) [![Version Status](https://img.shields.io/npm/v/jsxdom-loader.svg)](https://www.npmjs.org/package/jsxdom-loader)
#### Webpack loader for [jsxdom](https://github.com/treycordova/jsxdom).
So you're using Webpack. Of course you are – have a loader.
#### Example
```javascript
let config = {
  // ...
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'jsxdom-loader',
        excludes: /node_modules/,
        query: {
          variablePrefix: '_',
          declarationType: 'let'
        }
      }
    ]
  }
};
