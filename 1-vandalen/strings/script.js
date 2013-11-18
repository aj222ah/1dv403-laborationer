"use strict";

window.onload = function(){

	// I denna funktion ska du skriva koden för att hantera "spelet"
	var convertString = function(str){
		// Plats för förändring.		
		// Returnera den konverterade strängen.
		// Vid fel, kasta ett undantag med ett meddelande till användaren. 
	
        // Använder en array under konverteringen
        var holderArray = new Array(str.length);
        var letter, i, convertedString = "";
        
        try {
            if (str === "") { throw new Error("Du har inte matat in någon text!"); }
        }
        catch (error) {
            return error.message;
        }
        
        for (i = 0; i < str.length; i++)
        {
            letter = str[i];
            
            if ( letter.toLowerCase() === "a") {
                holderArray[i] = "#";
            }
            else if (letter.toUpperCase() === letter && letter.toLowerCase() !== letter) {
                holderArray[i] = letter.toLowerCase();
            }
            else if (letter.toLowerCase() === letter && letter.toUpperCase() !== letter) {
                holderArray[i] = letter.toUpperCase();
            }
            else {
                holderArray[i] = letter;
            }
        }
        
        for (i = 0; i < holderArray.length; i++)
        {
            convertedString = convertedString + holderArray[i];
        }
        
        return convertedString;
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
			var answer = convertString(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			p.innerHTML = answer;		// Skriver ut texten från arrayen som skapats i funktionen.	
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};