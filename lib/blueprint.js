/**
 * @file
 * Defines the Blueprint object and its methods.
 */

var path = require('path');

/**
 * Blueprint object.
 */
var Blueprint = function(path) {
  this.path = path;
  this.json = null;

  // Bind methods.
  this.validate = this.validate.bind(this);
  this.getJSON = this.getJSON.bind(this);
}

/**
 * Validate that the path points to a valid blueprint identified by a
 * blueprint.json file with all the required values present.
 */
Blueprint.prototype.validate = function(callback) {
  return false;
}

/**
 * Check for and parse a blueprint.json file at the specified path.
 */
Blueprint.prototype.getJSON = function(callback) {
  if (this.json === null) {
    
  }
  else {
    return callback(null, this.json);
  }
}

module.exports = Blueprint;
