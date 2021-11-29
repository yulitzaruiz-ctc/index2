/*
function areaCircunferencia(r){
     const pi =3.14;
    area = pi*r*r;
    return area 
}
let radio = prompt('Ingresa el valor del radio: ');
resultado = areaCircunferencia(radio);
console.log(resultado);
*/


/*
let nota = prompt("introduce tu nota: ");
if (nota <= 10){
    alert(" que lastima, REGRESA EL PROXIMO CICLO :)");
}else if (nota > 10){
    alert("Aprobaste¡¡");
}
*/
/*

function estadoEstudiante(valor){
if(valor <= 0){    
    alert("Debes de ingresar una nota superior a 0")
    
}else {
    if(valor <= 10){

        alert("que lastima, REGRESA EL PROXIMO CICLO");
    } else if (valor > 10){

        alert("Aprobaste¡¡");
    }
}
}
let nota = prompt("Introduce tu nota");
estadoEstudiante(nota);
*/



function estadoEstudiante(valor){
    if(valor <= 0){    
        alert("Debes de ingresar una nota superior a 0")
        
    }else {
        if(valor <= 10){
    
            alert("que lastima, REGRESA EL PROXIMO CICLO");
        } else if (valor > 10){
    
            alert("Aprobaste¡¡");
        }
      }
    }
    let nota;
    do{
        nota=prompt("introduce tu nota: ");
        estadoEstudiante(nota);
    }while(nota < 0 || nota== 0); 


