
// importa las funciones desde otros archivos
import { saludar, detectarEdad, mayorDeEdad, contrasena, impuestos, calculadora } from "./condicionales.js";
import { contador, validarEdad } from "./bucleswhile.js";
import {numero1a10, Tablas} from "./bucleFor.js"

// Definir el objeto opciones para el menú principal
const opciones = {
    1: () => condicionalesMenu(),  // Llamar al menú de condicionales
    2: () => buclewhileMenu(),      // Llamar al menú de bucles while
    3: () => bucleForMenu()
};

// Función para el menú de condicionales
function condicionalesMenu() {
    const opcion = prompt("¿Qué función quieres ejecutar? \n 1. Saludar \n 2. Detectar Edad \n "+
                            " 3. Mayor o Menor de Edad \n 4. Contraseña \n 5. Impuestos \n 6. Calculadora.");

    const condicionales = {
        1: () => alert(saludar("Mario")),
        2: () => alert(detectarEdad()),
        3: () => alert(mayorDeEdad()),
        4: () => alert(contrasena()),
        5: () => alert(impuestos()),
        6: () => alert(calculadora())
    };

    // Ejecutar la función basada en la selección del usuario
    if (condicionales[opcion]) {
        condicionales[opcion](); // Llamar a la función seleccionada
    } else {
        alert("Opción inválida.");
    }
}

// Función para el menú de bucles while
function buclewhileMenu() {
    const opcion = prompt("¿Qué función quieres ejecutar en bucles while? \n1. Contador \n2. Validar Edad");

    const bucleswhile = {
        1: () => alert(contador()),
        2: () => alert(validarEdad())
        
    };

    // Ejecutar la función basada en la selección del usuario
    if (bucleswhile[opcion]) {
        bucleswhile[opcion](); // Llamar a la función seleccionada
    } else {
        alert("Opción inválida.");
    }
}

// Función para el menú de bucles while
function bucleForMenu() {
    const opcion = prompt("¿Qué función quieres ejecutar en bucles For? \n"+
        "1. numero 1 al 10 \n2. Tablas de multiplicar \n3. Tablas de multiplicar 2");

    const bucleFor = {

        
        1: () => alert(numero1a10()),
        2: () => alert(Tablas()),
        3: () => alert(Tablas2())
        
    };

    // Ejecutar la función basada en la selección del usuario
    if (bucleFor[opcion]) {
        bucleFor[opcion](); // Llamar a la función seleccionada
    } else {
        alert("Opción inválida.");
    }
}

// Exportar el objeto opciones para usar en otro archivo
export { opciones };