var loaderUtils = require('loader-utils');
var nativejsx = require('nativejsx');

module.exports = function(source) {
  this.cacheable && this.cacheable(true);

  var query = loaderUtils.parseQuery(this.query);
  var tree = [];

  if (query && (query.prototypes !== 'inline')) {
    tree.push("require('nativejsx/dist/nativejsx-prototypes.js');");
  }
  tree.push(nativejsx.transpile(source, query));

  return tree.join('\n');
};
