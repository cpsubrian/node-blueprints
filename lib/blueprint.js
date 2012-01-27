/**
 * @file
 * Defines the Blueprint object and its methods.
 */

var path = require('path');

/**
 * Blueprint object.
 */
var Blueprint = function(path) {
  // The path to the blueprint root folder.
  this.path = path;

  // Info parsed and validated from blueprint.json.
  // @see JSON.md for information about the available
  // properties.
  this.info = null;
}

/**
 * Check for and parse a blueprint.json file at the specified path.
 */
Blueprint.prototype.getJSON = function(callback) {
  if (this.blueprint === null) {
    process.nextTick(function() {
      callback(null);
    });
  }
  else {
    process.nextTick(function() {
      callback(null);
    });
  }
}

/**
 * Validate that the path points to a valid blueprint identified by a
 * blueprint.json file with all the required values present.
 */
Blueprint.prototype.validate = function(callback) {
  process.nextTick(function() {
    callback(new Error('Derp, there was an error.'));
  });
}

/**
 * Return the blueprint info.
 */
Blueprint.prototype.getInfo = function() {
  if (this.info === null) {
    return new Error('No info found. Make sure the json has been fetched and validated first.');
  }
  else {
    return this.info;
  }
}

module.exports = Blueprint;
