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
    
    
    Brick.prototype.flip = function() {
        if (this.getFlipped === true) {
            this.setFlipped(false);
            return this.getBack();
        }
        else {
            this.setFlipped(true);
            return this.getFront();
        }
        
    };
}

function Memory(rows, cols, placeHolder) {
    var bricks = [];
    var that = this;
    var brickAccessArray;
    
    this.getRows = function() {
        return rows;
    };
  
    this.setRows = function(customRows) {
        rows = customRows;
    };
  
    this.getCols = function() {
        return cols;
    };
  
    this.setCols = function(customCols) {
        cols = customCols;
    };
  
    this.getPlaceHolder = function() {
        return placeHolder;
    };
  
   this.setplaceHolder = function(id) {
        placeHolder = id;
    };
    
    this.start = function() {
        var boardPlacement = document.getElementById(this.getPlaceHolder());
        var tempBricks = RandomGenerator.getPictureArray(this.getRows(), this.getCols());
        var rowCount = 0, colCount = 0, brickCount = 0;
        var tr = [], td = [], content = [], contentSurround = [];
        var table, thead, th, text, tbody;
        var i;
        
        for (i = 0; i < tempBricks.length; i++) {
            bricks[i] = new Brick(tempBricks[i]);
        }
        
        table = document.createElement("table");
        table.setAttribute("rows", this.getRows());
        table.setAttribute("cols", this.getCols());
        thead = document.createElement("thead");
        th = document.createElement("th");
        th.setAttribute("colspan", "4");
        text = document.createTextNode("Memory");
        th.appendChild(text);
        thead.appendChild(th);
        tbody = document.createElement("tbody");
        
        for(rowCount = 0; rowCount < this.getRows(); rowCount++) {
            tr[rowCount] = document.createElement("tr");
            colCount = 0;
            
            do {
                td[colCount] = document.createElement("td");
                contentSurround[colCount] = document.createElement("a");
                contentSurround[colCount].setAttribute("href", "#");
                contentSurround[colCount].setAttribute("class", "brickAccessArray " + brickCount);
                content[colCount] = document.createElement("img");
                content[colCount].setAttribute("src", bricks[brickCount].getBack());
                content[colCount].setAttribute("alt", "Baksida på en memorybricka");
                contentSurround[colCount].appendChild(content[colCount]);
                td[colCount].appendChild(contentSurround[colCount]);
                tr[rowCount].appendChild(td[colCount]);
                colCount += 1;
                brickCount += 1;
            } while(colCount < this.getCols());
            
            tbody.appendChild(tr[rowCount]);
        }
        
        table.appendChild(thead);
        table.appendChild(tbody);
        boardPlacement.appendChild(table);
        
        brickAccessArray  = document.getElementsByClassName("brickAccessArray");
        
        for(i = 0; i < brickAccessArray.length; i++) {
            brickAccessArray[i].addEventListener("click", this.play, false);
        }
    };
    
    this.play = function(e) {
        
    };
}



var MemoryApp = {
    
    init: function() {
      var memoryGame1 = new Memory(3, 4, "game1");
      memoryGame1.start();
    },
};

window.addEventListener("load", MemoryApp.init, false);