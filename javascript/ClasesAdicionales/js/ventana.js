

//Traemos las variables 
//  Variables convertidas = 'Variables traidas del html'
const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');


//Aqui realizamos las funcionalidades

open.addEventListener('click', () => {
    modal_container.classList.add('show');
                                        
});

close.addEventListener('click', () =>{
    modal_container.classList.remove('show');
                                            
});

