"use strict";

function initialize() {
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var zipCode = document.getElementById("zipCode");
    var email = document.getElementById("email");
    var submit = document.getElementById("submit");
    
    firstName.addEventListener("blur", checkIfEmpty, false);
    lastName.addEventListener("blur", checkIfEmpty, false);
    zipCode.addEventListener("blur", checkValidZipCode, false);
    email.addEventListener("blur", checkValidEmail, false);
    submit.addEventListener("click", confirmInfo, false);
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
        this.value = input;
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

function confirmInfo(e) {
    if (!e) { var e = window.event; }
    var body = document.getElementsByTagName("body");
    var popup = document.getElementById("popup");
    var labels = document.getElementsByTagName("label") // anv labels[i].firstChild.nodeValue för att få ut texten
    var inputValues = document.getElementsByTagName("input");
    var selectValues = document.getElementsByTagName("select");
    var h1, h1Text, p = [], pText = [], submitButton, abortButton, i = 0, x = 0;
    
    h1 = document.createElement("h1");
    h1Text = document.createTextNode("Vänligen bekräfta ditt köp");
    h1.appendChild(h1Text);
    popup.appendChild(h1);
    
    for(i = 0; i < (inputValues.length - 1); i++) {
        p[i] = document.createElement("p");
        pText[i] = document.createTextNode(labels[i].firstChild.nodeValue + " " + inputValues[i].value);
    }
    
    for(x = 0; x < selectValues.length; x++) {
        p[i] = document.createElement("p");
        pText[i] = document.createTextNode(labels[i].firstChild.nodeValue + " " + selectValues[x].options[document.getElementById("paymentModel").selectedIndex].text);
        i += 1;
    }
    
    for(i = 0; i < p.length; i++) {
        p[i].appendChild(pText[i]);
        popup.appendChild(p[i]);
    }
    
    submitButton = document.createElement("button");
    submitButton.setAttribute("value", "Bekräfta ditt köp");
    submitButton.setAttribute("id", "submit2");
    abortButton = document.createElement("button");
    abortButton.setAttribute("value", "Avbryt");
    abortButton.setAttribute("id", "abort");
    
    popup.appendChild(submitButton);
    popup.appendChild(abortButton);
    popup.removeAttribute("class");
    //body.setAttribute("class", "overlayEffect");
    popup.setAttribute("class", "popupDisplay");
    
    
    e.preventDefault();
}

window.addEventListener("load", initialize, false);