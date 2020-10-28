/* Crear una función validate integer que reciba un número como parámetro 
y devuelva verdadero si es un número entero. */


function isIntegerValue (a){
    if(Number.isInteger(a)){
        return true;
    }
    return false;  
}

//console.log(isIntegerValue('asd'));