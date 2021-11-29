// VALIDACIÓN DE TARJETA DE CRÉDITO  
//DATOS: LA MAYORIA DE LAS TARJETAS TIENEN 16 DÍGITOS


  function ValidarTarjeta() {
      // fijarnos que la alerta no este antes de colocar el número de la tarjeta
   let alerta = document.getElementById("alerta");
   alerta.innerText=""; 
   alerta.className="";
   
   let numero = document.getElementById("numero-tarjeta");
   let digitosTC = numero.value;
   if (digitosTC.length==0){
      alerta.innerText == "Tarjeta Inválida";
      alerta.className == "alerta-error";
      return false;
   }  

   // PASO 1: Almacenamiento en un arreglo de los digitos en orden inverso

   let arrTC = Array.from(digitosTC);  // Almacena cada caracter de un string
    //como un elemento en un arreglo. 
    let arrInverso = arrTC.reverse(); // invierte el orden de los elemento de un arreglos 
    

   //PASO 2: Multiplicar los elementos en posiciones pares (contasdas desde 1 y no 0) .
     //si el número resultante es de 2 dígitos, se deben sumar ambos dígitos. por 2.

     let digitopar = -1;
     for(let i = 1; i <= arrInverso.length; i+=2) {

      digitopar= parseInt(arrInverso[i]);
      digitopar*=2;
      if(digitopar >= 10) {
         digitopar = digitopar.toString(); // convierte a string los digitos para poder 
         //seleccionar cada digito y sumarlos.

         digitopar= parseInt(digitopar[1]) + parseInt(digitopar[0]);
      } 
      arrInverso[i] = digitopar.toString();
     }

     //PASO 3 sumar todos los digitos de la tarjeta, considerando los valores obtenidos 
     // en paso 2 .

     let suma= 0;
     for(let j =0; j < arrInverso.length; j++ ){
        if(typeof arrInverso[j] == "string"){
           suma += parseInt(arrInverso[j]);
        } else{
           suma += arrInverso[j];

        }
     }

     //PASO 4:  validar que el numero obtenidoes divisible por 10
     if (suma % 10 == 0){
         alerta.innerText = "Tarjeta Inválida"
         alerta.className = "alerta válida";
         return true;
     } else {
      alerta.innerText = "Tarjeta Inválida"
      alerta.className = "alerta-error";
      return false;  
   }
}

//                     ENMASCARADO DE LOS DÍGITOS
// se debe ocultar todos los digitos, menos lo ultimos 4

function enmascarar(){
    
   let numero = document.getElementById("numero-tarjeta");
   let digitosTC = numero.value;
   let cantidadDigitos = digitosTC.length;

   if(cantidadDigitos> 4) {
      let digitosAEnmascarar = cantidadDigitos -4;
      for(let i =0; i < digitosAEnmascarar; i++) {
         digitosTC = digitosTC.replace(digitosTC[i], "*");
      }
   }
   document.getElementById("svgnumber").innerHTML=digitosTC;
}

document.getElementById("btn-validar").addEventListener("click",
function(){
   let valida = ValidarTarjeta();
   if(valida){
      enmascarar();
      document.getElementById("numero-tarjeta").value = "";
      this.hidden = tru; 
   }
})


