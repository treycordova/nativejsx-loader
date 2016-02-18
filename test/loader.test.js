var fs = require('fs');
var assert = require('chai').assert;
var webpack = require('webpack');
var path = require('path');

var outputDir = path.resolve('./test/output/loader');
var nativejsxLoader = path.resolve('./index.js');

var config = {
  entry: './test/fixtures/test.jsx',
  output: {
    path: outputDir,
    filename: '[id].loader.js',
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx$/,
        loader: nativejsxLoader,
        excludes: /node_modules/,
        query: {
          variablePrefix: '_'
        }
      }
    ]
  }
};

describe('loader', function() {
  it('transpiles JSX to native DOM', function(done) {
    webpack(config, function(err, stats) {
      fs.readdir(outputDir, function(err, files) {
        assert.isNull(err);
        assert.lengthOf(files, 1);

        fs.readFile(path.resolve(outputDir, files[0]), {encoding: 'utf8'}, function(err, source) {
          assert.match(source, /var _a = document\.createElement\('div'\)/);
          assert.match(source, /setAttributes/);
          assert.match(source, /appendChildren/);
          done();
        });
      });
    });
  });
});
