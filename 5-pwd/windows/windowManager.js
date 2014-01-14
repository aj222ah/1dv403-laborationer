"use strict";
var ADAJAWM = ADAJAWM || {};
ADAJAWM.windows = ADAJAWM.windows || {};

ADAJAWM.windows.BasicWindow = function(width, height) {
};

ADAJAWM.windows.BasicWindow.prototype.getAttrString = function() {
};

ADAJAWM.windows.BasicWindow.prototype.openNew = function() {
};

ADAJAWM.windows.GalleryWindow = function() {
    
    ADAJAWM.windows.BasicWindow.call();
};

ADAJAWM.windows.GalleryWindow = new ADAJAWM.windows.BasicWindow();

ADAJAWM.windows.MemoryGameWindow = function() {
    
    ADAJAWM.windows.BasicWindow.call();
};

ADAJAWM.windows.MemoryGameWindow = new ADAJAWM.windows.BasicWindow();

ADAJAWM.windows.RSSFeedWindow = function() {
    
    ADAJAWM.windows.BasicWindow.call();
};

ADAJAWM.windows.RSSFeedWindow = new ADAJAWM.windows.BasicWindow();

ADAJAWM.DesktopManager = {
    windowArray : [],
    windowCounter : 0,
    
    init: function() {
        var picIcon = document.getElementById("imageIcon");
        var gameIcon = document.getElementById("gamesIcon");
        var newsIcon = document.getElementById("rssIcon");
        
        picIcon.addEventListener("click", ADAJAWM.DesktopManager.openGalleryWindow, false);
        gameIcon.addEventListener("click", ADAJAWM.DesktopManager.openMemoryGameWindow, false);
        newsIcon.addEventListener("click", ADAJAWM.DesktopManager.openRssFeedWindow, false);
        
    },
    
    openGalleryWindow : function(e) {
    },
    
    openMemoryGameWindow : function(e) {
    },
    
    openRssFeedWindow : function(e) {
    },
     
};

window.addEventListener("load", ADAJAWM.DesktopManager.init, false);