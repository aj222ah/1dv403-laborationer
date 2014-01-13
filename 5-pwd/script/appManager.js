"use strict";
var ADAJAWM = ADAJAWM || {};
ADAJAWM.windows = ADAJAWM.windows || {};

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
        // array[index] = new window
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