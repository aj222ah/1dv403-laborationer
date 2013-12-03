"use strict";

function messageHandler () {
    var sendButton = document.getElementById("sendButton");
    var messageHolder = document.getElementById("newMessage");
    var displayZone = document.getElementById("messageDisplay");
    var counterDisplay = document.getElementById("messageCounter");
    var messages = [];
    var counter = 0;
    var i = 0;
    var createTime;
    var userInput;
    var messDiv, messP, messPText, messTimeP, messTimePText; 
     
    
    sendButton.addEventListener("click", handleMessages, false);
    
    function handleMessages(e) {
        createTime = new Date();
        userInput = messageHolder.value;
        messages.push(new Message(userInput, createTime));
        
        if(messages.length > 0) {
            displayMessages();
        }
    }
    
    function displayMessages() {
        //for(i = 0; i < messages.length; i++)
        
        for(i = 0; i < messages.length; i++) {
            addMessage(i);
        }
        
        
    }
    
    function addMessage(no) {
        messDiv = document.createElement("div");
        messP = document.createElement("p");
        messPText = document.createTextNode(messages[no].getHTMLtext());
        messP.appendChild(messPText);
        messP.setAttribute("class", "display");
        messTimeP = document.createElement("p");
        messTimePText = document.createTextNode(messages[no].getDate());
        messTimeP.appendChild(messTimePText);
        messTimeP.setAttribute("class", "timeDisplay");
        messDiv.appendChild(messP);
        messDiv.appendChild(messTimeP);
    }
    
}




window.addEventListener("load", messageHandler, false);