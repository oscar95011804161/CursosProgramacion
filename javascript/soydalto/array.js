
window.addEventListener("load", function(){ /*Load es cuando refresca la pagina se ejecutara la la funcion*/
      document.getElementById("ejercicio2").addEventListener("click",

function() {

      //tipos de arrays

      //arrays asociativos objetos
      //los arrays asociativos nos permite colocarle un nombre a cada celda del arreglo
      //ejemplo

     //forma antigua de definir un array

     //aqui tenemos arreglo con 4 bloques 0,1,2,3
     let pc1 = ["DaltoPc","Intel Core I7","16GB","1TB"];
     //llamamos un datos de un areglo con numeros
     document.write("Arreglos con bloques de numeros <br>");
     document.write(pc1["0"])
     document.write("<br>"); //para hacer un salto de linea
     //de la forma nueva vamos a ponerle un nombre a cada bloque en ves de numeros
      let pc2 = {
        nombre: "DaltoPc",
        procesador: "Intel Core I7",
        ram:"16GB",
        espacio: "1TB"
     };
     //como vemos asi llamamos al bloque por su nombre y no por numeros.
     document.write("Arreglo con nombre de bloques <br>");
     document.write(pc2["procesador"]);
     document.write("<br>"); //para hacer un salto de linea
     //Ahora vamos a crear una variable para cada bloque del array

     let nombre = pc2["nombre"]; //variable nombre = arreglo pc pocision nombre
     let procesador = pc2["procesador"]; //variable procesador = arreglo pc en pocision procesador
     let ram = pc2["ram"];//variable ram = array pc1 en bloque ram
     let espacio = pc2["espacio"];//variable espacio en array pc1 en bloque espacio

     //creamos el texto de salida

     frase =`El nombre de mi pc es: ${nombre} <br>
        El procesador es: ${procesador} <br>
        La ram es: ${ram} <br>
        El espacio en memoria es: ${espacio} <br>
        `;   // la tilde al reves la ponemos con alt 96
           //<br> es salto de linea
           //${}es para poner una variable en comillas de texto
           //  ´´ es para colocar texto y variables al mismo tiempo
           // mostramos datos por pantalla de cada una de las variables anteriores
     document.write(frase);  //escribimos la variable frase


  }) /*final de la funcion principal*/
})  /*final del load function*/
