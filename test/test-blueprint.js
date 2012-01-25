/**
 * @file
 * Test functionality of the Blueprint object.
 */

var Blueprint = require('../lib/blueprint.js')
  , path = require('path')
;

describe('Blueprint object', function() {  
  var testPaths = {
    tcp:            path.resolve(__dirname, './blueprints/tcp')
  , webserver:      path.resolve(__dirname, './blueprints/webserver')
  , badjson:        path.resolve(__dirname, './blueprints/badjson')
  , incompletejson: path.resolve(__dirname, './blueprints/incompletejson')
  };

  describe('Constructor', function() {
    var tcpBlueprint = new Blueprint(testPaths.tcp)

    it('should return a Blueprint object', function() {
      tcpBlueprint.should.be.an.instanceof(Blueprint);
    });

    it('should have the path set', function() {
      tcpBlueprint.should.have.property('path', testPaths.tcp);
    });
  });

  describe('Validate', function() {
    describe ('A valid blueprint', function() {
      
    });

    describe('A blueprint with invalid json', function() {
      
    });

    describe('A blueprint with missing properties', function(){
      
    });    
  });

});