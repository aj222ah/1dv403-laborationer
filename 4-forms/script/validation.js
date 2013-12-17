"use strict";

function initialize() {
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    
    firstName.addEventListener("blur", notEmptyValidation, false);
    lastName.addEventListener("blur", notEmptyValidation, false);
}

function notEmptyValidation(e) {
    if (!e) { var e = window.event; }
    var input = this.value;
    var id = this.getAttribute("id");
    var regExpEmptyString = /^$/;
    
    if(input.match(regExpEmptyString)) {
        alert(id);
    }
}

window.addEventListener("load", initialize, false);