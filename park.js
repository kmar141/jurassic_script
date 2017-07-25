var Park = function(){
  this.dinosaurs = [];
};

Park.prototype = {
  addDinosaur: function(dinosaur){
    this.dinosaurs.push(dinosaur);
  },

  removeByType: function(type) {
      for(var i = this.dinosaurs.length -1; i >= 0; i--) {
        var dinosaur = this.dinosaurs[i];
        if(dinosaur.type === type) {
          this.dinosaurs.splice(i, 1);
        }
      }
  },

  findByOffspring: function() {
      for(var i = this.dinosaurs.length -1; i >= 0; i--) {
        var dinosaur = this.dinosaurs[i];
        if(dinosaur.offspring < 2) {
          this.dinosaurs.splice(i, 1);
        }
      }
  }



}











module.exports = Park;