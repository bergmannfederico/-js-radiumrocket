/* A la función suma del ejercicio 6b) agregarle una llamada que valide que 
los números sean enteros. En caso que haya decimales mostrar un alerta con el 
error y retorna el número convertido a entero (redondeado). */

function suma (a, b){
    if(!Number.isInteger(a)){
        alert('The first parameter is not an Integer');
        return Math.round(a);
    }else if (!Number.isInteger(b)){
        alert('The second parameter is not an Integer');
        return Math.round(b);
    }
    return a + b;  
}

var funcSuma = suma('asd', 12);
//console.log(funcSuma);

