
//Declaracion de variables

//creamos variables y llamamos a las etiqueta de html con querySelector
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var formulario_login  = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");

var caja__trasera_login  = document.querySelector(".caja__trasera-login");
var caja__trasera_register = document.querySelector(".caja__trasera-register");

document.getElementById("Btn-register").addEventListener("click", register);
document.getElementById("Btn-login").addEventListener("click", login);
window.addEventListener("resize", anchoPagina);




function login () {
  if (window.innerWidth > 850 ) {                   //es para responsive

    formulario_register.style.display = "none";
    contenedor_login_register.style.left = "10px";
    formulario_login.style.display = "block";
    caja__trasera_register.style.opacity = "1";
    caja__trasera_login.style.opacity = "0";
  } else {
    formulario_register.style.display = "none";
    contenedor_login_register.style.left = "0px";
    formulario_login.style.display = "block";
    caja__trasera_register.style.display = "block";
    caja__trasera_login.style.display = "none";
  }

}

 function anchoPagina(){
   if (window.innerWidth > 850) {
        caja__trasera_login.style.display = "block";
        caja__trasera_register.style.display = "block";
    }else {
      caja__trasera_register.style.display = "block";
      caja__trasera_register.style.opacity = "1";
      caja__trasera_login.style.display ="none";
      formulario_login.style.display ="block";
      formulario_register.style.display = "none";
      contenedor_login_register.style.left = "0px";
    }
 }

 anchoPagina();//Para que no se ve las letras pegadas cuando se hace resize

  function register () {
    if (window.innerWidth > 850) {
      formulario_register.style.display = "block";// en ccs esta en display block pero aqui lo cambiamos para hacer el movimiento
      contenedor_login_register.style.left = "410px";
      formulario_login.style.display = "none";
      caja__trasera_register.style.opacity = "0";
      caja__trasera_login.style.opacity = "1";
    }else {
      formulario_register.style.display = "block";
      contenedor_login_register.style.left = "0px";
      formulario_login.style.display = "none";
      caja__trasera_register.style.display = "none";
      caja__trasera_login.style.display = "block";
      caja__trasera_login.style.opacity = "1";
    }
}
