"use strict";
function Brick (value) {
    var flipped = false;
    var back = "pics/0.png";
    var front = "pics/" + value + ".png";
    
    this.getValue = function() {
        return value;
    };
    
    this.setValue = function(newValue) {
        value = newValue;
    };
    
    this.getFlipped = function() {
        return flipped;
    };
    
    this.setFlipped = function(flip) {
        flipped = flip;
    };
    
    this.getBack = function() {
        return back;
    };
    
    this.getFront = function() {
        return front;
    };
    
    /*
    this.prototype.flip = function(element) {
        
    };*/
}



var MemoryApp = {
    
    init: function() {
      var memoryGame1 = new Memory(3, 4, "game1");
      memoryGame1.start();
    },
};

window.addEventListener("load", MemoryApp.init, false);