// importa las funciones desde otro archivo
import {saludar, detectarEdad} from "./funciones.js";

//cremos la funcion principal
window.addEventListener("load", function(){ /*Load es cuando refresca la pagina se ejecutara la la funcion*/
    document.getElementById("app").addEventListener("click",
function() {
    
    //definimos variables
    let respuesta;
    let valor;


    alert("Que funcion quieres ejecutar saludar 1 o detectar edad 2");
    
    respuesta=prompt("escriba 1  o 2");

    if(respuesta==1){
        //saludar el nombre de la funcion y mario el valor de la variable
        saludar ("mario");

    } else if(respuesta==2){
         valor = prompt("Digite la edad de la persona");
        alert(detectarEdad(valor)) ;
       // console.log(detectarEdad(valor)); //valor que el usuario coloque
    }else{
        alert("no has digitado 1 o 0");

    }
    

}) /*final de la funcion principal*/
})  /*final del load function*/
