/*
function suma(a,b){
    resultado = a+b
    return resultado;
}
let respuesta = suma(7,7);
console.log(respuesta);
*/
/*
function resta(a,b){
    r=a-b
    return r;
}
let dato = resta(8,5);
alert(dato);
*/
/*
function producto(a,b){
    r=a*b
    return r;
}
let dato = producto(8,5);
alert(dato);
*/

/*
function division(a,b){
    r=a/b
    return r;
}
let dato = division(100,5);
alert(dato);
*/



/*
function saludar(){
    console.log("Hola");
}
saludar()
saludar()
*/

/*
const saludar = () => console.log("Hola");
saludar()
saludar()
*/
/*
const saludar = () => console.log("Hola");
const saludarUsuario = (user) => console.log(` Hola ${user}`);
saludarUsuario(`Marta`)
saludarUsuario(`Juan`)
saludarUsuario(`Guillermo`)
*/
/*
const suma = (num1, num2) => {
    return num1 + num2
}
console.log(suma(2,3));


const suma = (num1, num2) => num1+num2
console.log(suma(2,3));
*/
/*

const suma = (num1, num2) => {
    if(num1 == 2){
        return num1+num2
    }

console.log("Esto no se va a ejecutar si no entra en el IF");
return num1
}
console.log(suma(8,9));
*/
/*
function add(a){
    resultado = a + 100;
    return resultado;
}
alert(add(5));
*/


// ECMAScript 6
/*
let agregar = a => a +100;
alert(agregar(5));


// otro ejemplo

const add = (x,y) => { return x+y };
console.log(add(3,7));
*/



const medallas = function(puntaje) {
    if (puntaje < 3){
        return 'bronce';
    }
    if (puntaje < 7) {
        return 'plata';
    }
    return 'oro';
};
alert(medallas(6));
 
