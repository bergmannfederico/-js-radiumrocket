/* Crear una variable de tipo string con al menos 10 caracteres y 
generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. 
Guardar el resultado en una nueva variable 
(utilizar substring, toUpperCase, toLowerCase y el operador +). */


var str = 'thIs stRing wIll be ForMatted';
var strFormat = str.substring(0, 1).toUpperCase() + str.substring(1, str.length).toLowerCase();

//console.log(strFormat)