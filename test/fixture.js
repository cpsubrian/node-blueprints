/**
 * @file
 * Synchronously work with fixtures.
 */

var fs = require('fs')
  , path = require('path')
  , basePath = path.resolve(__dirname, './fixtures')

module.exports = {

  /**
   * Read a fixture file and return its contents.
   *
   * @param relativePath
   *   The path to a file relative to ./fixtures.
   *
   * @return The file contents.
   */
  read: function(relativePath) {
    return fs.readFileSync(path.resolve(basePath, relativePath), 'utf8');
  }

};