//modulos ES6+
import { opciones } from "./opcionesdalto.js";


//Funcion principal-------------------------------------------------------------
window.addEventListener("load", function(){ /*Load es cuando refresca la pagina se ejecutara la la funcion*/
      document.getElementById("appdalto").addEventListener("click",

function() {



    const eleccion1 = prompt ("elije \n 1: Tema cofla\n"+ "2: Tema" );
    
                //Convertir respuesta a numero y almacenar en opcion
                const opcion = parseInt(eleccion1);
    
                //Verificar si la opcion es valida y ejecutarla
                if (opciones[opcion]) {
                    opciones[opcion]();
                } else {
                    alert("Opcion invalida, Porfavor selecciona la opcion de 1 a 2");
                }

 }) /*final de la funcion principal*/
})  /*final del load function*/