/**
 * Blueprints
 *
 * A command-line utility for initializing project structures.
 */
var Blueprint = require('./blueprint');
var blueprints = module.exports = {
  cache: null
};

/**
 * Load a blueprint from a given path.
 */
blueprints.load = function(path, callback) {
  var blueprint = new Blueprint(path);
  blueprint.getJSON(function(err) {
    if (err) callback(err);
    blueprint.validate(function(err) {
      callback(err, blueprint);
    });
  });
}

/**
 * Load and cache all locally stored blueprints.
 */
blueprints.loadLocal = function(callback) {
  if (blueprints.cache === null) {
    // Loop through local locations and load, validate, and cache any blueprints
    // found.
    callback(blueprints.cache);
  }
  else {
    callback(blueprints.cache);
  }
}

/**
 * Search through local blueprints.
 *
 * @param search - An object containing search parameters.
 *   Available search parameters:
 *     - namespace
 *     - name
 *     - title
 *     - description
 *     - version
 *     - tags
 *     - languages
 *     - platforms
 */
blueprints.searchLocal = function(search, callback) {
  blueprints.loadLocal(function(results) {
    var i, length = results.length, matches = [];

    for (i = 0, i < length, i++) {
      if (blueprints.matchInfo(search, results[i]) {
        matches.push(results[i]);
      }
    }

    return matches;
  });
}

/**
 * Match search paramters against blueprint info.
 */
blueprints.matchInfo = function(search, blueprint) {
  return false;
}
