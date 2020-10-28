/* Crear una variable llamada “sentence” que tenga un string vacío, 
luego al array del punto a) recorrerlo con un bucle for para ir guardando cada palabra 
dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa. */

var months = ['january', 'february', 'march', 'april', 'may'];
var sentence = '';
for (let index = 0; index < months.length; index++) {
    sentence += months[index];
}
alert(sentence);