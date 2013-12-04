"use strict";

var MessageBoard =  {
    messages: [],
    noOfMessages: 0,
    counterDisplayCounter: 0,
    
    init: function(e) {
        var sendButton = document.getElementById("sendButton");
        var messageHolder = document.getElementById("newMessage");
        MessageBoard.counterDisplay();
        
        messageHolder.addEventListener("keypress", MessageBoard.keyTest, false);
        sendButton.addEventListener("click", MessageBoard.handleMessages, false);
    },
    
    addMessageToDisplay: function (no) {
        var displayZone = document.getElementById("messageDisplay");
        var messDiv, messP, messPText, messTimeP, messTimePText, messTimeA, messDelA, messTimeImg, messDelImg, messSubstrArr; 
        
        // Div-tag för meddelande och p-tag för utskrift av meddelandetext
        messDiv = document.createElement("div");
        
        
        // Taggar för att visa tids-ikon
        messTimeA = document.createElement("a");
        messTimeA.setAttribute("href", "#");
        messTimeA.setAttribute("alt", "Klockikon");
        messTimeA.setAttribute("id", "time " + no);
        messTimeA.setAttribute("class", "showTime");
        messTimeImg = document.createElement("img");
        messTimeImg.setAttribute("src", "pics/clock_time.png");
        messTimeImg.setAttribute("title", "Tidpunkt för meddelande");
        messTimeImg.setAttribute("class", "icons");
        messTimeA.appendChild(messTimeImg);
        
        // Taggar för att visa delete-ikon
        messDelA = document.createElement("a");
        messDelA.setAttribute("href", "#");
        messDelA.setAttribute("alt", "Borttagningsikon");
        messDelA.setAttribute("id", "delete " + no);
        messDelA.setAttribute("class", "deleteMessage");
        messDelImg = document.createElement("img");
        messDelImg.setAttribute("src", "pics/remove.png");
        messDelImg.setAttribute("title", "Ta bort meddelande");
        messDelImg.setAttribute("class", "icons");
        messDelA.appendChild(messDelImg);
        
        messP = document.createElement("p");
        messP.setAttribute("class", "textDisplay");
        messPText = document.createTextNode(MessageBoard.messages[no].getHTMLtext());
        
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
    
    counterDisplay: function() {
        var text = document.getElementById("messageCounter");
        var last = text.lastChild;
        var addition;
        
        if (MessageBoard.counterDisplayCounter !== 0) {
            text.removeChild(last);
        }
        
        MessageBoard.noOfMessages = MessageBoard.messages.length;
        addition = document.createTextNode(MessageBoard.noOfMessages);
        text.appendChild(addition);
        MessageBoard.counterDisplayCounter += 1;
    },
    
    displayMessages: function() {
        var i, messageArea, messTimeArray, messDelArray;
        
        MessageBoard.removeMessageFromDisplay();
        
        for(i = 0; i < MessageBoard.messages.length; i++) {
            MessageBoard.addMessageToDisplay(i);
        }
        
        messageArea = document.getElementById("messageDisplay");
        messTimeArray = messageArea.getElementsByClassName("showTime");
        messDelArray = messageArea.getElementsByClassName("deleteMessage");
        
        for (i = 0; i < messTimeArray.length; i++) {
            messTimeArray[i].addEventListener("click", MessageBoard.displayTime, false);
            messDelArray[i].addEventListener("click", MessageBoard.removeMessageFromArray, false);
        }
        
        MessageBoard.counterDisplay();
    },
    
    displayTime: function(e) {
        if (!e) { var e = window.event; }
        var numberID = this.getAttribute("id");
        var number, index;
        
        index = numberID.search(" ");
        number = numberID.slice(index+1);
        
        alert("Detta meddelande skapades " + MessageBoard.messages[number].getDate() + " klockan " + MessageBoard.messages[number].getTime() + ".");
    },
    
    handleMessages: function(e) {
        if (!e) { var e = window.event; }
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
    
    keyTest: function(e) {
        if (!e) { var e = window.event; }
        
        if (e.keyCode === 13 || e.which === 13) {
            if(e.shiftKey) {
                e.preventDefault;
            }
            else {
                MessageBoard.handleMessages(e);
            }
        }
    },
        
    removeMessageFromArray: function(e) {
        if (!e) { var e = window.event; }
        var confirm = window.confirm("Ta bort meddelandet?");
        var numberID = this.getAttribute("id");
        var number, index;
        
        if (confirm) {
            index = numberID.search(" ");
            number = numberID.slice(index+1);
            MessageBoard.messages.splice(number, 1);
            
            MessageBoard.displayMessages();
        }
        else {
            e.preventDefault;
        }
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


