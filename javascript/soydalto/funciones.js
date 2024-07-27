
window.addEventListener("load", function(){ /*Load es cuando refresca la pagina se ejecutara la la funcion*/
      document.getElementById("ejercicio6").addEventListener("click",

function() {
			//funciones

			// las funciones nos permiten guardar un codigo para evitar repetirlo

			function saludar(){   //creamos una funcion llamada saludar

				alert("hola");

				return 3;  //el return es parecido al break porque finaliza la funcion y devuelve un valor (siempre se pone al final de la funcion)
			}

			let saludo = saludar();    //  creamos una variable llamada saludo donde guardamos la funcion saludar
			//("ojo siempre usar led  para que se sepa que es variable regional")

			document.write(saludo);    //  Mostramos por pantalla la variable saludar.

			function br(){
				document.write("<br>");
			}

			//--------------------------------------------------------------------------------------------------------------------------------------

			//funcion suma realizada de la manera mas ineficiente
			function suma1forma (){  //declaramos la funcion suma sin variables en los corchetes
				br();
				let num1 = 5;   //declaramos variable num1
				let num2 = 10;	//declaramos variable num2
				let res = num1 + num2;  //res es respuesta
				document.write("la suma de "+num1+" + "+num2+" es = " +res); //imprimimos en html
				br();
			}
			suma1forma(); // hacemos salto de linea con br y colocamos la funcion sin valores y otra vez salto de line

			//funcion suma realizada de mejor manera

			function suma2forma (num1,num2){ //declaramos funcion y las variables sin sus valores

				let res = num1 + num2; //res es respuesta
				document.write("la suma de "+num1+" + "+num2+" es = " +res);
				br();
			}

			suma2forma(7,10); // llamamos a la funcion suma2 y decimos que num3 = 7, num4 = 10
			suma2forma(7,7); // llamamos a la funcion suma2 y decimos que num3 = 7, num4 = 7


			//esta seria la mejor forma de hacer la suma usando el menor codigo posible
			//donde res es resultado, result es resultado final para imprimir por pantalla

			function suma (num1,num2){
				let res = num1+num2;           //sacamos un resultado
				return res                    //retornamos la variable res
			}
			let result =suma(20,25) 		//declaramos una variable result y decimos que es igual a la funcion suma con valor de variables 20 y 25
			document.write(result);         //imprimimos por pantalla la variable resultado previamente definida
			br();

			//funcion presentarse

			function presentarse (nombre){
				let frase =`¡hola ${nombre}! ¿como estas?`;
				document.write(frase);
			}

			presentarse("oscar"); //en parentesis colocamos el nombre de nuestra variable declarada nombre

			// mejora de funcion presentase

			const presentarse1 = function(nombre){
				let frase =`¡hola ${nombre}! ¿como estas?`;
				document.write(frase);
			}
			br();
			presentarse1("pedro");

			// reduciondo codigo
			const presentarse2 = (nombre)=>{ // =function(nombre) eslo mismo que = (nombre)=>
				let frase =`¡hola ${nombre}! ¿como estas?`;
				document.write(frase);
			}
			br();
			presentarse2("maria");

			const saludarles =info => {document.write(`¡hola como estas `);}  //creamos una funcion constante llamada saludarles con una variable llamada info
																			// donde almacena la informacion de hola como estas


			// reduciondo codigo mas
			const presentarse3 = nombre => {
				saludarles(); 						//llamamos a la funcion anterior para reducir el codigo mas aun
				document.write(nombre);				//escribimos el nombre por pantalla
			}

			br();
			presentarse3("juan");
	}) /*final de la funcion principal*/
})  /*final del load function*/
