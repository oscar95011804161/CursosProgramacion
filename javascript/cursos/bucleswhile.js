export function contador (cont){

    cont = 1;
    while (cont<5) {
        alert (cont);
        cont ++;
    }
    return cont;
}


export function validarEdad (edad){

    
    let validacion= false;



    while (!validacion) {

        edad =  parseInt (prompt("Escriba la edad de la persona (debe ser positivo)"));
        //validar que sea positivo
        if (isNaN (edad) || edad < 0) {
            alert("la edad debe ser un numero positivo");
            return;
        } else if (edad >= 18) {
            alert("Eres mayor de edad");
            validacion = true; //se sale del bucle si la edad es valida.
        }else if(edad <18 ){ 
            alert("Eres menor de edad");
            validacion = false;
        }else {
            alert("eres menor de edad porfavor ingresa una edad mayor o igual a 18");
        }      

    }

}