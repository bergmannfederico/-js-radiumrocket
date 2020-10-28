/* Convertir la validación del ejercicio 6b) en una función separada y 
llamarla dentro de la función suma probando que todo siga funcionando igual. */

function suma (a ,b){
    if(validateParmsNaN(a, b)){
        
        return NaN;
    }
    return a + b;  
}

function validateParmsNaN (a, b){
    if(isNaN(a)|| isNaN(b)){
        alert('One parameter is NaN');
        return true;
    }
    return false;
}

var funcSuma = suma(13, 7);
//console.log(funcSuma);

