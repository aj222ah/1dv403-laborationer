"use strict";

function initialize() {
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var zipCode = document.getElementById("zipCode");
    var email = document.getElementById("email");
    
    firstName.addEventListener("blur", checkIfEmpty, false);
    lastName.addEventListener("blur", checkIfEmpty, false);
    zipCode.addEventListener("blur", checkValidZipCode, false);
    email.addEventListener("blur", checkValidEmail, false);
}

function checkIfEmpty(e) {
    if (!e) { var e = window.event; }
    var input = this.value;
    var current = document.getElementById(this.getAttribute("id"));
    var currentID = current.getAttribute("id");
    var regExpEmptyString = /^$/;
    var errorMessage;
    
    if (current.getAttribute("class") === "warningDisplay") {
        removeWarning(current, currentID);
    }
    
    if(input.match(regExpEmptyString)) {
        errorMessage = "Detta fält får inte vara tomt.";
        addMessage(current, currentID, errorMessage);
    }
}

function checkValidZipCode(e) {
    if (!e) { var e = window.event; }
    var input = this.value.trim();
    var current = document.getElementById(this.getAttribute("id"));
    var currentID = current.getAttribute("id");
    var regExpZipCode = /^\d{5}$/; // Matchar 5 siffror
    var regExpDigits = /^\d{3}\s?-?\d{2}$/; // Matchar 3 siffror, mellanslag eller bindestreck och sedan 2 siffror
    var regExpSE = /^SE\s?/i; // Matchar SE eller se endera följt av ett eventuellt mellanslag
    var errorMessage;
    
    if (current.getAttribute("class") === "warningDisplay") {
        removeWarning(current, currentID);
    }
    
    if(input.match(regExpSE)) {
        input = input.replace(regExpSE, "");
    }
    
    if(input.match(regExpDigits)) {
        if(input.search(" ")) {
            input = input.replace(" ", "");
        }
        if (input.search("-")) {
            input = input.replace("-", "");
        }
    }
    
    if(!input.match(regExpZipCode)) {
        errorMessage = "Postnumret är inkorrekt angivet. Använd formen: 12345";
        addMessage(current, currentID, errorMessage);
    }
    else {
        this.value = input; //current.setAttribute("value", input);
    }
}

function checkValidEmail(e) {
    if (!e) { var e = window.event; }
    var input = this.value;
    var current = document.getElementById(this.getAttribute("id"));
    var currentID = current.getAttribute("id");
    var regExpEmail = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    var errorMessage;
    
    if (current.getAttribute("class") === "warningDisplay") {
        removeWarning(current, currentID);
    }
    
    if(!input.match(regExpEmail)) {
        errorMessage = "Du har angivit en inkorrekt e-postadress.";
        addMessage(current, currentID, errorMessage);
    }
}

function removeWarning(current, currentID) {
    var removable = document.getElementById(currentID + "Warning");
    removable.parentNode.removeChild(removable);
    current.removeAttribute("class");
}

function addMessage(current, currentID, messageText) {
    var warningP, warningText;
    warningP = document.createElement("p");
    warningText = document.createTextNode(messageText);
    warningP.appendChild(warningText);
    warningP.setAttribute("class", "warning");
    warningP.setAttribute("id", currentID + "Warning");
    current.setAttribute("class", "warningDisplay");
    current.parentNode.insertBefore(warningP, current.nextSibling);
}

window.addEventListener("load", initialize, false);