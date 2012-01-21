/**
 * @file
 * Test functionality of the Blueprint object.
 */

var Blueprint = require('../lib/blueprint.js')
  , path = require('path')
;

describe('Blueprint object', function() {  
  var paths = {
    tcp:            path.resolve(__dirname, './blueprints/tcp')
  , webserver:      path.resolve(__dirname, './blueprints/webserver')
  , badjson:        path.resolve(__dirname, './blueprints/badjson')
  , incompletejson: path.resolve(__dirname, './blueprints/incompletejson')
  };

  describe('Constructor', function() {
    var tcpBlueprint = new Blueprint(tcpPath)

    it('should return a Blueprint object', function() {
      tcpBlueprint.should.be.an.instanceof(Blueprint);
    });

    it('should have the path set', function() {
      tcpBlueprint.should.have.property('path', tcpPath);
    });
  });

  describe('Validate', function() {
  
    describe ('A valid blueprint', function() {
      var tcp
    });

    describe('A blueprint with invalid json', function() {
      
    });

    describe('A blueprint with missing properties', function(){
      
    });  
    
  });

});