## jsxdom-loader
#### Webpack loader for jsxdom.
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
