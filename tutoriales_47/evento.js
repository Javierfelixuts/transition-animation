window.onload = function(){
	var letters = document.querySelectorAll('.letter');
	var contador = 0;

	var intervalo = setInterval(function(){
		letters[contador].classList.add("anim");
		contador++;

		if (contador == letters.length) {
			clearInterval(intervalo);
		}

	},250);
}