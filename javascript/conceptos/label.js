window.addEventListener("load", function(){ /*Load es cuando refresca la pagina se ejecutara la la funcion*/
      document.getElementById("ejercicio5").addEventListener("click",

function() {
		// Es una sentencia que nos permite asociar cualquier bucle a un nombre (exepto for each) para poder terminarlo cuando queramos
		array1=["Maria","Josefa","Roberta"];
		array2= ["Pedro","Marcelo",array1, "josefina"];

		//vamos a crear un array dentro de un array y lo mostramos por pantalla asi


		//Resultado en la web
		//pedro
		//Marcelo
		//Maria
		//Josefa
		//Roberta

		//para crearlo usaremos lo aprendido de for in y for of
		document.write("Ejercicio usando for in, for of, arrays, if y else"+"<br>");
		//for in guarda pociones en numero
		for (let array in array2) { //primero creamos una variable llamada array para guardar las pociciones del array2 ([0,1,2])

			if (array ==2 ) {   // segundo si nuestro array es == 2 entonces vamos a iniciar el bucle for of

				//for of guarda pocisiones en informacion
				for (let array of array1){    // Tercero creamos una variable llamada array (es nueva dentro del bucle)
												// Para guardar la informacion del array1 (["Maria","Josefa","Roberta"])
					document.write(array+"<br>"); //mostramos la informacion del array de nuestro bucle for of

				}

			}else{
				document.write(array2[array]+"<br>"); //si no se cumple entonces que solo nos muestre la informacion del array2 por pantalla
														//Para que no se cumpla si queremos borramos el array1 en el codigo de arriba
														// (array2= ["Pedro","Marcelo",array1];)
			}

		}


		//label
		//usando lo aprendido anteriormente usaremos el mismo codigo quitando los comentarios anteriores.

		//el label se usa para aplicar un comando como break o continue a todo el programa
		document.write("<br>"+"Ejercicio anterior pero usando el label "+"<br>");


		forRancio:          //Es un label: Nos permite aplicar el cambio a todo el bucle
		for (let array in array2) {

			if (array ==2 ) {

				for (let array of array1){

					continue forRancio;   //aplica continue a todo el bucle con el label.
					document.write(array+"<br>");
				}

			}else{
				document.write(array2[array]+"<br>");
			}
		}


	}) /*final de la funcion principal*/
})  /*final del load function*/
//Label
