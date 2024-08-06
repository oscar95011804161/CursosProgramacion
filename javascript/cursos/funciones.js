

// funciones js


//Funcion para saludar
export function saludar(nombre){
    //console.log("Hola, " + nombre + "!");
    alert("Esta funcion tiene el proposito de saludar tomando como paramentro el valor dejado en la funcion");
    alert("Hola,"+nombre+"!");
}    


//la funcion se llama detectarEdad la variable es edad
export function detectarEdad(edad) {


    if (edad >= 1 && edad <= 13) {
        return "niño";
    } else if (edad >= 14 && edad <= 19) {
        return "adolecente";
    } else if (edad >= 20 && edad <= 64) {
        return "adulto";
    } else if (edad > 64 && edad < 150 ) {
        return "anciano";
    } else {
        return "invalido";
    }
}

export function mayorDeEdad(edadM) {


    if (edadM >= 1 &&   edadM   <= 17) {
        return "es menor de edad";
    } else if (edadM >= 18 && edadM <=120) {
        return "Es mayor de edad";

    } else {
        return "invalido ";
    }

}

export function contrasena(pass) {


    if (pass == "contrasena") {
        return "la contrasena es correcta";
    } else if (pass != "contrasena") {
        return "la contrasena es incorrecta";
    } else {
        return ("invalido");
    }
    
}


