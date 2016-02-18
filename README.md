## nativejsx-loader [![Build Status](https://travis-ci.org/treycordova/nativejsx-loader.svg?branch=master)](https://travis-ci.org/treycordova/nativejsx-loader) [![Version Status](https://img.shields.io/npm/v/nativejsx-loader.svg)](https://www.npmjs.org/package/nativejsx-loader)
#### Webpack loader for [nativejsx](https://github.com/treycordova/nativejsx).
So you're using Webpack. Of course you are – have a loader.
#### Example
```javascript
let config = {
  // ...
  module: {
    preLoaders: [
      {
        test: /\.jsx$/,
        loader: 'nativejsx-loader',
        excludes: /node_modules/,
        query: {
          variablePrefix: '_',
          declarationType: 'let'
        }
      }
    ]
  }
};
```
#### Juicy Note :godmode:
With Webpack modules, we're able to include nativejsx dependencies for you.

*(That means don't worry about `appendChildren.js` and `setAttributes.js`.)*
