"use strict";
var ADAJAWM = ADAJAWM || {};
ADAJAWM.windows = ADAJAWM.windows || {};

// Konstruktorfunktion bildgalleri
ADAJAWM.windows.ImageGallery = function ImageGallery(placementID){
    var images = [];
    var that = this;
    
    this.setImages = function(imageArray) {
        images = JSON.parse(imageArray);
    };
    
    this.getImage = function(index) {
        return images[index];
    };
    
    this.getPlacement = function() {
        return placementID;
    };
    
    this.getImageUrl = function(index) {
        return images[index].URL;
    };
    
    this.getImageWidth = function(index) {
        return images[index].width;
    };
    
    this.getImageHeight = function(index) {
        return images[index].height;
    };
    
    this.getImageThumbURL = function(index) {
        return images[index].thumbURL;
    };
    
    this.getImageThumbWidth = function(index) {
        return images[index].thumbWidth;
    };
    
    this.getImageThumbHeight = function(index) {
        return images[index].thumbHeight;
    };
    
    this.getImageArrayLength = function() {
        return images.length;
    };
    
    // Funktion för att visa bilderna i arrayen
    this.displayThumbnails = function(picString) {
        var i, aList, widthString, heightString, placementID = document.getElementById(that.getPlacement());
        var imageLink, imageTag, windowFooter, thumbWidth = 0, thumbHeight = 0;
        
        windowFooter = placementID.parentNode.getElementsByClassName("windowFooter");
        
        while (windowFooter[0].hasChildNodes()) {
            windowFooter[0].firstChild.parentNode.removeChild(windowFooter[0].firstChild);
        }
        
        that.setImages(picString);
        
        for(i = 0; i < that.getImageArrayLength(); i++) {
            if (that.getImageThumbWidth(i) > thumbWidth) {
                thumbWidth = that.getImageThumbWidth(i);
            }
            if (that.getImageThumbHeight(i) > thumbHeight) {
                thumbHeight = that.getImageThumbHeight(i);
            }
        }
        
        widthString = thumbWidth + "px";
        heightString = thumbHeight + "px";
                    
        for(i = 0; i < that.getImageArrayLength(); i++) {
            imageLink = document.createElement("a");
            imageTag = document.createElement("img");
            imageLink.setAttribute("href", "#");
            imageLink.setAttribute("title", "Klicka för att se större");
            imageLink.setAttribute("id", "Bild " + i);
            imageTag.setAttribute("src", that.getImageThumbURL(i));
            imageTag.setAttribute("alt", "Bild " + (i + 1));
            imageLink.style.width = widthString;
            imageLink.style.height = heightString;
            imageLink.appendChild(imageTag);
            placementID.appendChild(imageLink);
        }
        
        aList = placementID.getElementsByTagName("a");
        for(i = 0; i < aList.length; i++) {
            aList[i].addEventListener("click", that.setBackgroundImage, false);
        }
    },

    // Funktion som sätter aktuell bild som skrivbordsbakgrund
    this.setBackgroundImage = function(e) {
        var imageID = this.getAttribute("id");
        var sliceIndex = imageID.indexOf(" ");
        var index = imageID.slice(sliceIndex + 1);
        var desktop = document.getElementById("desktop");
        
        desktop.style.backgroundImage = "url(" + that.getImageUrl(index) + ")";
    },

    // Funktion för initiering av hämtning av bilder
    this.start = function() {
        var url = "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/";
        new ADAJAWM.script.AjaxCon(url, this.displayThumbnails);
        var placement = [], loadText, loadP;
        
        window.setTimeout(function() {
            placement = document.getElementById(that.getPlacement()).parentNode.getElementsByClassName("windowFooter");
            loadP = document.createElement("p");
            loadText = document.createTextNode("Laddar...");
            loadP.appendChild(loadText);
            loadP.setAttribute("class", "waitMessage");
            placement[0].appendChild(loadP);
        }, 1000);
    };
};

    
