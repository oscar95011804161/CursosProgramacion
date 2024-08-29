//modulos ES6+
import { opciones } from "./opcionesdalto.js";


//Funcion principal-------------------------------------------------------------
window.addEventListener("load", function(){ /*Load es cuando refresca la pagina se ejecutara la la funcion*/
      document.getElementById("appdalto").addEventListener("click",

function() {



    const eleccion1 = prompt ("Elije \n 1: Tema cofla\n 2: Tema arrays \n 3: Tema while \n"+
                            " 4: Tema for, continue,for in, for of\n"+
                            " 5: Tema label \n 6: Tema funciones \n 7: entrada cofla \n"+
                            " 8: Tema Entrada cofla. \n 9: Tema for each \n 10: Tema Objetos "
      );
    
                //Convertir respuesta a numero y almacenar en opcion
                const opcion = parseInt(eleccion1);
    
                //Verificar si la opcion es valida y ejecutarla
                if (opciones[opcion]) {
                    opciones[opcion]();
                } else {
                    alert("Opcion invalida, Porfavor selecciona la opcion de 1 a 7");
                }

 }) /*final de la funcion principal*/
})  /*final del load function*/