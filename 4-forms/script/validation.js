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
    var form = document.getElementById("validationForm");
    var overlay = document.getElementById("overlay");
    var popup = document.getElementById("popup");
    var labels = document.getElementsByTagName("label");
    var inputValues = document.getElementsByTagName("input");
    var selectValues = document.getElementsByTagName("select");
    var h1, h1Text, p = [], pText = [], submitButton, submitButtonText, abortButton, abortButtonText, i = 0, x = 0, warning;
    var elementArray = [];
    
    warning = document.getElementsByClassName("warning");
    if(warning.length >= 1) {
        e.preventDefault();
        return false;
    }
    
    if (form.getAttribute("class") === "revalidate") {
        elementArray = popup.querySelectorAll("*");
        
        for(i = elementArray.length - 1; i >= 0; i--) {
            elementArray[i].parentNode.removeChild(elementArray[i]);
        }
    }
    
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
    submitButtonText = document.createTextNode("Bekräfta ditt köp");
    submitButton.setAttribute("id", "confirm");
    submitButton.appendChild(submitButtonText);
    abortButton = document.createElement("button");
    abortButtonText = document.createTextNode("Avbryt");
    abortButton.setAttribute("id", "abort");
    abortButton.appendChild(abortButtonText);
    
    popup.appendChild(submitButton);
    popup.appendChild(abortButton);
    popup.removeAttribute("class");
    overlay.setAttribute("class", "overlayEffect");
    popup.setAttribute("class", "popupDisplay");
    for(i = 0; i < inputValues.length; i++) {
        inputValues[i].setAttribute("disabled", "disabled");
    }
    for(i = 0; i < selectValues.length; i++) {
        selectValues[i].setAttribute("disabled", "disabled");
    }
    
    submitButton.addEventListener("click", checkConfimation, false);
    abortButton.addEventListener("click", checkConfimation, false);
    
    e.preventDefault();
}

function checkConfimation(e) {
    if (!e) { var e = window.event; }
    var form = document.getElementById("validationForm");
    var submit = document.getElementById("submit");
    var overlay = document.getElementById("overlay");
    var popup = document.getElementById("popup");
    var inputValues = document.getElementsByTagName("input");
    var selectValues = document.getElementsByTagName("select");
    var i = 0;
    for(i = 0; i < inputValues.length; i++) {
        inputValues[i].removeAttribute("disabled");
    }
    for(i = 0; i < selectValues.length; i++) {
        selectValues[i].removeAttribute("disabled");
    }
    
    if(this.id === "confirm") {
        submit.removeEventListener("click", confirmInfo, false);
        submit.click();
    }
    else {
        popup.removeAttribute("class");
        overlay.removeAttribute("class");
        popup.setAttribute("class", "hide");
        form.setAttribute("class", "revalidate");
    }
}
window.addEventListener("load", initialize, false);