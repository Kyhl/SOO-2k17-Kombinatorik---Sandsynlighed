function onLoad() {
	Iterative();
	Recursive();
}

// Min funktion ved navn "Iterative" kaldes.
function Iterative(num){

	//Variablet "i" defineres
	var i;
	
	// De resterende variabler defineres
	var num;
	var res1=1;
	
	//Parsefloat omsætter stringen der bliver modtaget fra HTML-koden til et nummer
	num=parseFloat(document.index.num.value);

	//Sætter værdien til 1 hvis tallet er 0 eller 1, da disse tal ikke er gyldige i formlen.
	if(num == 0 || num == 1){
		res1 = 1;
	}

	//else funktion, der sikrer at det indtastede nummer er over 1, og eksekverer fakultetudregningen.
	else{
		for(i=1; i<=num; i++){
			res1 = res1*i;
		}
	}
	//Printfunktion, der sender fakultetværdien tilbage, og viser den på skærmen.
	document.index.resultat1.value=res1;
}
function Recursive(num){
	// Num defineres og parses igen
	var num;
	num=parseFloat(document.index.num.value);
	
	//Function der kører sig selv indtil "if" kriterierne bliver opfyldt
	var factorial = function(num) {
		if (num <= 0 || num == 1) {
			return 1;
		} else { 
		
			//Ny data til brug af udregning i funktionen
			return (num * factorial(num - 1));
		}
	};
	
	//Printer til tekstbox i HTML kode
	document.index.resultat2.value=(factorial(num));	
}

