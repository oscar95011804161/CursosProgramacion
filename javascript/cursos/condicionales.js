
//Funciones sobre el tema condicional 

//Funcion para saludar
export function saludar(nombre){
    //console.log("Hola, " + nombre + "!");
    alert("Esta funcion tiene el proposito de saludar tomando como paramentro el valor dejado en la funcion");
    alert("Hola,"+nombre+"!");
}    


//la funcion se llama detectarEdad la variable es edad
export function detectarEdad() {

    alert("Esta funcion tiene el proposito de ingresar la edad del el usuario,\n" +
            "en base a esa edad nombrar a cual categoria pertenece: nino, adolecente, adulto o anciano");
    const edadString = prompt("Digite la edad de la persona");
    const edad = parseInt(edadString, 10); 

    if (isNaN(edad)) {
        return "invalido"; // Retorna "invalido" si la entrada no es un número
    }

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

export function mayorDeEdad() {

    alert("Programa que pregunta al usuario su edad y " +
        "muestre por pantalla si es mayor de edad o no.");

    const EdadStringM = prompt("Cual es su edad"); 
    const edadM = parseInt(EdadStringM, 10);

    if (isNaN(edadM)) {
        return "invalido";
    }

    if (edadM >= 1 &&   edadM   <= 17) {
        return "es menor de edad";
    } else if (edadM >= 18 && edadM <=120) {
        return "Es mayor de edad";

    } else {
        return "invalido ";
    }
}

export function contrasena() {

    alert("Escribir un programa que almacene la cadena de caracteres contrasena en una variable,"+
         "pregunte al usuario por la contrasena e imprima por pantalla si la contrasena introducida"+
          "por el usuario coincide con la guardada en la variable sin tener en cuenta mayusculas y minusculas.");
    
    const contrasenaCorrecta = "contrasena"; 
    const passString = prompt("Escriba la contrasena");

    // Convierte la entrada a minúsculas para la comparación    
    const pass = passString ? passString.toLowerCase() : "";
        
    if (pass == contrasenaCorrecta) {
        return "la contrasena es correcta";
    } else if (pass != contrasenaCorrecta) {
        return "la contrasena es incorrecta";
    } else {
        return ("invalido");
    }
    
}

export function impuestos (){

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

    const salarioString = prompt("Cual es el salario del empleado");
    const salario = parseFloat(salarioString, 10); 
    if (isNaN(salario) || salario < 0) {
        return "salario invalido";
    }
    const anosString = prompt("cuantos años a trabajado el empleado en la empresa");
    const anos = parseInt (anosString,10)
    if (isNaN(anos) || anos < 0) {
        return "anos invalidos";
    }
    const bonificacionString = prompt("De cuanto es la bonificacion del empleado, si no tiene ponga 0");
    const bonificacion = parseFloat (bonificacionString,10);
    if (isNaN(bonificacion) || bonificacion < 0) {
        return "bonificacion invalida";
    }

    //variables locales.
    let impuesto = 0 ; 
    
    if (salario<30000) {
        return `no paga impuestos su salario es ${salario}` ;
    }

    if(bonificacion<2000){

        if(anos<5){
                 
             if(salario>=30000 && salario<=50000 ){
                impuesto = salario * 0.10;
                return `su salario es ${salario} su impuesto es del 10% ${impuesto}`;

            }else if(salario>50000){
                impuesto = salario * 0.20;
                return `su salario es ${salario} su impuesto es del 20% ${impuesto}`;
            }

        } else if(anos>=5){

             if(salario>=30000 && salario<=50000 ){
                impuesto = salario * 0.05;
                return `su salario es ${salario} su impuesto es del 5% ${impuesto}`;

            }else if(salario>50000){
                impuesto = salario * 0.15;
                return `su salario es ${salario} su impuesto es del 15% ${impuesto}`;
            }
        }

    } if(bonificacion>=2000){

        if(anos<5){

             if(salario>=30000 && salario<=50000 ){
                return `no paga impuestos su salario es ${salario}`;
            }else if(salario>50000){
                impuesto = salario * 0.10;
                return `su salario es ${salario} su impuesto es del 10% ${impuesto}`;
            }
        } else if(anos>=5){

            if(salario>=30000 && salario<=50000 ){
                return `no paga impuestos su salario es ${salario}`;
            }else if(salario>50000){
                impuesto = salario*0.05;
                return `su salario es ${salario} su impuesto es del 5% ${impuesto}`;
            }

        }
    }

    else{
        return "Algun dato esta mal";
    }
}



