window.addEventListener("load", function(){ /*Load es cuando refresca la pagina se ejecutara la la funcion*/
      document.getElementById("ejercicio1").addEventListener("click",

function() {

    MT1=0
    MT2=0
    MT3=0
    //A) 3 chicos de 23 años perfectamente normales entran a una heladeria a comprar un helado pero hay un problema: Los precios no estan al lado de cada estante con su respectivo helado.

    //         Ellos quieren comprar el helado mas caro que puedan con la plata que tienen, asi que... veamos como podemos ayudarlos.

    //         Roberto tiene $1.5 USD
    //         Pedro tiene $1.7USD
    //         Cofla tiene $3 USD

    //         Los precios de los helados son los siguientes:
    //         Palito de helado de agua: $0.6 USD
    //         Palito de helado de crema: $1 USD
    //         Bombón helado marca heladix: $1.6 USD
    //         Bombón helado marca heladovich: $1.7 USD
    //         Bombón helado marca helardo: $1.8 USD
    //         Potecito de helado con confetis: $2.9 USD
    //         Pote de 1/4 KG -> $2.9 USD



    //               CREAR SOLUCIONES:
    //
    //                  -Pedirles que ingresen el monto que tienen y mostrarles el helado mas.
    //                  -Si hay 2 o mas con el mismo precio, mostrar ambos.
    //                  -Cofla quiere saber cuanto es el vuelto.

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
