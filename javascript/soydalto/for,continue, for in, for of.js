
window.addEventListener("load", function(){ /*Load es cuando refresca la pagina se ejecutara la la funcion*/
      document.getElementById("ejercicio4").addEventListener("click",

function() {
				// el ciclo for:
				let i=20  //delaramos una variable i(incremento) y le damos un valor de 20

				//  (se puede volver a declarar una variable en el ciclo for pero al momento de salir del for su valor es 20)


				for (let i = 0; i<5; i++){   // (1. Declaracion o inicializacion ; 2. Condición  ; 3. Aumento o decremento)
					document.write(i+"<br>"); // escribe el numero incrementado por pantalla hasta que acabe el ciclo (verticalmente con <br>)
				}
				document.write("<br>");

				//comando break para terminar un ciclo

				for (let i = 5; i>=0; i--){   // aqui hacemos que i valga 5, la condicion es que llegue a 0 y se ira decrementando
					document.write(i+"<br>"); // escribe el numero decrementado por pantalla hasta que acabe el ciclo (verticalmente con <br>)
					if (i==2) {             //aqui hacemos una prueba para que acabe en 2
						break;				//usando el comando break
					}
				}

				document.write("<br>");

				//Comando continue para terminar un ciclo

				for (let i = 0; i<=5; i++){   // aqui hacemos que i valga 0, la condicion es que llegue a 5 y se ira incrementando

					if (i==3) {             //aqui hacemos una prueba para que se salte el 3 y siga asi  1,2,4,5
						continue;				//usando el comando continue
					}
					document.write(i+"<br>"); // escribe el numero incrementado por pantalla hasta que acabe el ciclo (verticalmente con <br>)
				}

				let animales = ["gato","perro","tiranosaurio rex"];

				//for in
				// se usa para recorrer objetos, conocer supocisiones y operar con esos objetos(se ve el indice)
				document.write("<br>"+"for in"+"<br>");

				for (animal in animales) {
					document.write(animal+"<br>"); //aqui me va a mostrar la pocisiones del arreglo
					document.write(animales[animal]+"<br>"); //Pero si queremos que nos muestre el valor del arreglo como for of
				}


				//for of
				//se usa para recorrer todo (se ve el contenido del indice)
				document.write("<br>"+"for of"+"<br>");
				//el for of guarda el valor de la posicion
				for (animal of animales) {
					document.write(animal+"<br>"); //aqui me va a mostrar el valor del arreglo
				}
	}) /*final de la funcion principal*/
})  /*final del load function*/
