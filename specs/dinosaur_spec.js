var assert = require('assert');
var Dinosaur = require('../dinosaur.js');


describe("Dinosaur", function(){
  var velociraptor = new Dinosaur("Velociraptor", 1);
  var triceratops = new Dinosaur("Triceratops", 2);
  var raptorjesus = new Dinosaur("Raptor Jesus", 3);



it('should have a type', function(){
  assert.strictEqual("Raptor Jesus", raptorjesus.type)
})

it('should have a number of offspring', function(){
  assert.strictEqual(3, raptorjesus.offspring);
});


});