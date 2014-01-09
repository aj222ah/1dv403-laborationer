"use strict";
var ADAJAWM = ADAJAWM || {};
ADAJAWM.images = ADAJAWM.images || {};


ADAJAWM.images.MyImagesApp = {
    init: function() {
        var xhr = new XMLHttpRequest();
        
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4) {
                if(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                    alert(xhr.responseText);
                }
                else {
                    console.log("Läsfel, status:" + xhr.status);
                }
            }
        };
        
        var info = xhr.open("get", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
        xhr.send(null);
        
        alert(info);
    },
};

window.addEventListener("load", ADAJAWM.images.MyImagesApp.init, false);