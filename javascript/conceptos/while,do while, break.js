
window.addEventListener("load", function(){ /*Load es cuando refresca la pagina se ejecutara la la funcion*/
      document.getElementById("ejercicio3").addEventListener("click",

function() {
			//el ciclo while es parecido al if la diferencia es que el if a penas se cumpla la condicion termina
			//encambio el while continua el ciclo infinitamente y para detenerlo necesitamos que no se cumpla la condicion
			let numero=0;
			let numero1=0;
			let numero2=1;
			let numero3=0;
			document.write("ciclo while"+"<br>");
			while (numero<10){    //el ciclo finaliza en 10
				numero++;         // la veriable numero se incremente 1 en 1
				document.write(numero+",") // escribe el numero incrementado por pantalla hasta que acabe el ciclo (horizontalmente)

			}
			document.write("<br><br>")
			document.write("ciclo while vertical"+"<br>");
			while (numero1<10){    //el ciclo finaliza en 10
				numero1++;         // la veriable numero se incremente 1 en 1
				document.write(numero1 + "<br>")   //con el <br> sumado colocamos los valores de forma vertical.
			}
			document.write("<br>");

			//do while
			// la diferencia con el while es que primero hace el proceso y luego pregunta la condición.
			//la diferencia es que el while no hace el proceso si no se cumple la condicion encambio este hace el proceso y luego pregunta.


			document.write("ciclo do while "+"<br>");

			do{    //el ciclo finaliza en 10

				document.write(numero2 + "<br>")   //con el <br> sumado colocamos los valores de forma vertical.
				numero2++;  // la veriable numero se incremente 1 en 1

			}
			while (numero2<11)

			//break  este comando nos permite acabar un ciclo while sin que se cumpla la condicion.
			document.write("<br>")
			document.write(" break"+"<br>");
			while(numero3<1000){
				numero3++;
				document.write(numero3+",");
				if(numero3==20){ //por ejemplo aqui decimos que si numero3 es igual a 20 entonces
					break;   //se acaba el ciclo
				}
			}
	}) /*final de la funcion principal*/
})  /*final del load function*/
