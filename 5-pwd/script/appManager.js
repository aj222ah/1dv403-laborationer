"use strict";
var ADAJAWM = ADAJAWM || {};

ADAJAWM.Window = function() {
};

ADAJAWM.ImageViewerWindow = function(e) {
    alert("Hej!");
};

ADAJAWM.MemoryWindow = function(e) {
    alert("Hopp!");
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