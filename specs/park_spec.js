var assert = require('assert');
var Park = require('../park.js');
var Dinosaur = require('../dinosaur.js');

describe("Park", function(){
  var velociraptor = new Dinosaur("Velociraptor", 1);
  var triceratops = new Dinosaur("Triceratops", 2);
  var raptorjesus = new Dinosaur("Raptor Jesus", 3);
  var park;

beforeEach(function(){
  park = new Park();
  park.addDinosaur(velociraptor);
  park.addDinosaur(triceratops);
  park.addDinosaur(raptorjesus);
});

it('should start as an empty park', function(){
  assert.strictEqual(park.dinosaurs.length, 0);
});




})



