

// importa el objeto opciones con ES6+
import { opciones } from "./opciones.js";

// Funcion principal ---------------------------------------------------------------------------------------
window.addEventListener("load", function(){ /*Load es cuando refresca la pagina se ejecutara la la funcion*/
    document.getElementById("app").addEventListener("click",
        function () {
             
            const respuesta = prompt("Que funcion quieres ejecutar: \n saludar: 1 \n detectar edad: 2 \n mayor o menor de edad: 3 \n contrasena: 4");

            //Convertir respuesta a numero y almacenar en opcion
            const opcion = parseInt(respuesta);

            //Verificar si la opcion es valida y ejecutarla


            if (opciones[opcion]) {
                opciones[opcion]();
            } else {
                alert("Opcion invalida, Porfavor selecciona la opcion de 1 a 4");
            }


    

}) /*final de la funcion principal*/
})  /*final del load function*/
