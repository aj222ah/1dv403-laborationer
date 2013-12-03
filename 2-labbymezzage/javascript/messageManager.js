"use strict";

function messageHandler () {
    var sendButton = document.getElementById("sendButton");
    var messageHolder = document.getElementById("newMessage");
    var messages = [];
    var createTime;
    var userInput;
    
    sendButton.addEventListener("click", createDate, false);
    
    function createDate(e) {
        createTime = new Date();
        userInput = messageHolder.value;
        messages.push(new Message(userInput, createTime));
    }
    
    
}




window.addEventListener("load", messageHandler, false);