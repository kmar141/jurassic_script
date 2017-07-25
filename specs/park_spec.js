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
  emptyPark = new Park();
  assert.strictEqual(emptyPark.dinosaurs.length, 0);
});

it('should be able to add a dinosaur', function(){
  emptyPark = new Park();
  emptyPark.addDinosaur(raptorjesus);
  assert.strictEqual(emptyPark.dinosaurs.length, 1);
});

it('should be able to remove all dinosaurs of a particular type', function(){
  park.removeByType("Raptor Jesus");
  assert.strictEqual(park.dinosaurs.length, 2);
});

it('should be able to get all dinosaurs with 2 or more offspring', function(){
  park.findByOffspring();
  assert.strictEqual(2, park.dinosaurs.length);
});


});



