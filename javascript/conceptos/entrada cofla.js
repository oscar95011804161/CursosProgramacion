window.addEventListener("load", function(){ /*Load es cuando refresca la pagina se ejecutara la la funcion*/
      document.getElementById("ejercicio7").addEventListener("click",

function() {
		// Un joven muy afortunado logro ganar el primer premio de la loteria...  exacto, estamos hablando del pobre de cofla al que
		//cofla le dio una mano, este pobre decide hacer una fiesta para festejar que salio de la pobreza con este millonario
		// compro una maquina que deja pasar solamente a los mayores de edad, entre otras cosas...

		// deja pasar solo a los mayores de edad.
		// la primera persona que entre despues de las 2 AM, no paga.

		let free = false;

		const validarCliente = (time)=> {

			let edad = prompt ("cual es tu edad");
			if (edad >= 18){
				if (time>=2 && time<7 && free == false) { //si es entre las 2 de la mañana a las 7 de la mañana puede entrar gratis
					alert (`son las ${time}:00Hs y podes pasar gratis porque sos la primera persona despues de las 2 am`);
					free = true; //al dentrar la primera persona el siguiente no le dan la entrada gratis

				}else{
					alert (`son las ${time}:00Hs y podes pasar pero tienes que pagar la dentrada`); //si son las otras horas y ya paso el primero gratis
				}                                                                              //entonces se cumple la condicion

			} else {
				alert ("mira papu, sos menor de edad por ende no vas a pasar, MAQUINOLA");
			}
		}

		validarCliente(4); //son las 4 de la mañana
		validarCliente(22); //son las 10 de la noche
		validarCliente(2); //son las 2 de la mañana
		validarCliente(3); //son las 3 de la mañana
		validarCliente(16); //son las 4 de la tarde
		validarCliente(23); //son las 11 de la noche
		validarCliente(3); //son las 3 de la mañana
	}) /*final de la funcion principal*/
})  /*final del load function*/
