"use strict";
var ADAJAWM = ADAJAWM || {};
ADAJAWM.windows = ADAJAWM.windows || {};


ADAJAWM.windows.MyImagesApp = {
    images : [],
    
    displayThumbnails: function(picArray) {
        var i, aList, widthString, heightString;
        var imageLink, imageTag, thumbWidth = 0, thumbHeight = 0;
        var placement = document.getElementById("displayArea");
        var waitMessage = document.getElementById("waitMessage");
        
        waitMessage.parentNode.removeChild(waitMessage);
        
        ADAJAWM.windows.MyImagesApp.images = JSON.parse(picArray);
        
        for(i = 0; i < ADAJAWM.windows.MyImagesApp.images.length; i++) {
            if (ADAJAWM.windows.MyImagesApp.images[i].thumbWidth > thumbWidth) {
                thumbWidth = ADAJAWM.windows.MyImagesApp.images[i].thumbWidth;
            }
            if (ADAJAWM.windows.MyImagesApp.images[i].thumbHeight > thumbHeight) {
                thumbHeight = ADAJAWM.windows.MyImagesApp.images[i].thumbHeight;
            }
        }
        
        widthString = thumbWidth + "px";
        heightString = thumbHeight + "px";
                    
        for(i = 0; i < ADAJAWM.windows.MyImagesApp.images.length; i++) {
            imageLink = document.createElement("a");
            imageTag = document.createElement("img");
            imageLink.setAttribute("href", "#");
            imageLink.setAttribute("title", "Klicka för att se större");
            imageLink.setAttribute("id", "Bild " + i);
            imageTag.setAttribute("src", ADAJAWM.windows.MyImagesApp.images[i].thumbURL);
            imageTag.setAttribute("alt", "Bild " + (i + 1));
            imageLink.style.width = widthString;
            imageLink.style.height = heightString;
            imageLink.appendChild(imageTag);
            placement.appendChild(imageLink);
        }
        
        aList = placement.getElementsByTagName("a");
        for(i = 0; i < aList.length; i++) {
            aList[i].addEventListener("click", ADAJAWM.windows.MyImagesApp.setBackgroundImage, false);
        }
    },
    
    setBackgroundImage : function(e) {
        var imageID = this.getAttribute("id");
        var sliceIndex = imageID.indexOf(" ");
        var index = imageID.slice(sliceIndex + 1);
        
        document.body.style.backgroundImage = "url(" + ADAJAWM.windows.MyImagesApp.images[index].URL + ")";
    },
    
    init: function() {
        var placeHolderWait;
        var url = "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/";
        new AjaxCon(url, ADAJAWM.windows.MyImagesApp.displayThumbnails);
        
        window.setTimeout(function() {
            placeHolderWait = document.getElementById("displayArea");
            placeHolderWait.removeAttribute("class");
        }, 1000);
    },
};

window.addEventListener("load", ADAJAWM.windows.MyImagesApp.init, false);