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
		
		var day = 1000 * 60 * 60 * 24;
		var today = new Date();
		var dateOfBirth = new Date(date);
		var nextBday = new Date(today.getFullYear() + "-" + (dateOfBirth.getMonth()+1) + "-" + dateOfBirth.getDate());
		var remainingDays = Math.round((today.getTime() - nextBday.getTime())/day);
		
		if (remainingDays <= 0)
		{
		    remainingDays = -(remainingDays);
		}
		else
		{
		    nextBday = new Date((today.getFullYear()+1) + "-" + (dateOfBirth.getMonth()+1) + "-" + dateOfBirth.getDate());
		    remainingDays = (Math.round((nextBday.getTime() - today.getTime())/day));
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