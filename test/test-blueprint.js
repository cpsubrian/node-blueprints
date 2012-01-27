/**
 * @file
 * Test functionality of the Blueprint object.
 */

var Blueprint = require('../lib/blueprint.js')
  , path = require('path')
  , should = require('should')
;

describe('Blueprint object', function() {  

  // Test the TCP blueprint.
  describe ('A valid blueprint', function() {
    var tcpPath = path.resolve(__dirname, './blueprints/tcp')
      , blueprint = new Blueprint(tcpPath)
      , error = null
    ;

    describe('Constructor', function() {
      it('should return a Blueprint object', function() {
        blueprint.should.be.an.instanceof(Blueprint);
      });

      it('should have the path set', function() {
        blueprint.should.have.property('path', tcpPath);
      });
    });

    describe('Validate', function() {
      before(function(done) {
        blueprint.validate(function(err){
          error = err;
          done();
        })
      });

      it('should run with no errors', function() {
        should.not.exist(error);
      })
    });
  });

  // Test the Bad JSON blueprint.
  describe('A blueprint with invalid json', function() {
    var blueprint = new Blueprint(path.resolve(__dirname, './blueprints/badjson'))
      , error = null
    ;

    describe('Validate', function() {
      before(function(done) {
        blueprint.validate(function(err){
          error = err;
          done();
        })
      });

      it('should set the correct error message', function() {
        console.log(error);
        error.should.have.property('message', 'Invalid blueprint.json.  Could not parse.');
      })
    });
  });

  // Test th Incomplete JSON blueprint
  describe('A blueprint with missing properties', function(){
    var blueprint = new Blueprint(path.resolve(__dirname, './blueprints/incompletejson'))
      , error = null
    ;

    describe('Validate', function() {
      before(function(done) {
        blueprint.validate(function(err){
          error = err;
          done();
        })
      });

      it('should set the correct error message', function() {
        error.should.have.property('message', 'Missing required propertie(s): namespace, name.');
      })
    });    
  });

  // Test th Missing JSON blueprint
  describe('A blueprint with missing json', function(){
    var blueprint = new Blueprint(path.resolve(__dirname, './blueprints/missingjson'))
      , error = null
    ;

    describe('Validate', function() {
      before(function(done) {
        blueprint.validate(function(err){
          error = err;
          done();
        })
      });

      it('should set the correct error message', function() {
        error.should.have.property('message', 'No blueprint.json found.');
      })
    });    
  });

});