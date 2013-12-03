"use strict";

var MessageBoard =  {
    messages: [],
    noOfMessages: 0,
    
    init: function(e) {
        var sendButton = document.getElementById("sendButton");
        MessageBoard.counterDisplay();
         
        sendButton.addEventListener("click", MessageBoard.handleMessages, false);
    },
    
    counterDisplay: function() {
        var text = document.getElementById("messageCounter");
        var last = text.lastChild;
        var addition;
        
        if (MessageBoard.messages.length !== 0) {
            text.removeChild(last);
        }
        
        MessageBoard.noOfMessages = MessageBoard.messages.length;
        addition = document.createTextNode(MessageBoard.noOfMessages);
        text.appendChild(addition);
    },
    
    handleMessages: function(e) {
        var messageHolder = document.getElementById("newMessage");
        var userInput, createTime;
        createTime = new Date();
        userInput = messageHolder.value;
        MessageBoard.messages.push(new Message(userInput, createTime));
        
        if(MessageBoard.messages.length >= 1) {
            MessageBoard.displayMessages();
        }
        
        messageHolder.value = "";
    },
        
    displayMessages: function() {
        var i;
        if(MessageBoard.messages.length > 0) {
            MessageBoard.removeMessageFromDisplay();
        }
        
        for(i = 0; i < MessageBoard.messages.length; i++) {
            MessageBoard.addMessageToDisplay(i);
        }
        
        MessageBoard.counterDisplay();
    },
        
    addMessageToDisplay: function (no) {
        var displayZone = document.getElementById("messageDisplay");
        var messDiv, messP, messPText, messTimeP, messTimePText; 
        messDiv = document.createElement("div");
        messP = document.createElement("p");
        messPText = document.createTextNode(MessageBoard.messages[no].getHTMLtext());
        messP.appendChild(messPText);
        messP.setAttribute("class", "textDisplay");
        messTimeP = document.createElement("p");
        messTimePText = document.createTextNode(MessageBoard.messages[no].getDate() + " " + MessageBoard.messages[no].getTime());
        messTimeP.appendChild(messTimePText);
        messTimeP.setAttribute("class", "timeDisplay");
        messDiv.setAttribute("class", "display");
        messDiv.appendChild(messP);
        messDiv.appendChild(messTimeP);
        displayZone.appendChild(messDiv);
    },
    
    removeMessageFromDisplay: function() {
        var displayZone = document.getElementById("messageDisplay");
        var children = displayZone.getElementsByTagName("div");
        var i;
        
        if (children.length > 0) {
            for(i = children.length ; i > 0 ; i--) {
                displayZone.removeChild(children[i - 1]);
            }
        }
    }
    
};


window.addEventListener("load", MessageBoard.init, false);


