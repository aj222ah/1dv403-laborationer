"use strict";

window.onload = function(){
	
	var secret = Math.floor( Math.random() * 100)+1; //Talet 50 utbytt mot slumpat tal enligt instruktionen: Detta tal behöver bytas ut mot ett slumpat tal.
	var noOfGuesses = 0;
	
	// I denna funktion ska du skriva koden för att hantera "spelet"
	var guess = function(number){
		// console.log("Det hemliga talet: " + secret); // Du når den yttre variabeln secret inifrån funktionen.
		// console.log("Du gissade: " + number); // Detta nummer är det som användaren gissade på.
			
		// Plats för förändring.
		var currentGuess = 0;
        noOfGuesses+=1;
        
        // Kontrollerar så att det inmatade värdet kan typomvandlas till ett nummer
        if (isNaN(number)) {
            return[false, "Du måste mata in ett tal mellan 1 och 100."];
        }
        else {
            currentGuess = +number;
        }
        
        // Använder en switch för att jämföra talen
        switch(true) {
            case currentGuess === secret:
                return[true, "Grattis! Det hemliga talet var " + secret + " och du behövde " + noOfGuesses + " gissningar för att hitta det!"];
            case currentGuess >= 1 && currentGuess < secret:
                return[false, "Det hemliga talet är högre. Försök igen!"];
            case currentGuess <= 100 && currentGuess > secret:
                return[false, "Det hemliga talet är lägre. Försök igen!"];
            default:
                return[false, "Du måste mata in ett tal mellan 1 och 100."];
        }
        // Returnera exempelvis: 
		// [true, "Grattis du vann! Det hemliga talet var X och du behövde Y gissningar för att hitta det."]
		// [false, "Det hemliga talet är högre!"]
		// [false, "Det hemliga talet är lägre!"]
		// [false, "Talet är utanför intervallet 0 - 100"]	
	};
	
	// ------------------------------------------------------------------------------



	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#number");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		var answer = guess(input.value) // Läser in talet från textrutan och skickar till funktionen "guess"
		p.innerHTML = answer[1];		// Skriver ut texten från arrayen som skapats i funktionen.	

		if(answer[0] === true){				// Om spelet är slut, avaktivera knappen.
			submit.disabled = true;
		}
	
	});
};