var loaderUtils = require('loader-utils');
var jsxdom = require('jsxdom');

module.exports = function(source) {
  var query = loaderUtils.parseQuery(this.query);
  var req = loaderUtils.getRemainingRequest(this);

  this.cacheable(true);

  return jsxdom.transpile(
    source,
    query
  );
};
