var loaderUtils = require('loader-utils');
var nativejsx = require('nativejsx');

module.exports = function(source) {
  this.cacheable && this.cacheable(true);

  var options = loaderUtils.getOptions(this);
  var tree = [];

  if (options && (options.prototypes !== 'inline') && (options.prototypes !== 'module')) {
    tree.push("require('nativejsx/dist/nativejsx-prototypes.js');");
  }
  tree.push(nativejsx.transpile(source, options));

  return tree.join('\n');
};
