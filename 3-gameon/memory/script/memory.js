"use strict";
function Brick (value) {
    var flipped = "false";
    var back = "pics/0.png";
    var front = "pics/" + value + ".png";
    
    this.getValue = function() {
        return value;
    };
    
    this.setValue = function(newValue) {
        value = newValue;
    };
    
    this.getStatus = function() {
        return flipped;
    };
    
    this.setStatus = function(flip) {
        flipped = flip;
    };
    
    this.getBack = function() {
        return back;
    };
    
    this.getFront = function() {
        return front;
    };
}
Brick.prototype.flip = function() {
    if (this.getStatus() === "true") {
        this.setStatus("false");
        return this.getBack();
    }
    else {
        this.setStatus("true");
        return this.getFront();
    }
        
};

function Memory(rows, cols, placeHolder) {
    var boardPlacement, brickAccessArray, brickRef1, brickRef2;
    var bricks = [];
    var pairs = 0, rounds = 0;
    var noOfPairs = (rows * cols) / 2;
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
    
    boardPlacement = document.getElementById(this.getPlaceHolder());
    
    this.start = function() {
        var tempBricks = RandomGenerator.getPictureArray(this.getRows(), this.getCols());
        var rowCount = 0, colCount = 0, brickCount = 0;
        var tr = [], td = [], content = [], contentSurround = [];
        var table, thead, th, text, tbody, i;
        
        for (i = 0; i < tempBricks.length; i++) {
            bricks[i] = new Brick(tempBricks[i]);
        }
        
        table = document.createElement("table");
        table.setAttribute("rows", this.getRows());
        table.setAttribute("cols", this.getCols());
        thead = document.createElement("thead");
        th = document.createElement("th");
        th.setAttribute("colspan", this.getCols());
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
        
        brickAccessArray  = boardPlacement.getElementsByClassName("brickAccessArray");
        
        for(i = 0; i < brickAccessArray.length; i++) {
            brickAccessArray[i].addEventListener("click", this.play, false);
        }
    };
    
    this.play = function(e) {
        if (!e) { var e = window.event; }
        var classString = this.getAttribute("class");
        var messageP, messageText;
        var identifier = function() {
            var index  = classString.search(" ");
            var brickNo = classString.slice(index + 1);
            return brickNo;
        }();
        var flippedCount = (function() {
            var temp  = 0, i;
            for (i = 0; i < bricks.length; i++) {
                if (bricks[i].getStatus() === "true") {
                    temp += 1;
                }
            }
            return temp;
        })();
        
        if (flippedCount === 0) {
            brickRef1 = identifier;
            this.firstChild.setAttribute("src", bricks[brickRef1].flip());
            brickAccessArray[brickRef1].removeEventListener("click", that.play, false);
        }
        else if (flippedCount === 1) {
            brickRef2 = identifier;
            this.firstChild.setAttribute("src", bricks[brickRef2].flip());
            if (bricks[brickRef1].getValue() === bricks[brickRef2].getValue()) {
                bricks[brickRef1].setStatus("match");
                bricks[brickRef2].setStatus("match");
                brickAccessArray[brickRef2].removeEventListener("click", that.play, false);
                pairs += 1;
                rounds += 1;
                if (pairs === noOfPairs) {
                    messageP = document.createElement("p");
                    messageText = document.createTextNode("Grattis! Det tog dig " + rounds + " omgångar att klara memoryt.");
                    messageP.appendChild(messageText);
                    boardPlacement.appendChild(messageP);
                }
            }
            else {
                setTimeout(function() {
                    brickAccessArray[brickRef1].firstChild.setAttribute("src", bricks[brickRef1].flip());
                    brickAccessArray[brickRef2].firstChild.setAttribute("src", bricks[brickRef2].flip());
                    brickAccessArray[brickRef1].addEventListener("click", that.play, false);
                    brickAccessArray[brickRef2].addEventListener("click", that.play, false);
                }, 1000);
                rounds += 1;
            }
        }
    };
}

var MemoryApp = {
    init: function() {
      var memoryGame1 = new Memory(3, 4, "game1");
      var memoryGame2 = new Memory(4, 3, "game2");
      memoryGame1.start();
      memoryGame2.start();
    },
};

window.addEventListener("load", MemoryApp.init, false);