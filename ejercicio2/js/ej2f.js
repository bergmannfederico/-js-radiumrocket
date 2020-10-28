/* Crear una variable de tipo string con al menos 2 palabras largas 
(10 caracteres y algún espacio entre medio). Utilizar los métodos de los 
ejercicios anteriores para generar un nuevo string que tenga 
la primera letra de ambas palabras en mayúscula y las demás 
letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +). */


var str = 'fedeRICO bergMANN';
var spacePos = str.indexOf(' ');
var strFormat = str.substring(0, 1).toUpperCase() + str.substring(1, spacePos + 1).toLowerCase() +
                str.substring(spacePos + 1, spacePos + 2).toUpperCase() + 
                str.substring(spacePos + 2, str.length).toLowerCase();

//console.log(strFormat)