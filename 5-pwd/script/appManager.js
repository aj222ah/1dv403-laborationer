"use strict";
var ADAJAWM = ADAJAWM || {};
ADAJAWM.windows = ADAJAWM.windows || {};
/*
ADAJAWM.windows.BasicWindow = function BasicWindow(width, height) {
    var resize = "no";
    var scroll = "no"
    var statusBar = "yes"
    
    this.setResize = function(resizable) {
        resize = resizable;
    };
    
    this.getResize = function() {
        return resize;
    };
    
    this.setScroll = function(scrollable) {
        scroll = scrollable;
    };
    
    this.getScroll = function() {
        return scroll;
    };
    
    this.setStatusBar = function(status) {
        statusBar = status;
    };
    
    this.getStatusBar = function() {
        return statusBar;
    };
    
    this.setHeight = function(winHeight) {
        height = winHeight;
    };
    
    this.getHeight = function() {
        return height;
    };
    
    this.setWidth = function(winWidth) {
        width = winWidth;
    };
    
    this.getWidth = function() {
        return width;
    };
};

ADAJAWM.windows.BasicWindow.prototype.getAttrString = function() {
    return "width=" + ADAJAWM.windows.BasicWindow.getWidth() + "px,height=" + ADAJAWM.windows.BasicWindow.getHeight() + "px,resize=" + ADAJAWM.windows.BasicWindow.getResize() + ",scrollbars=" + ADAJAWM.windows.BasicWindow.getScroll() + ",status=" + ADAJAWM.windows.BasicWindow.getStatusBar();
};

ADAJAWM.windows.BasicWindow.prototype.openNew = function(address, windowName, attr) {
    window.open(address, windowName, attr);
};

ADAJAWM.windows.ImageViewerWindow = function ImageViewerWindow() {
    var height = 500;
    var width = 480;
};

ADAJAWM.windows.ImageViewerWindow = new ADAJAWM.windows.BasicWindow();

ADAJAWM.windows.MemoryGameWindow = function MemoryGameWindow() {
    var height = 440;
    var width = 560;
};

ADAJAWM.windows.MemoryGameWindow = new ADAJAWM.windows.BasicWindow();

ADAJAWM.windows.RSSFeedWindow = function RSSFeedWindow() {
    var height = 440;
    var width = 560;
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
        ADAJAWM.AppManager.windowArray[ADAJAWM.AppManager.windowCounter] = window.open(ADAJAWM.AppManager.imageWebpage, windowName, "width=480px,height=500px,status=yes");
        ADAJAWM.AppManager.windowCounter += 1;
    },
    
    openMemoryWindow : function(e) {
        var windowName = "Memory" + ADAJAWM.AppManager.windowCounter;
        ADAJAWM.AppManager.windowArray[ADAJAWM.AppManager.windowCounter] = window.open(ADAJAWM.AppManager.memoryWebpage, windowName, "width=560px,height=440px,scrollbars=no,status=yes");
        ADAJAWM.AppManager.windowCounter += 1;
    },
    
    openRssWindow : function(e) {
        var windowName = "RssFeed" + ADAJAWM.AppManager.windowCounter;
        ADAJAWM.AppManager.windowArray[ADAJAWM.AppManager.windowCounter] = window.open(ADAJAWM.AppManager.rssWebpage, windowName, "width=580px,height=600px,scrollbars=no,status=yes");
        ADAJAWM.AppManager.windowCounter += 1;
    },
     
};

window.addEventListener("load", ADAJAWM.AppManager.init, false);