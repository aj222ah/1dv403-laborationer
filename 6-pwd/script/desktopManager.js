"use strict";
var ADAJAWM = ADAJAWM || {};
ADAJAWM.windows = ADAJAWM.windows || {};

ADAJAWM.windows.BasicWindow = function(width, height) {
    var resize = "no";
    var scroll = "no";
    var statusBar = "yes";
    
    this.width = width;
	this.height = height;
    
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
    return "width=" + this.getWidth() + "px,height=" + this.getHeight() + "px,resize=" + this.getResize() + ",scrollbars=" + this.getScroll() + ",status=" + this.getStatusBar();
};

ADAJAWM.windows.BasicWindow.prototype.openNew = function(address, windowName, attr) {
    window.open(address, windowName, attr);
};

ADAJAWM.windows.GalleryWindow = function() {
    var height = 500;
    var width = 480;
    
    ADAJAWM.windows.BasicWindow.call(this, width, height);
};

ADAJAWM.windows.GalleryWindow = new ADAJAWM.windows.BasicWindow();

ADAJAWM.windows.MemoryGameWindow = function() {
    var height = 440;
    var width = 560;
    
    ADAJAWM.windows.BasicWindow.call(this, width, height);
};

ADAJAWM.windows.MemoryGameWindow = new ADAJAWM.windows.BasicWindow();

ADAJAWM.windows.RSSFeedWindow = function() {
    var height = 600;
    var width = 580;
    
    ADAJAWM.windows.BasicWindow.call(this, width, height);
};

ADAJAWM.windows.RSSFeedWindow = new ADAJAWM.windows.BasicWindow();

ADAJAWM.DesktopManager = {
    windowArray : [],
    windowCounter : 0,
    galleryAddress : "https://c9.io/aj222ah/1dv403laborationer-aj222ah/workspace/6-pwd/windows/gallery.html",
    memoryGameAddress : "https://c9.io/aj222ah/1dv403laborationer-aj222ah/workspace/6-pwd/windows/memoryGame.html",
    rssFeedAddress : "https://c9.io/aj222ah/1dv403laborationer-aj222ah/workspace/6-pwd/windows/rssFeed.html",
    
    init: function() {
        var picIcon = document.getElementById("imageIcon");
        var gameIcon = document.getElementById("gamesIcon");
        var newsIcon = document.getElementById("rssIcon");
        
        picIcon.addEventListener("click", ADAJAWM.DesktopManager.openGalleryWindow, false);
        gameIcon.addEventListener("click", ADAJAWM.DesktopManager.openMemoryGameWindow, false);
        newsIcon.addEventListener("click", ADAJAWM.DesktopManager.openRssFeedWindow, false);
        
    },
    
    openGalleryWindow : function(e) {
        var windowName = "ImageViewer" + ADAJAWM.DesktopManager.windowCounter;
        // array[index] = new window
        ADAJAWM.DesktopManager.windowArray[ADAJAWM.DesktopManager.windowCounter] = new ADAJAWM.windows.BasicWindow(480, 500);
        ADAJAWM.DesktopManager.windowArray[ADAJAWM.DesktopManager.windowCounter] = window.open(ADAJAWM.DesktopManager.galleryAddress, windowName, "width=480px,height=500px,status=yes");
        ADAJAWM.DesktopManager.windowCounter += 1;
    },
    
    openMemoryGameWindow : function(e) {
        var windowName = "Memory" + ADAJAWM.DesktopManager.windowCounter;
        // array[index] = new window
        ADAJAWM.DesktopManager.windowArray[ADAJAWM.DesktopManager.windowCounter] = new ADAJAWM.windows.BasicWindow(560, 440);
        ADAJAWM.DesktopManager.windowArray[ADAJAWM.DesktopManager.windowCounter].openNew(ADAJAWM.DesktopManager.memoryGameAddress, windowName, ADAJAWM.DesktopManager.windowArray[ADAJAWM.DesktopManager.windowCounter].getAttrString());
        ADAJAWM.DesktopManager.windowCounter += 1;
    },
    
    openRssFeedWindow : function(e) {
        var windowName = "RssFeed" + ADAJAWM.DesktopManager.windowCounter;
        // array[index] = new window
        ADAJAWM.DesktopManager.windowArray[ADAJAWM.DesktopManager.windowCounter] = new ADAJAWM.windows.BasicWindow(580, 600);
        ADAJAWM.DesktopManager.windowArray[ADAJAWM.DesktopManager.windowCounter] = window.open(ADAJAWM.DesktopManager.rssFeedAddress, windowName, "width=580px,height=600px,scrollbars=no,status=yes");
        ADAJAWM.DesktopManager.windowCounter += 1;
    },
     
};

window.addEventListener("load", ADAJAWM.DesktopManager.init, false);