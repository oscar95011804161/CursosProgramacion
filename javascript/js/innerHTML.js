

const header = document.querySelector('.header');
const footer = document.querySelector('.footer');

header.innerHTML =`

<div class="movimiento">
<nav class="navbar navbar-expand-sm  bg-dark  " data-bs-theme="dark">
    	<div class="container-fluid ">
	        <a class="navbar-brand" href="#">  </a>
	  .      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
	          <span class="navbar-toggler-icon"></span>
	        </button>
      		<div class="collapse navbar-collapse " id="navbarNavDropdown">
	      		<ul class="navbar-nav ms-auto me-5 "> <!--ms-auto es para que mande el menu a la izquierda me-5 para correr un poco ala izquierda-->
	      			
		          	<li class="nav-item"><a class="nav-link " aria-current="page" href="../index.html">Volver a index</a></li>
					<li class="nav-item"><a class="nav-link " aria-current="page" href="index.html">Inicio</a></li>
					
					
		            <li class="nav-item dropdown">
		              <a class="nav-link  dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
		               	Menu de cursos
		              </a>
		            	<ul class="dropdown-menu ">

		         				<li><a class="dropdown-item" href="Parte1.html">Curso de soy dalto 1.</a></li>
								<li><a class="dropdown-item" href="Parte2.html">Curso de soy dalto 2.</a></li>
								<li><a class="dropdown-item" href="cursos.html">Curso de javascript.</a></li>
								<li><a class="dropdown-item" href="ejercicios.html">ejercicios:</a></li>
								<li><a class="dropdown-item" href="clasesAdicionales.html">Clases adicionales:</a></li> 
		           		</ul>
		            </li>
		        </ul>
        	</div>
   	</div>
	</nav>	

</div>	

`;



footer.innerHTML =`

	<div class=" container pt-5 pb-5 mt-5">
		<div class="row ">

				<!--Los iconos se traen con <i class="bi bi-facebook"></i>  por ejemplo-->
	          <div class="text-center col-10 col-sm-4 mb-4">
	          	<a href="https://web.facebook.com/bhnnnnnn" class=" col"><i class="bi bi-facebook"></i> Facebook</a></div>
	          <div class="text-center col-10 col-sm-4 mb-4">
	          	<a href="https://web.whatsapp.com/" class=" col"><i class="bi bi-whatsapp"></i> Whatsap</a></div>
	          <div class="text-center col-10 col-sm-4 mb-4">
	          	<a href="https://github.com/oscar95011804161" class=" col"><i class="bi bi-github"></i> Github</a></div> 
	          <div class="text-center col-12"><a href="#" class=" col"> Pagina creada por oscar vanegas todos los derechos reservados 2023</a></div> 
	    
		</div>	
	</div>

`;


