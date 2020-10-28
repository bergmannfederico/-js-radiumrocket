/* Crear una variable de tipo string con al menos 10 caracteres y 
generar un nuevo string con los últimos 3 caracteres guardando el 
resultado en una nueva variable (utilizar substring). */

var str = 'this string will be cutted';
var subStrOfStr = str.substring(str.length - 3, str.length);

//console.log(subStrOfStr)