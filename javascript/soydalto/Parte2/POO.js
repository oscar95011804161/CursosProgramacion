window.addEventListener("load", function(){ /*Load es cuando refresca la pagina se ejecutara la la funcion*/
      document.getElementById("ejercicio9").addEventListener("click",
  function() {
      alert("hola mundo .");

      //nos sirve para programar objetos como lo hariamos en la vida real
      class animal {
            constructor(especie,edad,color) {
                this.especie = especie;
                this.edad = edad;
                this.color = color;
                this.info = `soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
            }
            verinfo(){  document.write(this.info + "<br>")  }

        }



          let perro = new animal ("perro", 5, "marron");
          let gato = new animal ("gato", 2, "negro");
          let perico = new animal ("perico", 1, "verde");

          perro.verinfo();
          gato.verinfo();
          perico.verinfo();
    }















  }) /*final de la funcion principal*/
 })  /*final del load function*/
