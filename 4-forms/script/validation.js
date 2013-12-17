"use strict";

function initialize() {
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var zipCode = document.getElementById("zipCode");
    var email = document.getElementById("email");
    
    firstName.addEventListener("blur", notEmptyValidation, false);
    lastName.addEventListener("blur", notEmptyValidation, false);
    zipCode.addEventListener("blur", invalidZipCode, false);
    email.addEventListener("blur", invalidEmail, false);
}

function notEmptyValidation(e) {
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
        errorMessage = "Detta fält får inte vara tomt";
        addMessage(current, currentID, errorMessage);
    }
}

function invalidZipCode(e) {
    if (!e) { var e = window.event; }
    var input = this.value;
    var current = document.getElementById(this.getAttribute("id"));
    var currentID = current.getAttribute("id");
    var regExpZipCode = /^\d{5}$/;
    var warningP, warningText, removable;
    
    if (current.getAttribute("class") === "warningDisplay") {
        current.removeAttribute("class");
        removable = document.getElementById(currentID + "Warning");
        removable.parentNode.removeChild(removable);
    }
    
    if(!input.match(regExpZipCode)) {
        warningP = document.createElement("p");
        warningText = document.createTextNode("Postnumret är inkorrekt angivet");
        warningP.appendChild(warningText);
        warningP.setAttribute("class", "warning");
        warningP.setAttribute("id", currentID + "Warning");
        current.setAttribute("class", "warningDisplay");
        current.parentNode.insertBefore(warningP, current.nextSibling);
    }
}

function invalidEmail(e) {
    if (!e) { var e = window.event; }
    var input = this.value;
    var current = document.getElementById(this.getAttribute("id"));
    var currentID = current.getAttribute("id");
    var regExpEmail = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;  //  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    var errorMessage;
    
    if (current.getAttribute("class") === "warningDisplay") {
        removeWarning(current, currentID);
    }
    
    if(!input.match(regExpEmail)) {
        errorMessage = "Du har angivit en inkorrekt e-postadress";
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