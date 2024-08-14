
// importa las funciones desde otros archivos
import { saludar, detectarEdad, mayorDeEdad, contrasena, impuestos } from "./condicionales.js";
import { contador, validarEdad } from "./bucleswhile.js";

// Definir el objeto opciones para el menú principal
const opciones = {
    1: () => condicionalesMenu(),  // Llamar al menú de condicionales
    2: () => buclewhileMenu()      // Llamar al menú de bucles while
};

// Función para el menú de condicionales
function condicionalesMenu() {
    const opcion = prompt("¿Qué función quieres ejecutar? \n1. Saludar \n2. Detectar Edad \n3. Mayor o Menor de Edad \n4. Contraseña \n5. Impuestos");

    const condicionales = {
        1: () => alert(saludar("Mario")),
        2: () => alert(detectarEdad()),
        3: () => alert(mayorDeEdad()),
        4: () => alert(contrasena()),
        5: () => alert(impuestos())
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

// Exportar el objeto opciones para usar en otro archivo
export { opciones };