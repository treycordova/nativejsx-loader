var loaderUtils = require('loader-utils');
var jsxdom = require('jsxdom');

module.exports = function(source) {
  this.cacheable && this.cacheable(true);

  var query = loaderUtils.parseQuery(this.query);
  var tree = [
    "require('jsxdom/dist/appendChildren.js');",
    "require('jsxdom/dist/setAttributes.js');",
    jsxdom.transpile(source, query)
  ];

  return tree.join('\n');
};
