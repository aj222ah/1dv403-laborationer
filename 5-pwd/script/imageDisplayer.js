"use strict";
var ADAJAWM = ADAJAWM || {};
ADAJAWM.pages = ADAJAWM.pages || {};


ADAJAWM.pages.MyImagesApp = {
    images : [],
    
    imageHandler: function(picArray) {
        var i, aList, widthString, heightString;
        var imageLink, imageTag, thumbWidth = 0, thumbHeight = 0;
        var placement = document.getElementById("displayArea");
        var waitMessage = document.getElementById("waitMessage");
        
        waitMessage.parentNode.removeChild(waitMessage);
        
        ADAJAWM.pages.MyImagesApp.images = JSON.parse(picArray);
        
        for(i = 0; i < ADAJAWM.pages.MyImagesApp.images.length; i++) {
            if (ADAJAWM.pages.MyImagesApp.images[i].thumbWidth > thumbWidth) {
                thumbWidth = ADAJAWM.pages.MyImagesApp.images[i].thumbWidth;
            }
            if (ADAJAWM.pages.MyImagesApp.images[i].thumbHeight > thumbHeight) {
                thumbHeight = ADAJAWM.pages.MyImagesApp.images[i].thumbHeight;
            }
        }
        
        widthString = thumbWidth + "px";
        heightString = thumbHeight + "px";
                    
        for(i = 0; i < ADAJAWM.pages.MyImagesApp.images.length; i++) {
            imageLink = document.createElement("a");
            imageTag = document.createElement("img");
            imageLink.setAttribute("href", "#");
            imageLink.setAttribute("title", "Klicka för att se större");
            imageLink.setAttribute("id", "Bild " + i);
            imageTag.setAttribute("src", ADAJAWM.pages.MyImagesApp.images[i].thumbURL);
            imageTag.setAttribute("alt", "Bild " + (i + 1));
            imageLink.style.width = widthString;
            imageLink.style.height = heightString;
            imageLink.appendChild(imageTag);
            placement.appendChild(imageLink);
        }
        
        aList = placement.getElementsByTagName("a");
        for(i = 0; i < aList.length; i++) {
            aList[i].addEventListener("click", ADAJAWM.pages.MyImagesApp.enlargePic, false);
        }
    },
    
    enlargePic : function(e) {
        var imageID = this.getAttribute("id");
        var sliceIndex = imageID.indexOf(" ");
        var index = imageID.slice(sliceIndex + 1);
        var imageHeight = "height=" + ADAJAWM.pages.MyImagesApp.images[index].height + "px,";
        var imageWidth = "width=" + ADAJAWM.pages.MyImagesApp.images[index].width + "px,";
        var scrollString = "scrollable=no";
        
        window.open(ADAJAWM.pages.MyImagesApp.images[index].URL, "Bild" + (index + 1), imageWidth + imageHeight + scrollString);
    },
    
    init: function() {
        var placeHolderWait;
        var url = "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/";
        new AjaxCon(url, ADAJAWM.pages.MyImagesApp.imageHandler);
        
        window.setTimeOut(function() {
            placeHolderWait = document.getElementById("displayArea");
            placeHolderWait.removeAttribute("class");
        }, 1000);
    },
};

window.addEventListener("load", ADAJAWM.pages.MyImagesApp.init, false);