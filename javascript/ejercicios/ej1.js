window.addEventListener("load", function(){ /*Load es cuando refresca la pagina se ejecutara la la funcion*/
      document.getElementById("ejercicio1").addEventListener("click",
  function() {



      document.write("hola mundo");
      alert("Programa para realizar sumas resta multiplicacion y division");

      alert("Ahora vas a colocar los los numeros para realizar las operaciones matematicas");
      numero1=prompt("escriba el primer numero");
      numero2=prompt("escriba el segundo numero");

      operacion = prompt("Digite la operacion que desea realizar suma 1 resta 2 multiplicacion 3 y dividsion 4");

      numero1=parseInt(numero1);
      numero2=parseInt(numero2);
      operacion=parseInt(operacion);


      if (operacion == 1) {
          suma = numero1 + numero2;
          alert("El resultado de la suma es " + suma);

      } else if (operacion == 2) {
          resta = numero1 - numero2;
          alert("El resultado de la resta es " + resta);
      } else if (operacion == 3) {
          multiplicacion = numero1 * numero2;
          alert("El resultado de la multiplicacion es " + multiplicacion);
      } else if (operacion == 4) {
          division = numero1 / numero2;
          alert("El resultado de la division es " + division);
      } else {
          alert("El valor ingresado no es valido vuelva a ingresar la operacion a realizar");
      }




  }) /*final de la funcion principal*/
 })  /*final del load function*/
