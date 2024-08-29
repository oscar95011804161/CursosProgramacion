
// importa el objeto opciones con ES6+
import { opciones } from "./opciones.js";


// Funcion principal ---------------------------------------------------------------------------------------
window.addEventListener("load", function(){ /*Load es cuando refresca la pagina se ejecutara la la funcion*/
    document.getElementById("app").addEventListener("click",
        function () {

        const respuesta = prompt("¿Qué tema quieres ver? \n1. Condicionales \n2. Bucles While\n"+
            " 3. Bucle for"
        );

        // Ejecutar la opción seleccionada en el menú principal
        if (opciones[respuesta]) {
            opciones[respuesta]();
        } else {
            alert("Opción inválida.");
        }

}) /*final de la funcion principal*/
})  /*final del load function*/
