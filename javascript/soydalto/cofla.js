

//Funcion principal-------------------------------------------------------------
window.addEventListener("load", function(){ /*Load es cuando refresca la pagina se ejecutara la la funcion*/
      document.getElementById("ejercicio1").addEventListener("click",

function() {

    MT1=0;
    MT2=0;
    MT3=0;

    alert(
      "3 chicos de 23 años perfectamente normales entran a una heladería a comprar un helado, pero hay un problema: Los precios no están al lado de cada estante con su respectivo helado.\n\n" +
      "Ellos quieren comprar el helado más caro que puedan con el dinero que tienen, así que veamos cómo podemos ayudarlos.\n\n" +
      "Roberto tiene $1.5 USD\n" +
      "Pedro tiene $1.7 USD\n" +
      "Cofla tiene $3 USD\n\n" +
      "Los precios de los helados son los siguientes:\n" +
      "- Palito de helado de agua: $0.6 USD\n" +
      "- Palito de helado de crema: $1 USD\n" +
      "- Bombón helado marca Heladix: $1.6 USD\n" +
      "- Bombón helado marca Heladovich: $1.7 USD\n" +
      "- Bombón helado marca Helardo: $1.8 USD\n" +
      "- Potecito de helado con confetis: $2.9 USD\n" +
      "- Pote de 1/4 KG: $2.9 USD\n\n" +
      "CREAR SOLUCIONES:\n" +
      "- Pedirles que ingresen el monto que tienen y mostrarles el helado más caro que puedan comprar.\n" +
      "- Si hay 2 o más con el mismo precio, mostrar ambos.\n" 
      
  );
  alert("- Cofla quiere saber cuánto es el vuelto");
  
    MT1 = prompt("cuanto dinero tiene Cofla?"); //dinero Cofla
    MT2 = prompt("cuanto dinero tiene Pedro?"); //dinero Pedro
    MT3 = prompt("cuanto dinero tiene Roberto?");   //dinero Roberto

    MT1=parseInt(MT1); //se usa para comvertir dinero cofla a entero despues de ser digitado
    MT2=parseInt(MT2); //se usa para comvertir dinero Pedro a entero despues de ser digitado
    MT3=parseInt(MT3); //se usa para comvertir dinero Roberto a entero despues de ser digitado

    nom1= "cofla";
    nom2= "Pedro";
    nom3= "Roberto";
    //cofla

    if(MT1>=0.6 && MT1<1 ){  //     && estos signos significan "ademas si"
       alert(nom1+" comprate el helado de agua");
       alert("y te sobran" + (MT1 - 0.6));
    }
    else if (MT1>=1 && MT1<1.6 ){
       alert(nom1 +" comprate el helado de crema");
       alert("y te sobran" + (MT1 - 1));
    }
    else if (MT1>=1.6 && MT1<1.7 ){
       alert(nom1+" comprate el helado de heladix");
       alert("y te sobran" + (MT1 - 1.6));
    }
    else if (MT1>=1.7 && MT1<1.8 ){
       alert(nom1+" comprate el helado marca heladovich");
       alert("y te sobran" + (MT1 - 1.7));
    }
    else if (MT1>=1.8 && MT1<2.9 ){
       alert(nom1+" comprate el helado marca helardo");
       alert("y te sobran" + (MT1 - 1.8));
    }
    else if (MT1>=2.9){
          alert(nom1+" comprate el helado con confetis o el pote de 1/4 KG");
          alert("y te sobran" + (MT1 - 2.9));
    }else{
      alert(nom1+" Lo siento pobre de mierda no te alcanza para ningun helado");

    }

    //pedro
    if(MT2>=0.6 && MT2<1 ){  //     && estos signos significan "ademas si"
       alert(nom2+" comprate el helado de agua");
       alert("y te sobran" + (MT2 - 0.6));
    }
    else if (MT2>=1 && MT2<1.6 ){
       alert(nom2+" comprate el helado de crema");
       alert("y te sobran" + (MT2 - 1));
    }
    else if (MT2>=1.6 && MT2<1.7 ){
       alert(nom2+" comprate el helado de heladix");
       alert("y te sobran" + (MT2 - 1.6));
    }
    else if (MT2>=1.7 && MT2<1.8 ){
       alert(nom2+" comprate el helado marca heladovich");
       alert("y te sobran" + (MT2 - 1.7));
    }
    else if (MT2>=1.8 && MT2<2.9 ){
       alert(nom2+" comprate el helado marca helardo");
       alert("y te sobran" + (MT2 - 1.8));
    }
    else if (MT2>=2.9){
          alert(nom2+" comprate el helado con confetis o el pote de 1/4 KG");
          alert("y te sobran" + (MT2 - 2.9));
    }
    else{
      alert(nom2+" Lo siento pobre de mierda no te alcanza para ningun helado");

    }


    //Roberto
    if(MT3>=0.6 && MT3<1 ){  //     && estos signos significan "ademas si"
       alert(" comprate el helado de agua");
       alert("y te sobran" + (MT3 - 0.6));
    }
    else if (MT3>=1 && MT3<1.6 ){
       alert(nom3+" comprate el helado de crema");
       alert("y te sobran" + (MT3 - 1));
    }
    else if (MT3>=1.6 && MT3<1.7 ){
       alert(nom3+" comprate el helado de heladix");
       alert("y te sobran" + (MT3 - 1.6));
    }
    else if (MT3>=1.7 && MT3<1.8 ){
       alert(nom3+" comprate el helado marca heladovich");
       alert("y te sobran" + (MT3 - 1.7));
    }
    else if (MT3>=1.8 && MT3<2.9 ){
       alert(nom3+" comprate el helado marca helardo");
       alert("y te sobran" + (MT3 - 1.8));
    }
    else if (MT3>=2.9){
          alert(nom3+" comprate el helado con confetis o el pote de 1/4 KG");
          alert("y te sobran" + (MT3 - 2.9));
    }else{
      alert(" Lo siento pobre de mierda no te alcanza para ningun helado");
    }



 }) /*final de la funcion principal*/
})  /*final del load function*/
