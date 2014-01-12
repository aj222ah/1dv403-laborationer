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
    window.open(address, windowName, attr);
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

ADAJAWM.windows.MemoryGameWindow = function MemoryGameWindow() {
    var height = 440;
    var width = 560;
    
    this.getHeightString = function() {
        return "height=" + height + "px,";
    };
    
    this.getWidthString = function() {
        return "width=" + width + "px,";
    };
};

ADAJAWM.windows.MemoryGameWindow = new ADAJAWM.windows.BasicWindow();

ADAJAWM.windows.RSSFeedWindow = function RSSFeedWindow() {
    var height = 440;
    var width = 560;
    
    this.getHeightString = function() {
        return "height=" + height + "px,";
    };
    
    this.getWidthString = function() {
        return "width=" + width + "px,";
    };
};

ADAJAWM.windows.RSSFeedWindow = new ADAJAWM.windows.BasicWindow();
*/
ADAJAWM.AppManager = {
    windowArray : [],
    windowCounter : 0,
    imageWebpage : "https://c9.io/aj222ah/1dv403laborationer-aj222ah/workspace/5-pwd/pages/imageViewer.html",
    memoryWebpage : "https://c9.io/aj222ah/1dv403laborationer-aj222ah/workspace/5-pwd/memory/memoryPlayer.html",
    rssWebpage : "https://c9.io/aj222ah/1dv403laborationer-aj222ah/workspace/5-pwd/pages/newsPage.html",
    
    init: function() {
        var picIcon = document.getElementById("imageIcon");
        var gameIcon = document.getElementById("gamesIcon");
        var newsIcon = document.getElementById("rssIcon");
        
        picIcon.addEventListener("click", ADAJAWM.AppManager.openImageViewerWindow, false);
        gameIcon.addEventListener("click", ADAJAWM.AppManager.openMemoryWindow, false);
        newsIcon.addEventListener("click", ADAJAWM.AppManager.openRssWindow, false);
        
    },
    
    openImageViewerWindow : function(e) {
        var windowName = "ImageViewer" + ADAJAWM.AppManager.windowCounter;
        ADAJAWM.AppManager.windowArray[ADAJAWM.AppManager.windowCounter] = window.open(ADAJAWM.AppManager.imageWebpage, windowName, "width=480px,height=500px");
        ADAJAWM.AppManager.windowCounter += 1;
    },
    
    openMemoryWindow : function(e) {
        var windowName = "Memory" + ADAJAWM.AppManager.windowCounter;
        ADAJAWM.AppManager.windowArray[ADAJAWM.AppManager.windowCounter] = window.open(ADAJAWM.AppManager.memoryWebpage, windowName, "width=560px,height=440px,scrollable=no");
        ADAJAWM.AppManager.windowCounter += 1;
    },
    
    openRssWindow : function(e) {
        var windowName = "RssFeed" + ADAJAWM.AppManager.windowCounter;
        ADAJAWM.AppManager.windowArray[ADAJAWM.AppManager.windowCounter] = window.open(ADAJAWM.AppManager.rssWebpage, windowName, "width=400,height=600px,scrollable=no");
        ADAJAWM.AppManager.windowCounter += 1;
    },
     
};

window.addEventListener("load", ADAJAWM.AppManager.init, false);