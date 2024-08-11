
// importa las funciones desde otro archivo
import { saludar, detectarEdad, mayorDeEdad, contrasena, impuestos } from "./condicionales.js";


//objeto para mapear las opciones del menu de funciones
const opciones = {

    1: () => saludar("mario"),
    2: () => {
        alert("Esta funcion tiene el proposito de ingresar la edad del el usuario, en base a esa edad nombrar a cual categoria pertenece: ni�o, adolecente, adulto o anciano");
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
    },
    5: () => {
        alert("Descripción del Problema: \n\n"+
            "Imagina que trabajas en una empresa que paga impuestos según una serie de reglas. Necesitas implementar un sistema que calcule el impuesto de un empleado basado en su salario bruto y en ciertas condiciones." +
            "Las reglas para calcular el impuesto son las siguientes:\n"+
            "Salario Bruto: \n\n"+
            "Si el salario bruto es menor a $30,000, no se paga impuesto. \n"+
            "Si el salario bruto es entre $30,000 y $50,000 (inclusive), el impuesto es el 10% del salario bruto.\n"+
            "Si el salario bruto es mayor a $50,000, el impuesto es el 20% del salario bruto.\n"+
            "Bonificaciones y Descuentos:\n\n"+
            "Si el empleado ha trabajado en la empresa por más de 5 años, recibe un descuento del 5% en el impuesto calculado.\n"+
            "Si el empleado tiene alguna bonificación de $2,000 o más, el impuesto se reduce en un 10% adicional.\n"+
            "Requisitos:\n\n"+
            "Implementa el cálculo del impuesto utilizando solo estructuras condicionales (if, else if, else).\n"+
            "No utilices bucles ni funciones adicionales.\n");

        let valor5 = prompt("Cual es el salario del empleado");
        let valor51 = prompt("cuantos años a trabajado el empleado en la empresa");
        let valor52 = prompt("De cuanto es la bonificacion del empleado, si no tiene ponga 0");

        alert(impuestos(valor5, valor51, valor52));
    }
};   

export { opciones };