"use strict";

function Memory (rows, cols, placeHolder) {
    var bricks = [];
    var pairs = 0;
    var rounds = 0;
    var that = this;
    
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
        var brickArray = document.getElementsByClassName("brickAccessArray");
        var imageLocation ="pics/0.png";
        var flippedArray = [], i;
        var address, index, classString, brickValues = [];
        var brickNo, newAddress, noOfFlipped = 0, x = 0;
        
        address = this.firstChild.getAttribute("src");
        classString = this.getAttribute("class");
        index  = classString.search(" ");
        brickNo = classString.slice(index + 1);
        newAddress = address.replace("0", brickNo);
        this.firstChild.setAttribute("src", newAddress);
        this.firstChild.setAttribute("class", "true");
            
        for(i = 0; i < brickArray.length; i++) {
            flippedArray[i] = brickArray[i].firstChild.getAttribute("class");
            if (flippedArray[i] === "true") {
                noOfFlipped += 1;
            }
        }
        
        alert(that.bricks.length);
        if(noOfFlipped === 2) {
            for(i = 0; i < flippedArray.length; i++) {
                if (flippedArray[i] === true) {
                    brickValues[x] = Memory.bricks[i];
                }
            }
            if (brickValues[0] === brickValues[1]) {
                for(i = 0; i < flippedArray.length; i++) {
                    if (flippedArray[i] === true) {
                        brickArray[i].removeEventListener("click", this.flip, false);
                        brickArray[i].firstChild.setAttribute("class", "match");
                    }
                }
                Memory.pairs += 1;
                Memory.rounds += 1;
            }
            else {
                setTimeout(function() {
                    for(i = 0; i < flippedArray.length; i++) {
                        if (flippedArray[i] === true) {
                            brickArray[i].firstChild.setAttribute("src", imageLocation);
                             brickArray[i].firstChild.setAttribute("class", "true");
                             Memory.rounds += 1;
                        }
                    }
                }, 1000);
            }
        }
        alert(that.rounds);
    };
}

var MemoryApp = {
    
    init: function() {
      var memoryGame1 = new Memory(3, 4, "game1");
      memoryGame1.start();
      memoryGame1.play();
    },
};

window.addEventListener("load", MemoryApp.init, false);