"use strict";
var ADAJAWM = ADAJAWM || {};
ADAJAWM.windows = ADAJAWM.windows || {};
/*
ADAJAWM.windows.BasicWindow = function BasicWindow() {
    var resize = "no";
    var resizeString = "resize=";
    
    this.getResizeString = function() {
        return resizeString + resize;
    };
    
    this.setResize = function(resizable) {
        resize = resizable;
    };
};

ADAJAWM.windows.BasicWindow.prototype.getResizeString = function() {
    return ADAJAWM.windows.BasicWindow.getResizeString();
};

ADAJAWM.windows.BasicWindow.prototype.openNew = function(address, windowName, attr) {
    window.open(address, name, attr);
};

ADAJAWM.windows.ImageViewerWindow = function ImageViewerWindow() {
    var height = 500;
    var width = 650;
    
    this.getHeightString = function() {
        return "height=" + height + "px,";
    };
    
    this.getWidthString = function() {
        return "width=" + width + "px,";
    };
};

ADAJAWM.windows.ImageViewerWindow = new ADAJAWM.windows.BasicWindow();
*/
ADAJAWM.AppManager = {
    windowArray : [],
    windowCounter : 0,
    
    init: function() {
        var picIcon = document.getElementById("imageIcon");
        var gameIcon = document.getElementById("gamesIcon");
        var newsIcon = document.getElementById("rssIcon");
        
        picIcon.addEventListener("click", ADAJAWM.AppManager.imageViewerWindow, false);
        gameIcon.addEventListener("click", ADAJAWM.AppManager.memoryWindow, false);
        newsIcon.addEventListener("click", ADAJAWM.AppManager.rssWindow, false);
        
    },
    
    imageViewerWindow : function(e) {
        alert("Hej!");
    },
    
    memoryWindow : function(e) {
        var windowName = "Memory" + ADAJAWM.AppManager.windowCounter;
        ADAJAWM.AppManager.windowArray[ADAJAWM.AppManager.windowCounter] = window.open("memory/memoryPlayer.html", windowName, "width=560,height=440px,scrollable=no");
        ADAJAWM.AppManager.windowCounter += 1;
    },
    
    rssWindow : function(e) {
        alert("Tomtesnopp!");
    },
     
};

window.addEventListener("load", ADAJAWM.AppManager.init, false);