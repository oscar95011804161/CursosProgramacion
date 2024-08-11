

// importa el objeto opciones con ES6+
import { opciones } from "./opciones.js";
import { opciones2 } from "./opciones2.js";

// Funcion principal ---------------------------------------------------------------------------------------
window.addEventListener("load", function(){ /*Load es cuando refresca la pagina se ejecutara la la funcion*/
    document.getElementById("app").addEventListener("click",
        function () {

            const respuesta = prompt("Que tema quieres ver: \n Condicionales 1 \n Bucleswhile 2");
            
            if (respuesta == 1){
                const eleccion1 = prompt("Que funcion quieres ejecutar: \n saludar: 1 \n "+ 
                    "detectar edad: 2 \n mayor o menor de edad: 3 \n contrasena: 4 \n impuestos: 5");
    
                //Convertir respuesta a numero y almacenar en opcion
                const opcion = parseInt(eleccion1);
    
                //Verificar si la opcion es valida y ejecutarla
                if (opciones[opcion]) {
                    opciones[opcion]();
                } else {
                    alert("Opcion invalida, Porfavor selecciona la opcion de 1 a 5");
                }
    
            } else if (respuesta == 2) {

                const eleccion2 = prompt("Que funcion quieres ejecutar: \n contador de numeros: 1 \n" +
                    "validar mayor o menor de edad : 2"
                 );
    
                //Convertir respuesta a numero y almacenar en opcion
                const opcion2 = parseInt(eleccion2);
    
                //Verificar si la opcion es valida y ejecutarla
                if (opciones2[opcion2]) {
                    opciones2[opcion2]();
                } else {
                    alert("Opcion invalida, Porfavor selecciona la opcion de 1 a 2");
                }                

            }else{
                alert("no elegiste un valor");
            }
             
            

    

}) /*final de la funcion principal*/
})  /*final del load function*/
