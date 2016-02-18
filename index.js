var loaderUtils = require('loader-utils');
var nativejsx = require('nativejsx');

module.exports = function(source) {
  this.cacheable && this.cacheable(true);

  var query = loaderUtils.parseQuery(this.query);
  var tree = [
    "require('nativejsx/dist/jsxdom-prototypes.js');",
    nativejsx.transpile(source, query)
  ];

  return tree.join('\n');
};
