"use strict";

function Memory (rows, cols, placeHolder) {
    var bricks = [];
    var pairs;
    var rounds;
    
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
}

Memory.prototype.start = function() {
    var boardPlacement = document.getElementById(this.getPlaceHolder());
    var imageLocation ="pics/0.png";
    var table, thead, th, tbody, tr = [], td = [], text, contentSurround = [], content = [],  rowCount, colCount, brickCount = 0;
    
    this.bricks = RandomGenerator.getPictureArray(this.getRows(), this.getCols());
    
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
            contentSurround[colCount].setAttribute("class", "brickAccessArray " + this.bricks[brickCount]);
            content[colCount] = document.createElement("img");
            content[colCount].setAttribute("src", imageLocation);
            content[colCount].setAttribute("alt", "Baksida på en memorybricka");
            content[colCount].setAttribute("class", "false");
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
};

Memory.prototype.play = function() {
    var gameBricks = document.getElementsByClassName("brickAccessArray");
    var i;
    
    for(i = 0; i < gameBricks.length; i++) {
        gameBricks[i].addEventListener("click", this.flip, false);
    }
    
    
};

Memory.prototype.flip = function(e) {
    if (!e) { var e = window.event; }
    var flipped = false;
    var address;
    var brickNo;
    
    if(this.firstChild.className === flipped) {
        address = this.firstChild.src;
        alert(this.firstChild.src);
        brickNo = function() {
            var index = this.className.search(" ");
            return this.className.splice(index);
        };
        alert(brickNo);
    }
};

var MemoryApp = {
    
    init: function() {
      var memoryGame1 = new Memory(3, 4, "game1");
      memoryGame1.start();
      memoryGame1.play();
    },
};

window.addEventListener("load", MemoryApp.init, false);