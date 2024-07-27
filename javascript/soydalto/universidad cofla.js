window.addEventListener("load", function(){ /*Load es cuando refresca la pagina se ejecutara la la funcion*/
      document.getElementById("ejercicio8").addEventListener("click",

function() {

			//B) cofla vuelve de la comision exausto y por lo cansado que estaba se fue a dormir...
			//Al otro dia comenzaron las clases del ciclo basico de la universidad (porque cofla quiere ser programador
			// y se inscribio en la facultad de ingenieria para estudiar desarrollo de software).
			//En su curso en total son 19 alumnos, pero surgio un problema que complico un poco la facultad:
			//se rompio el sistema de registros de asistencias y durante los proximos 30 dias no se podra hacer registros de datos de ningun tipo,
			// por ende las clases no podran comenzar hasta que esto este solucionado.

					// --Crear mini-sistema que nos permita registrar los alumnos que estan presentes(p) y los ausentes(A) en clase.
					// --Pasados los 30 dias mostrar la situacion final de todos los alumnos(numero total de presentes y ausentes).
					// --Se puede tener un maximo de 10% de ausencias por semestre, si se tiene mas aclarar que esta reprobado.

			// son 19 alumnos
			//Alumnos (p)
			//Alumnos (A)
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

	}) /*final de la funcion principal*/
})  /*final del load function*/
