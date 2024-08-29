

export function ejercicio1(){


    alert(
      "3 chicos de 23 años perfectamente normales entran a una heladería a comprar un helado, pero hay un problema: Los precios no están al lado de cada estante con su respectivo helado.\n\n" +
      "Ellos quieren comprar el helado más caro que puedan con el dinero que tienen, así que veamos cómo podemos ayudarlos.\n\n" +
      "Roberto tiene $1.5 USD\n" +
      "Pedro tiene $1.7 USD\n" +
      "Cofla tiene $3 USD\n\n" +
      "Los precios de los helados son los siguientes:\n" +
      "- Palito de helado de agua: $0.6 USD\n" +
      "- Palito de helado de crema: $1 USD\n" +
      "- Bombón helado marca Heladix: $1.6 USD\n" +
      "- Bombón helado marca Heladovich: $1.7 USD\n" +
      "- Bombón helado marca Helardo: $1.8 USD\n" +
      "- Potecito de helado con confetis: $2.9 USD\n" +
      "- Pote de 1/4 KG: $2.9 USD\n\n" +
      "CREAR SOLUCIONES:\n" +
      "- Pedirles que ingresen el monto que tienen y mostrarles el helado más caro que puedan comprar.\n" +
      "- Si hay 2 o más con el mismo precio, mostrar ambos.\n" 
      
  );
  alert("- Cofla quiere saber cuánto es el vuelto");
  
    const MT1String = prompt("cuanto dinero tiene Cofla?"); //dinero Cofla
    const MT2String = prompt("cuanto dinero tiene Pedro?"); //dinero Pedro
    const MT3String = prompt("cuanto dinero tiene Roberto?");   //dinero Roberto

    const MT1=parseFloat(MT1String); //se usa para comvertir dinero cofla a entero despues de ser digitado
    const MT2=parseFloat(MT2String); //se usa para comvertir dinero Pedro a entero despues de ser digitado
    const MT3=parseFloat(MT3String); //se usa para comvertir dinero Roberto a entero despues de ser digitado

    const nom1= "cofla";
    const nom2= "Pedro";
    const nom3= "Roberto";
    //cofla

    if(MT1>=0.6 && MT1<1 ){  //     && estos signos significan "ademas si"
       alert(nom1+" comprate el helado de agua");
       alert ("y te sobran" + (MT1 - 0.6));
    }
    else if (MT1>=1 && MT1<1.6 ){
       alert(nom1 +" comprate el helado de crema");
       alert ("y te sobran" + (MT1 - 1));
    }
    else if (MT1>=1.6 && MT1<1.7 ){
       alert(nom1+" comprate el helado de heladix");
       alert ("y te sobran" + (MT1 - 1.6));
    }
    else if (MT1>=1.7 && MT1<1.8 ){
       alert(nom1+" comprate el helado marca heladovich");
       alert ("y te sobran" + (MT1 - 1.7));
    }
    else if (MT1>=1.8 && MT1<2.9 ){
       alert(nom1+" comprate el helado marca helardo");
       alert ("y te sobran" + (MT1 - 1.8));
    }
    else if (MT1>=2.9){
          alert(nom1+" comprate el helado con confetis o el pote de 1/4 KG");
          alert("y te sobran" + (MT1 - 2.9));
    }else{
      alert(nom1+" Lo siento pobre de mierda no te alcanza para ningun helado");

    }

    //pedro
    if(MT2>=0.6 && MT2<1 ){  //     && estos signos significan "ademas si"
       alert(nom2+" comprate el helado de agua");
       alert ("y te sobran" + (MT2 - 0.6));
    }
    else if (MT2>=1 && MT2<1.6 ){
       alert(nom2+" comprate el helado de crema");
       alert( "y te sobran" + (MT2 - 1));
    }
    else if (MT2>=1.6 && MT2<1.7 ){
       alert(nom2+" comprate el helado de heladix");
       alert ("y te sobran" + (MT2 - 1.6));
    }
    else if (MT2>=1.7 && MT2<1.8 ){
       alert(nom2+" comprate el helado marca heladovich");
       alert( "y te sobran" + (MT2 - 1.7));
    }
    else if (MT2>=1.8 && MT2<2.9 ){
       alert(nom2+" comprate el helado marca helardo");
       alert ("y te sobran" + (MT2 - 1.8));
    }
    else if (MT2>=2.9){
      alert(nom2+" comprate el helado con confetis o el pote de 1/4 KG");
      alert("y te sobran" + (MT2 - 2.9));
    }
    else{
      alert(nom2+" Lo siento pobre de mierda no te alcanza para ningun helado");

    }


    //Roberto
    if(MT3>=0.6 && MT3<1 ){  //     && estos signos significan "ademas si"
       alert(" comprate el helado de agua");
       alert("y te sobran" + (MT3 - 0.6));
    }
    else if (MT3>=1 && MT3<1.6 ){
       alert(nom3+" comprate el helado de crema");
       alert( "y te sobran" + (MT3 - 1));
    }
    else if (MT3>=1.6 && MT3<1.7 ){
       alert(nom3+" comprate el helado de heladix");
       alert("y te sobran" + (MT3 - 1.6));
    }
    else if (MT3>=1.7 && MT3<1.8 ){
       alert(nom3+" comprate el helado marca heladovich");
       alert( "y te sobran" + (MT3 - 1.7));
    }
    else if (MT3>=1.8 && MT3<2.9 ){
       alert(nom3+" comprate el helado marca helardo");
       alert("y te sobran" + (MT3 - 1.8));
    }
    else if (MT3>=2.9){
          alert(nom3+" comprate el helado con confetis o el pote de 1/4 KG");
          alert ("y te sobran" + (MT3 - 2.9));
    }else{
      alert(" Lo siento pobre de mierda no te alcanza para ningun helado");
    }
    return "fin"; 
}
export function ejercicio2(){
        //tipos de arrays

      //arrays asociativos objetos
      //los arrays asociativos nos permite colocarle un nombre a cada celda del arreglo
      //ejemplo

     //forma antigua de definir un array

     //aqui tenemos arreglo con 4 bloques 0,1,2,3
     let pc1 = ["DaltoPc","Intel Core I7","16GB","1TB"];
     //llamamos un datos de un areglo con numeros
     document.write("Arreglos con bloques de numeros <br>");
     document.write(pc1["0"])
     document.write("<br>"); //para hacer un salto de linea
     //de la forma nueva vamos a ponerle un nombre a cada bloque en ves de numeros
      let pc2 = {
        nombre: "DaltoPc",
        procesador: "Intel Core I7",
        ram:"16GB",
        espacio: "1TB"
     };
     //como vemos asi llamamos al bloque por su nombre y no por numeros.
     document.write("Arreglo con nombre de bloques <br>");
     document.write(pc2["procesador"]);
     document.write("<br>"); //para hacer un salto de linea
     //Ahora vamos a crear una variable para cada bloque del array

     let nombre = pc2["nombre"]; //variable nombre = arreglo pc pocision nombre
     let procesador = pc2["procesador"]; //variable procesador = arreglo pc en pocision procesador
     let ram = pc2["ram"];//variable ram = array pc1 en bloque ram
     let espacio = pc2["espacio"];//variable espacio en array pc1 en bloque espacio

     //creamos el texto de salida

     frase =`El nombre de mi pc es: ${nombre} <br>
        El procesador es: ${procesador} <br>
        La ram es: ${ram} <br>
        El espacio en memoria es: ${espacio} <br>
        `;   // la tilde al reves la ponemos con alt 96
           //<br> es salto de linea
           //${}es para poner una variable en comillas de texto
           //  ´´ es para colocar texto y variables al mismo tiempo
           // mostramos datos por pantalla de cada una de las variables anteriores
     document.write(frase);  //escribimos la variable frase
}
export function ejercicio3(){
   		
   alert(" el ciclo while es parecido al if la diferencia es que" +
         " el if a penas se cumpla la condicion termina" +
         " encambio el while continua el ciclo infinitamente y" +
         " para detenerlo necesitamos que no se cumpla la condicion"
   );

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
         return " fin ";
}
export function ejercicio4(){

				// el ciclo for:
				let i = 20;  //delaramos una variable i(incremento) y le damos un valor de 20
            let animal;
        
				//  (se puede volver a declarar una variable en el ciclo for pero al momento de salir del for su valor es 20)

				for (i = 0; i<5; i++){   // (1. Declaracion o inicializacion ; 2. Condición  ; 3. Aumento o decremento)
					document.write(i+"<br>"); // escribe el numero incrementado por pantalla hasta que acabe el ciclo (verticalmente con <br>)
				}
				document.write("<br>");

				//comando break para terminar un ciclo

				for ( i = 5; i>=0; i--){   // aqui hacemos que i valga 5, la condicion es que llegue a 0 y se ira decrementando
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
            return "fin"; 
}
export function ejercicio5(){

		// Es una sentencia que nos permite asociar cualquier bucle a un nombre (exepto for each) para poder terminarlo cuando queramos
		let array1=["Maria","Josefa","Roberta"];
		let array2= ["Pedro","Marcelo",array1, "josefina"];

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
      return "fin";
}
export function ejercicio6(){
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

			const saludarles =  info => {document.write(`¡hola como estas `);}  //creamos una funcion constante llamada saludarles con una variable llamada info
																			// donde almacena la informacion de hola como estas


			// reduciondo codigo mas
			const presentarse3 = nombre => {
				saludarles(); 						//llamamos a la funcion anterior para reducir el codigo mas aun
				document.write(nombre);				//escribimos el nombre por pantalla
			}

			br();
			presentarse3("juan");
         return "fin";
}
export function ejercicio7(){

   alert ("Un joven muy afortunado logro ganar el primer premio de la loteria... exacto, estamos hablando del pobre de cofla al que"+
      " cofla le dio una mano, este pobre decide hacer una fiesta para festejar que salio de la pobreza con este millonario"+
      " compro una maquina que deja pasar solamente a los mayores de edad, entre otras cosas..."+
      " deja pasar solo a los mayores de edad."+
      " la primera persona que entre despues de las 2 AM, no paga."
   );	


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
}
export function ejercicio8(){

         alert("B) cofla vuelve de la comision exausto y por lo cansado que estaba se fue a dormir..."+
            " Al otro dia comenzaron las clases del ciclo basico de la universidad (porque cofla quiere ser programador"+
            " y se inscribio en la facultad de ingenieria para estudiar desarrollo de software). "+
            " En su curso en total son 19 alumnos, pero surgio un problema que complico un poco la facultad:"+
            " se rompio el sistema de registros de asistencias y durante los proximos 30 dias no se podra hacer registros de datos de ningun tipo,"+
            " por ende las clases no podran comenzar hasta que esto este solucionado."

         );

         alert(" --Crear mini-sistema que nos permita registrar los alumnos que estan presentes(p) y los ausentes(A) en clase." +
               " --Pasados los 30 dias mostrar la situacion final de todos los alumnos(numero total de presentes y ausentes)." +
               " --Se puede tener un maximo de 10% de ausencias por semestre, si se tiene mas aclarar que esta reprobado." +
               " son 19 alumnos \n Alumnos (p) \n Alumnos (A) "
            );
					
			let cantidad = prompt("cuantos alumnos son "); // guardamos cuantos alumnos son en la variable cantidad

			let alumnosTotales =[];  //alumnosTotales va a guardar en un array la cantidad de alumnos

			for (i=0; i<cantidad; i++){ // decimos que i vale 0 y que i debera ser menor a la cantidad que digito el usuario
				alumnosTotales[i] =[prompt("Nombre del alumno" + (i+1)),0]; // en el array de alumnosTotales metemos la variable i que se va incrementando
																																	 // guardamos el nombre del alumno en el array alumnosTotales[i]
																																	 //(i+1) el numero del alumno
																								 // ponemos 0 en el segundo valor del array ["dato", 0] ya que un arreglo tiene distintos bloques
			}

			//creamos una funcion para tomar asistencia

			const TomarAsistencia =(nombre, p) => { //creamos una funcion constante donde tiene variables como nombre y pocision (p)

				let presencia = prompt(nombre);    //creamos variable presencia y le pedimos nombre
				if(presencia == "p" || presencia == "P" ){ //por si lo escribe con p minuscula o P mayuscula
					alumnosTotales[p][1]++;

				}
			}


			for (i=0; i<30; i++){ //vamos a hacer un bucle donde i valla desde cero hasta 30 y se incremente de 1 en 1.
				for (alumno in alumnosTotales){  //
					TomarAsistencia(alumnosTotales[alumno][0],alumno);
				}

			}


			for (alumno in alumnosTotales) {
					let resultado = `${alumnosTotales[alumno][0]}:<br>
					_________Presentes: ${alumnosTotales[alumno][1]}  <br>
					_________Ausencia: ${30 - parseInt(alumnosTotales[alumno[1]])}`;

				if (30 - alumnosTotales[alumno][1]>18) {
						resultado+= "<b style= 'color:red'>Reprobado por inacistencia </b> <br><br>";
					} else {
					resultado+= "<br><br>"
					}
					document.write(resultado);
			}

}
export function ejercicio9(){
  
//

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

}
export function ejercicio10(){
   alert(" La programacion orientada a objetos nos sirve para programar objetos como lo hariamos en la vida real.");
   alert(" Es la programacion orientada a objetos."+
		" Los obejtos estan conformados por clases."+
		" Los metodos son las funciones dentro de la clase"+	
		" El contructor "
		
   );
   class animal {
         constructor(especie,edad,color) {
             this.especie = especie;
             this.edad = edad;
             this.color = color;
             this.info = `soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
         }
         verinfo(){  document.write(this.info + "<br>")  }

     }



       let perro = new animal ("perro", 5, "marron");
       let gato = new animal ("gato", 2, "negro");
       let perico = new animal ("perico", 1, "verde");

       perro.verinfo();
       gato.verinfo();
       perico.verinfo();   
}



