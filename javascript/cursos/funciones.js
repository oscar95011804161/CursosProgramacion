

// funciones js


//Funcion para saludar
export function saludar(nombre){
    //console.log("Hola, " + nombre + "!");
    alert("Hola,"+nombre+"!");
}    


//la funcion se llama detectarEdad la variable es edad
export function detectarEdad(edad){

    if(edad <= 13){
        return "niño";   
    }else if(edad >=14 && edad <= 19){
        return "adolecente";
    }else if(edad >=20 && edad <= 64 ){
        return "adulto";
    }else{
        return "anciano";
    }
}





