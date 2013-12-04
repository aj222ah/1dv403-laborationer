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
        var messDiv, messP, messPText, messTimeP, messTimePText, messTimeA, messDelA, messTimeImg, messDelImg; 
        
        // Div-tag för meddelande och p-tag för utskrift av meddelandetext
        messDiv = document.createElement("div");
        messP = document.createElement("p");
        messP.setAttribute("class", "textDisplay");
        messPText = document.createTextNode(MessageBoard.messages[no].getHTMLtext());
        
        // Taggar för att visa tids-ikon
        messTimeA = document.createElement("a");
        messTimeA.setAttribute("href", "pics/clock_time.png");
        messTimeA.setAttribute("alt", "Klockikon");
        messTimeA.setAttribute("id", "time " + no);
        messTimeImg = document.createElement("img");
        messTimeImg.setAttribute("src", "pics/clock_time.png");
        messTimeImg.setAttribute("title", "Tidpunkt för meddelande");
        messTimeImg.setAttribute("class", "icons");
        messTimeA.appendChild(messTimeImg);
        
        // Taggar för att visa delete-ikon
        messDelA = document.createElement("a");
        messDelA.setAttribute("href", "pics/remove.png");
        messDelA.setAttribute("alt", "Borttagningsikon");
        messDelA.setAttribute("id", "delete " + no);
        messDelImg = document.createElement("img");
        messDelImg.setAttribute("src", "pics/remove.png");
        messDelImg.setAttribute("title", "Ta bort meddelande");
        messDelImg.setAttribute("class", "icons");
        messDelA.appendChild(messDelImg);
        
        // Infoga taggar till föräldra-elementet
        messP.appendChild(messDelA);
        messP.appendChild(messTimeA);
        messP.appendChild(messPText);
        
        // Taggar för att visa tid då meddelandet lades till
        messTimeP = document.createElement("p");
        messTimePText = document.createTextNode(MessageBoard.messages[no].getDate() + " " + MessageBoard.messages[no].getTime());
        messTimeP.appendChild(messTimePText);
        messTimeP.setAttribute("class", "timeDisplay");
        
        // Infoga element i dokumentet
        messDiv.setAttribute("class", "display");
        //messDiv.appendChild(messDelA);
        //messDiv.appendChild(messTimeA);
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


