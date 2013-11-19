"use strict";

window.onload = function(){

	
	var birthday = function(date){
		
		// RegExp från http://www.webdeveloper.com/forum/showthread.php?190078-Javascript-Date-%28yyyy-mm-dd%29-validation
		var rgx = /(\d{4})-(\d{2})-(\d{2})/;
		try {
            if (!date.match(rgx)) { throw new Error("Du har angivit ett datum på felaktigt format, använd: ÅÅÅÅ-MM-DD"); }
		}
		catch (error) {
            return error.message;
		}
		
		function nextYearBirthday(today, dateOfBirth)
		{
		    var nextYear = today.getFullYear() + 1;
		    if (today.getMonth() !== 11) {
		        for (i = 11; i > today.getMonth(); i--) {
		            remainingDays += daysOfMonth[i];
		        }
		    }
		    
		    remainingDays += daysOfMonth[today.getMonth()] - today.getDate();
		    
		    if (dateOfBirth.getMonth() > 0) {
		        for (i = dateOfBirth.getMonth() - 1; i >= 0; i--) {
		            remainingDays += daysOfMonth[i];
		            
		            if (i === 1) {
		                // Formel för skottårsberäkning från: http://stackoverflow.com/questions/16353211/check-if-year-is-leap-year-in-javascript
		                if (((nextYear % 4 === 0) && (nextYear % 100 !== 0)) || (nextYear % 400 === 0)) {
		                    remainingDays += 1;
		                }
		            }
		        }
		    }
		    
		    remainingDays += dateOfBirth.getDate();
		    return remainingDays;
		}
		
		var remainingDays = 0, i = 0;
		var today = new Date();
		var dateOfBirth = new Date(date);
		var daysOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
		
		if (today.getMonth() == dateOfBirth.getMonth()) {
		    if (today.getDate() === dateOfBirth.getDate()) {
		        remainingDays = 0;
		    }
		    else if (dateOfBirth.getDate() > today.getDate()) {
		        remainingDays = (dateOfBirth.getDate() - today.getDate());
		    }
		    else {
		        remainingDays = nextYearBirthday(today, dateOfBirth);
		    }
		}
		else if (today.getMonth() < dateOfBirth.getMonth()) {
		    remainingDays = dateOfBirth.getDate();
		    
		    for (i = (dateOfBirth.getMonth() - 1); i > today.getMonth(); i--) {
		        remainingDays += daysOfMonth[i];
		    }
		    
		    remainingDays += (daysOfMonth[today.getMonth()] - today.getDate());
		}
		else if (today.getMonth() > dateOfBirth.getMonth()) {
		    remainingDays = nextYearBirthday(today, dateOfBirth);
		}
		
		return remainingDays;
		
	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};