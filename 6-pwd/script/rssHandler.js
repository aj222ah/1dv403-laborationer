"use strict";
var ADAJAWM = ADAJAWM || {};
ADAJAWM.windows = ADAJAWM.windows || {};

ADAJAWM.windows.RssFeed = function RssFeed(url) {
    var currentURL = url;
    
    this.getUrl = function() {
        return currentURL;
    };
};

ADAJAWM.windows.RssFeed.updateRssFeed = function(newsArray) {
        var waitMessage, placeHolder, x, nodeList = [];
        
        if (document.getElementById("waitMessage")) {
            waitMessage = document.getElementById("waitMessage");
            waitMessage.parentNode.removeChild(waitMessage);
        }
        else if (document.getElementById("newsFeed").hasChildNodes()) {
            nodeList = document.getElementById("newsFeed").childNodes;
            
            for (x = 0; x < nodeList.length ; x++) {
                nodeList[x].parentNode.removeChild(nodeList[x]);
            }
        }
        
        placeHolder = document.getElementById("newsFeed");
        placeHolder.innerHTML += newsArray;
        
        window.setTimeout(function() {
            new AjaxCon(ADAJAWM.windows.RSSManager.rssFeed[0].getUrl(), ADAJAWM.windows.RssFeed.updateRssFeed);
        }, 60000);
    };

ADAJAWM.windows.RssFeedHandler = {
    rssFeed : [],
    init : function() {
        var placeHolderWait;
        ADAJAWM.windows.RssFeedHandler.rssFeed[0] = new ADAJAWM.windows.RssFeed("http://homepage.lnu.se/staff/tstjo/labbyServer/rssproxy/?url="+escape("http://www.dn.se/m/rss/senaste-nytt"));
        //var url = "http://homepage.lnu.se/staff/tstjo/labbyServer/rssproxy/";
        //var url = "http://homepage.lnu.se/staff/tstjo/labbyServer/rssproxy/?url="+escape("http://www.dn.se/m/rss/senaste-nytt");
        var url = "http://homepage.lnu.se/staff/tstjo/labbyServer/rssproxy/?url="+escape("http://www.aftonbladet.se/rss.xml");
        new AjaxCon(ADAJAWM.windows.RssFeedHandler.rssFeed[0].getUrl(), ADAJAWM.windows.RssFeed.updateRssFeed);
        window.setTimeout(function() {
            placeHolderWait = document.getElementById("waitMessage");
            if (document.getElementById("waitMessage")) {
                placeHolderWait.removeAttribute("class");
            }
            
        }, 1000);
    },
}
    
window.addEventListener("load", ADAJAWM.windows.RssFeedHandler.init, false);