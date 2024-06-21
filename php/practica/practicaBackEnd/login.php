<head>

	<title>Curso php (Backend)</title>

	<meta charset="utf-8" -|lang="es">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="author" content="Oscar Vanegas">
	<meta name="keywords" content="inicio, curso, html, menus, metadatos, listas">
	<meta name="description" content="esta es una pagina web para aprender css basico sin lenguajes adicionales">
	<meta name="Copyright" content="oscarVanegas">
    <!--Codigo ccs-->
	<link rel="stylesheet" type="text/css" href="css/normalize.css">
	<link rel="stylesheet" type="text/css" href="css/styleStandard.css">
	<link rel="stylesheet" type="text/css" href="css/styleStandardResp.css">
	<link rel="stylesheet" type="text/css" href="css/LoginRegister.css">
	<meta http-equiv="X-UA-Compatible" content="IE=edge"> <!--Es necesario para que podamos hacer el efecto-->



</head>
<body >

			<div class="background-container ">
				<div class="card-container glass-effect">
					<header>
						<nav>
							<ul>
								<li><a href="index.html">Inicio</a></li>
								<li><a href="login.php">Registrarse e iniciar sesión</a></li>
							</ul>
						</nav>
					</header>
					<main>
					<h1 class="h1 ColorBlanco">Login y register</h1>
					<p class="center ColorBlanco">Registro e inicio de sesion estandar</p><br>
					<div class="contenedor__todo">
						<!--Cajas traseras-->
						<div class="caja__trasera">
						<!--Caja trasera login-->
							<div class="caja__trasera-login">
								<h3 class="ColorBlanco">¿Ya tienes una cuenta?</h3>
								<p class="ColorBlanco">Inicia sesión para entrar a la pagina</p>
								<button id="Btn-login">Iniciar sesion </button>
							</div>
							<!--Caja trasera register-->
							<div class="caja__trasera-register">
								<h3 class="ColorBlanco">¿Aun no tienes una cuenta?</h3>
								<p class="ColorBlanco">Registrate para entrar a la pagina</p>
								<button id="Btn-register">Registrarse</button>
							</div>
						</div>
					<!--Contenedor de formularios-->
						<div class="contenedor__login-register">
							<!--Formulario login-->
							<form action="" class="formulario__login">
								<h2>iniciar sesion</h2>
								<input type="text" placeholder="Correo electronico">
								<input type="password" placeholder="contraseña">
								<button>Entrar</button>
							</form>
							<!--Formulario register-->

							<!--Action para buscar archivo php para guardar en db -->
							<!--method"POST es el metodo para enviar datos a la db"-->
							<form action="php/Registro_db.php" method="POST" class="formulario__register">
								<h2>Registrarse</h2>
								<input type="text" placeholder="Nombre completo" name="name">
								<input type="text" placeholder="Correo electronico" name="email">
								<input type="text" placeholder="Usuario" name="user">
								<input type="password" placeholder="contraseña" name="pass">
								<button>Registrarse</button>
							</form>
						</div>
					</div>
					</main>
					<!--Codigo javascript-->
					<script src="js/practica.js"></script>
				</div>
			</div>



</body>
</html>
