export function contador (cont){

    alert("Imprimir los números del 1 al 5");
        //let valor1 = prompt("");
    cont = 1;
    while (cont<5) {
        alert (cont);
        cont ++;
    }
    return cont;
}


export function validarEdad (){

    //declarando variable.
    let validacion= false;
    let edad;
    alert("Ejercicio: Validación de Edad\n"+
        "En este ejercicio, crearás un programa que pide al usuario que ingrese su edad y luego verifica si es"+ 
        " mayor de edad. El programa seguirá pidiendo la edad hasta que el usuario ingrese un valor válido"+ 
        " (un número positivo). Además, el programa debe informar si el usuario es mayor o menor de edad."
    );

    while (!validacion) {

        edad =  parseInt (prompt("Escriba la edad de la persona (debe ser positivo)"));
        //validar que sea positivo
        if (isNaN (edad) || edad < 0) {
            alert("la edad debe ser un numero positivo");
            
        } else if (edad >= 18) {
            validacion = true; //se sale del bucle si la edad es valida.
            return "Eres mayor de edad";
            
        }else if(edad <18 ){ 
            alert("Eres menor de edad(debes ser  mayor de edad)");  
        }    

    }

}

