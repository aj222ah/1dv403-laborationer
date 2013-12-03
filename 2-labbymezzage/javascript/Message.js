"use strict";

function Message (messageText, date) {
    
    this.getText = function() {
        return messageText;
    };
    
    this.setText = function(textInput) {
        messageText = textInput;
    };
    
    this.getDate = function() {
        return date;
    };
    
    this.setDate = function(dateInput) {
        date = dateInput;
    };
    
}

Message.prototype.toString = function() {
    return this.getText() + " (" + this.getDate() + ").";
};

Message.prototype.getHTMLtext = function() {
    var tempMessage = this.getText();
    tempMessage.replace(/\n/g, "<br>");
    return tempMessage;
};