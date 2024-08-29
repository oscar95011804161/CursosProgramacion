
export function numero1a10() {
 alert("Usa el bucle for para imprimir un numero del 1 al 10");  
 
 for (let i = 1; i <= 10; i++) {
   alert (`el resultado es : ${i}`);
 }

 return "fin";
}

export function Tablas() {
    alert("Ejercicio: para hacer las tablas de multiplicar.\n");

    function TablasDeMultiplicar() {

      let resultado ='';
      for (let i = 1; i <= 10; i++) {
        console.log(`\n Tablas de multiplicar del ${i}: \n`);

        for (let j = 1; j <= 10; j++) {
           console.log(resultado = `${i} x ${j} = ${i * j}\n`); //3x1 = 3 el 3 es i * j
        }
        console.log( resultado = "-".repeat(20) +"\n"); //Sirve para separar cada tabla
      } 
      return resultado; 
    }
    alert(TablasDeMultiplicar());
    return ""; 
}

