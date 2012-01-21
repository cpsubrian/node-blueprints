/**
 * Test the blueprints command-line tool.
 */
var path = require('path')
  , fs = require('fs')
  , exec = require('child_process').exec
  , cmd = path.resolve(__dirname, '../bin/blueprints')
  , should = require('should')
  , fixture = require('./fixture')
;

describe('Command-Line Interface', function() {

  /**
   * Test that commander is succesfully supplying --help.
   */
  describe('The --help option', function() {    
    it ('should return help text ', function(done) {
      exec(cmd + ' --help', function(err, stdout, stderr) {
        stdout.should.equal(fixture.read('help.txt'));
        done(err);
      });
    });
  });

  /**
   * Test that commander is succesfully supplying --version.
   */
  describe('The --version option', function() {    
    it ('should return the correct version', function(done) {
      exec(cmd + ' --version', function(err, stdout, stderr) {
        stdout.should.equal('0.0.1\n');
        done(err);
      });
    });
  });
    
});
