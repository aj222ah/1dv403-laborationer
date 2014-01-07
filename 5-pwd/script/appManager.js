"use strict";
var ADAJAWM = ADAJAWM || {};
ADAJAWM.windows = ADAJAWM.windows || {};

ADAJAWM.WindowConstructor = function WindowConstructor(id, width, height, left, upper) {
    
    this.getId = function() {
        return id;
    };
  
    this.setId = function(ownId) {
        id = ownId;
    };
    
    this.getWidth = function() {
        return width;
    };
  
    this.setWidth = function(ownWidth) {
        width = ownWidth;
    };
  
    this.getHeigth = function() {
        return height;
    };
  
    this.setHeigth = function(ownHeight) {
        height = ownHeight;
    };
  
    this.getLeft = function() {
        return left;
    };
  
    this.setLeft = function(ownLeft) {
        left = ownLeft;
    };
    
    this.getUpper = function() {
        return upper;
    };
  
    this.setUpper = function(ownUpper) {
        upper = ownUpper;
    };
};
/*
ADAJAWM.Window = function() {
};*/

ADAJAWM.ImageViewerWindow = function(e) {
    alert("Hej!");
};

ADAJAWM.MemoryWindow = function(e) {
    window.open("memory/memoryPlayer.html", "Memory", "width=560,height=440px,scrollable=no");
};

ADAJAWM.RSSWindow = function(e) {
    alert("Tomtesnopp!");
};

ADAJAWM.AppManager = function() {
        var picIcon = document.getElementById("imageIcon");
        var gameIcon = document.getElementById("gamesIcon");
        var newsIcon = document.getElementById("rssIcon");
        
        picIcon.addEventListener("click", ADAJAWM.ImageViewerWindow, false);
        gameIcon.addEventListener("click", ADAJAWM.MemoryWindow, false);
        newsIcon.addEventListener("click", ADAJAWM.RSSWindow, false);
};

window.addEventListener("load", ADAJAWM.AppManager, false);