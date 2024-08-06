
// importa las funciones desde otro archivo
import { saludar, detectarEdad, mayorDeEdad, contrasena } from "./funciones.js";


//objeto para mapear las opciones del menu de funciones
const opciones = {

    1: () => saludar("mario"),
    2: () => {
        alert("Esta funcion tiene el proposito de ingresar la edad del el usuario, en base a esa edad nombrar a cual categoria pertenece: niño, adolecente, adulto o anciano");
        let valor2 = prompt("Digite la edad de la persona");
        alert(detectarEdad(valor2));
    },
    3: () => {

        alert("Escribir un programa que pregunte al usuario su edad y muestre por pantalla si es mayor de edad o no.");
        let valor3 = prompt("Cual es su edad");
        alert(mayorDeEdad(valor3));

    },
    4: () => {
        alert("Escribir un programa que almacene la cadena de caracteres contrasena en una variable, pregunte al usuario por la contrasena e imprima por pantalla si la contrasena introducida por el usuario coincide con la guardada en la variable sin tener en cuenta mayusculas y minusculas.");
        let valor4 = prompt("Escriba la contrasena");

        alert(contrasena(valor4));
    }
};   

export { opciones };