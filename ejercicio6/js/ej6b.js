/* A la función suma anterior, agregarle una validación para controlar si alguno 
de los parámetros no es un número, mostrar una alerta aclarando que uno de los 
parámetros tiene error y retornar el valor NaN como resultado. */

function suma (a ,b){
    if(isNaN(a) || isNaN(b)){
        alert('One of the parameters is NaN');
        return NaN;
    }
    return a + b;  
}

var funcSuma = suma(13, 'asd');
//console.log(funcSuma);

