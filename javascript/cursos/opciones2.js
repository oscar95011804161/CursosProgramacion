// importa las funciones desde otro archivo
import { contador, validarEdad } from "./bucleswhile.js";


//objeto para mapear las opciones del menu de funciones
const opciones2 = {

    1: () => {
        alert (contador());
    },
    2: () => {
        alert (validarEdad());
    }    
};   

export { opciones2 };