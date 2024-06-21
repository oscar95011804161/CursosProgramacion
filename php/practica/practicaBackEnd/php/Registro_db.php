<?php

  //Traemos el archivo conexion_db.php
  include'conexion_db.php';
  //creamos 4 variables donde vamos a traer los html name
  //utilizamos el metodo $_post[""]; para enviar los datos a la db
  $nombre = $_POST["name"];
  $correo = $_POST["email"];
  $usuario = $_POST["user"];
  $contrasena = $_POST["pass"];

  //creamos una variable llamada guardar y ahi guardamos
  //insertamos datos en la tabla usuarios y colocamos los nombres de los datos
  //en las variables que creamos
  $guardar= "INSERT INTO usuarios(nombre_completo, email, usuario, password )
            VALUES ('$nombre', '$correo', '$usuario', '$contrasena')";

  //creamos una variable ejecutar
  //llamamos a la funcion    mysqli_query();
  //Dentro de la funcion llamamos a la variable $conexion del otro documento
  // Ejecutamos la variable guardar que creamos en este documento.
  $ejecutar = mysqli_query($conexion,  $guardar);

  //Colocamos un mensaje de alerta en javascript que diga usuario almacenado exitosamente
  //luego volvemos al menu con el metodo window.location =""
  if ($ejecutar) {
    echo '<script>  alert("Usuario almacenado exitosamente");
                    window.location="../index.html"
          </script>';
  }else {
    echo '<script>  alert("Intentelo denuevo usuario no almacenado ");
               window.location="../index.html"
          </script>';
  }
  //cerramos la conexion con la base de datos
  mysqli_close($conexion);
 ?>
