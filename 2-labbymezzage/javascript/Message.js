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
        
        
        if(month < 10) {
            month = "0" + month;
        }
        else if (day < 10) {
            day = "0" + day;
        }
        
        dateString = year + "-" + month + "-" + day;
        
        return dateString;
    };
    
    this.setDate = function(dateInput) {
        date = dateInput;
    };
    
    this.getTime = function() {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var timeString;
        
        if (hours < 10) {
            hours = "0" + hours;
        }
        else if (minutes < 10) {
            minutes = "0" + minutes;
        }
        else if (seconds < 10) {
            seconds = "0" + seconds;
        }
        
        timeString = hours + ":" + minutes + ":" + seconds;
        
        return timeString;
    }
    
}

Message.prototype.toString = function() {
    return this.getText() + " (" + this.getDate() + " "+ this.getTime() + ").";
};

Message.prototype.getHTMLtext = function() {
    var tempMessage = this.getText();
    tempMessage.replace(/\n/g, "<br>");
    return tempMessage;
};



