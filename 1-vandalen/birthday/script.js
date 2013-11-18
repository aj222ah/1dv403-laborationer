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
		
		var remainingDays = 0, i = 0;
		var today = new Date();
		var dateOfBirth = new Date(date);
		var nextBirthday = new Date((today.getFullYear()) + "-" + (dateOfBirth.getMonth() + 1) + "-" + (dateOfBirth.getDate()));
		var daysOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
		
		
		if (today.getMonth() == dateOfBirth.getMonth()) {
		    if (today.getDate() === dateOfBirth.getDate()) {
		        remainingDays = 0;
		    }
		    else if (dateOfBirth.getDate() > today.getDate()) {
		        remainingDays = (dateOfBirth.getDate() - today.getDate());
		    }
		    else {
		        //beräkna
		    }
		    
		}
		else if (today.getMonth() < dateOfBirth.getMonth()) {
		    remainingDays = dateOfBirth.getDate();
		    
		    for (i = (dateOfBirth.getMonth() - 1); i > today.getMonth(); i--) {
		        remainingDays = (remainingDays + daysOfMonth[i]);
		        console.log(i);
		        console.log(remainingDays);
		    }
		    
		    remainingDays += (daysOfMonth[today.getMonth()] - today.getDate());
		    console.log(daysOfMonth[today.getMonth()]);
		}
		else {
		    
		    
		}
		
		
		console.log("Födelsemånad: " + dateOfBirth.getMonth());
		console.log("Nuvarande månad: " + today.getMonth());
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