"use strict";
var ADAJAWM = ADAJAWM || {};
ADAJAWM.windows = ADAJAWM.windows || {};

ADAJAWM.windows.BasicWindow = function(width, height) {
    var topPosition, leftPosition;
};

ADAJAWM.windows.BasicWindow.prototype.getAttrString = function() {
};

ADAJAWM.windows.BasicWindow.prototype.openNew = function() {
};

ADAJAWM.windows.GalleryWindow = function(windowID) {
    var placementArea = document.getElementById("windowDisplayArea");
    var section, title, titleText, statusbar, galleryDiv;
    var tempGallery;
    
    section = document.createElement("section");
    section.setAttribute("class", "galleryWindow");
    title = document.createElement("p");
    titleText = document.createTextNode("Bildgalleri");
    title.setAttribute("class", "windowHeader");
    galleryDiv = document.createElement("div");
    galleryDiv.setAttribute("id", windowID);
    galleryDiv.setAttribute("class", "galleryArea");
    statusbar = document.createElement("p");
    statusbar.setAttribute("class", "windowFooter");
    
    title.appendChild(titleText);
    section.appendChild(title);
    section.appendChild(galleryDiv);
    section.appendChild(statusbar);
    placementArea.appendChild(section);
    
    tempGallery = new ADAJAWM.windows.ImageGallery(windowID);
    tempGallery.start();
    
    //ADAJAWM.windows.BasicWindow.call();
};

//ADAJAWM.windows.GalleryWindow = new ADAJAWM.windows.BasicWindow();

ADAJAWM.windows.MemoryGameWindow = function(windowID) {
    var placementArea = document.getElementById("windowDisplayArea");
    var section, title, titleText, statusbar, gameDiv;
    var tempGame;
    
    section = document.createElement("section");
    section.setAttribute("class", "memoryWindow");
    title = document.createElement("p");
    titleText = document.createTextNode("Memory");
    title.setAttribute("class", "windowHeader");
    gameDiv = document.createElement("div");
    gameDiv.setAttribute("id", windowID);
    gameDiv.setAttribute("class", "gameArea");
    statusbar = document.createElement("p");
    statusbar.setAttribute("class", "windowFooter");
    
    title.appendChild(titleText);
    section.appendChild(title);
    section.appendChild(gameDiv);
    section.appendChild(statusbar);
    placementArea.appendChild(section);
    
    tempGame = new ADAJAWM.windows.memory.Memory(4, 6, windowID);
    tempGame.start();
    //ADAJAWM.windows.BasicWindow.call();
};

//ADAJAWM.windows.MemoryGameWindow = new ADAJAWM.windows.BasicWindow();

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
        var id = "gallery" + ADAJAWM.DesktopManager.windowCounter;
        ADAJAWM.DesktopManager.windowArray[ADAJAWM.DesktopManager.windowCounter] = new ADAJAWM.windows.GalleryWindow(id);
        ADAJAWM.DesktopManager.windowCounter += 1;
    },
    
    openMemoryGameWindow : function(e) {
        var id = "memory" + ADAJAWM.DesktopManager.windowCounter;
        ADAJAWM.DesktopManager.windowArray[ADAJAWM.DesktopManager.windowCounter] = new ADAJAWM.windows.MemoryGameWindow(id);
        ADAJAWM.DesktopManager.windowCounter += 1;
    },
    
    openRssFeedWindow : function(e) {
        alert("Funkar!");
    },
     
};

window.addEventListener("load", ADAJAWM.DesktopManager.init, false);