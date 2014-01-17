"use strict";
var ADAJAWM = ADAJAWM || {};
ADAJAWM.windows = ADAJAWM.windows || {};

// Konstruktor
ADAJAWM.windows.RssFeed = function RssFeed(placementID, url) {
    var currentUrl = url;
    var that = this;
    
    this.getUrl = function() {
        return currentUrl;
    };
    
    this.setUrl = function(newUrl) {
        currentUrl = newUrl;
    };
    
    this.getPlacement = function() {
        return placementID;
    };

    // Uppdatera Rss-flöde
    this.updateRssFeed = function(newsArray) {
        var windowFooter = [], placementID = document.getElementById(that.getPlacement());
        
        windowFooter = placementID.parentNode.getElementsByClassName("windowFooter");
        
        while (windowFooter[0].hasChildNodes()) {
            windowFooter[0].firstChild.parentNode.removeChild(windowFooter[0].firstChild);
        }
        
        while (placementID.hasChildNodes()) {
            placementID.firstchild.parentNode.removeChild(placementID.firstChild);
        }
        
        placementID.innerHTML += newsArray;
        
        window.setTimeout(function() {
            new ADAJAWM.script.AjaxCon(that.getUrl(), that.updateRssFeed);
        }, 60000);
    };

    // Initiering av ny Rss-läsare
    this.start = function() {
        var placement, loadP, loadText;
        new ADAJAWM.script.AjaxCon(this.getUrl(), this.updateRssFeed);
        
        placement = document.getElementById(that.getPlacement()).parentNode.getElementsByClassName("windowFooter");
        loadP = document.createElement("p");
        loadText = document.createTextNode("Laddar...");
        loadP.appendChild(loadText);
        loadP.setAttribute("class", "waitMessage");
        placement[0].appendChild(loadP);
    };
};