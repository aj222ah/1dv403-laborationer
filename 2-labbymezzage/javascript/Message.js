"use strict";

function Message (messageText, date) {
    
    this.getText = function() {
        return messageText;
    };
    
    this.setText = function(textInput) {
        messageText = textInput;
    };
    
    this.getDate = function() {
        var dateString;
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hour = date.getHours();
        var minute = date.getMinutes();
        
        if(month < 10) {
            month = "0" + month;
        }
        if (day < 10) {
            day = "0" + day;
        }
        if (hour < 10) {
            hour = "0" + hour;
        }
        if (minute < 10) {
            minute = "0" + minute;
        }
        
        dateString = year + "-" + month + "-" + day + " " + hour + ":" + minute;
        
        return dateString;
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