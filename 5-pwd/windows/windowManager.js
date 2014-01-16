"use strict";
var ADAJAWM = ADAJAWM || {};
ADAJAWM.windows = ADAJAWM.windows || {};

ADAJAWM.windows.BasicWindow = function(width, height) {
    var topPosition, leftPosition;
};

ADAJAWM.windows.GalleryWindow = function(windowNumber) {
    var placementArea = document.getElementById("windowDisplayArea");
    var windowID = "gallery" + windowNumber;
    var section, title, titleText, galleryDiv, headerDiv, footerDiv, closeLink, closeIcon;
    var tempGallery, closeMe;
    
    section = document.createElement("section");
    section.setAttribute("class", "galleryWindow");
    section.setAttribute("id", windowNumber);
    headerDiv = document.createElement("div");
    title = document.createElement("p");
    titleText = document.createTextNode("Bildgalleri");
    closeLink = document.createElement("a");
    closeLink.setAttribute("href", "#");
    closeLink.setAttribute("title", "Stäng fönster");
    closeLink.setAttribute("id", "close" + windowNumber);
    closeLink.setAttribute("class", "closeLink");
    closeIcon = document.createElement("img");
    closeIcon.setAttribute("src", "images/Close-icon.png");
    closeIcon.setAttribute("alt", "Stäng");
    closeIcon.setAttribute("class", "closeIcon");
    headerDiv.setAttribute("class", "windowHeader");
    galleryDiv = document.createElement("div");
    galleryDiv.setAttribute("id", windowID);
    galleryDiv.setAttribute("class", "galleryArea");
    footerDiv = document.createElement("div");
    footerDiv.setAttribute("class", "windowFooter");
    
    title.appendChild(titleText);
    headerDiv.appendChild(title);
    closeLink.appendChild(closeIcon);
    headerDiv.appendChild(closeLink);
    section.appendChild(headerDiv);
    section.appendChild(galleryDiv);
    section.appendChild(footerDiv);
    placementArea.appendChild(section);
    
    closeMe = document.getElementById("close" + windowNumber);
    closeMe.addEventListener("click", ADAJAWM.DesktopManager.closeWindow, false);
    
    tempGallery = new ADAJAWM.windows.ImageGallery(windowID);
    tempGallery.start();
    
    //ADAJAWM.windows.BasicWindow.call();
};

//ADAJAWM.windows.GalleryWindow = new ADAJAWM.windows.BasicWindow();

ADAJAWM.windows.MemoryGameWindow = function(windowNumber) {
    var placementArea = document.getElementById("windowDisplayArea");
    var windowID = "memory" + windowNumber;
    var section, title, titleText, footerDiv, gameDiv, closeMe, headerDiv, closeLink, closeIcon;
    var tempGame;
    
    section = document.createElement("section");
    section.setAttribute("class", "memoryWindow");
    section.setAttribute("id", windowNumber);
    headerDiv = document.createElement("div");
    title = document.createElement("p");
    titleText = document.createTextNode("Memory");
    closeLink = document.createElement("a");
    closeLink.setAttribute("href", "#");
    closeLink.setAttribute("title", "Stäng fönster");
    closeLink.setAttribute("id", "close" + windowNumber);
    closeLink.setAttribute("class", "closeLink");
    closeIcon = document.createElement("img");
    closeIcon.setAttribute("src", "images/Close-icon.png");
    closeIcon.setAttribute("alt", "Stäng");
    closeIcon.setAttribute("class", "closeIcon");
    headerDiv.setAttribute("class", "windowHeader");
    gameDiv = document.createElement("div");
    gameDiv.setAttribute("id", windowID);
    gameDiv.setAttribute("class", "gameArea");
    footerDiv = document.createElement("div");
    footerDiv.setAttribute("class", "windowFooter");
    
    title.appendChild(titleText);
    headerDiv.appendChild(title);
    closeLink.appendChild(closeIcon);
    headerDiv.appendChild(closeLink);
    section.appendChild(headerDiv);
    section.appendChild(gameDiv);
    section.appendChild(footerDiv);
    placementArea.appendChild(section);
    
    closeMe = document.getElementById("close" + windowNumber);
    closeMe.addEventListener("click", ADAJAWM.DesktopManager.closeWindow, false);
    
    tempGame = new ADAJAWM.windows.memory.Memory(4, 6, windowID);
    tempGame.start();
    //ADAJAWM.windows.BasicWindow.call();
};

//ADAJAWM.windows.MemoryGameWindow = new ADAJAWM.windows.BasicWindow();

ADAJAWM.windows.RSSFeedWindow = function(windowNumber) {
    var placementArea = document.getElementById("windowDisplayArea");
    var windowID = "rss" + windowNumber;
    var url = "http://homepage.lnu.se/staff/tstjo/labbyServer/rssproxy/?url="+escape("http://www.dn.se/m/rss/senaste-nytt");
    var section, title, titleText, footerDiv, feedDiv, closeMe, headerDiv, closeLink, closeIcon;
    var tempFeed;
    
    section = document.createElement("section");
    section.setAttribute("class", "rssWindow");
    section.setAttribute("id", windowNumber);
    headerDiv = document.createElement("div");
    title = document.createElement("p");
    titleText = document.createTextNode("RSSFeed");
    closeLink = document.createElement("a");
    closeLink.setAttribute("href", "#");
    closeLink.setAttribute("title", "Stäng fönster");
    closeLink.setAttribute("id", "close" + windowNumber);
    closeLink.setAttribute("class", "closeLink");
    closeIcon = document.createElement("img");
    closeIcon.setAttribute("src", "images/Close-icon.png");
    closeIcon.setAttribute("alt", "Stäng");
    closeIcon.setAttribute("class", "closeIcon");
    headerDiv.setAttribute("class", "windowHeader");
    feedDiv = document.createElement("div");
    feedDiv.setAttribute("id", windowID);
    feedDiv.setAttribute("class", "feedArea");
    footerDiv = document.createElement("div");
    footerDiv.setAttribute("class", "windowFooter");
    
    title.appendChild(titleText);
    headerDiv.appendChild(title);
    closeLink.appendChild(closeIcon);
    headerDiv.appendChild(closeLink);
    section.appendChild(headerDiv);
    section.appendChild(feedDiv);
    section.appendChild(footerDiv);
    placementArea.appendChild(section);
    
    closeMe = document.getElementById("close" + windowNumber);
    closeMe.addEventListener("click", ADAJAWM.DesktopManager.closeWindow, false);
    
    tempFeed = new ADAJAWM.windows.RssFeed(windowID, url);
    tempFeed.start();
    
    //ADAJAWM.windows.BasicWindow.call();
};

//ADAJAWM.windows.RSSFeedWindow = new ADAJAWM.windows.BasicWindow();

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
        ADAJAWM.DesktopManager.windowArray[ADAJAWM.DesktopManager.windowCounter] = new ADAJAWM.windows.GalleryWindow(ADAJAWM.DesktopManager.windowCounter);
        ADAJAWM.DesktopManager.windowCounter += 1;
    },
    
    openMemoryGameWindow : function(e) {
        ADAJAWM.DesktopManager.windowArray[ADAJAWM.DesktopManager.windowCounter] = new ADAJAWM.windows.MemoryGameWindow(ADAJAWM.DesktopManager.windowCounter);
        ADAJAWM.DesktopManager.windowCounter += 1;
    },
    
    openRssFeedWindow : function(e) {
        ADAJAWM.DesktopManager.windowArray[ADAJAWM.DesktopManager.windowCounter] = new ADAJAWM.windows.RSSFeedWindow(ADAJAWM.DesktopManager.windowCounter);
        ADAJAWM.DesktopManager.windowCounter += 1;
    },
    
    closeWindow : function(e) {
        var closeID = this.id;
        var closeWindow;
        this.removeEventListener("click", ADAJAWM.DesktopManager.closeWindow, false);
        
        closeID = closeID.slice(5);
        closeWindow = document.getElementById(closeID);
        closeWindow.parentNode.removeChild(closeWindow);
        ADAJAWM.DesktopManager.windowArray[closeID] = null;
    },
};

window.addEventListener("load", ADAJAWM.DesktopManager.init, false);