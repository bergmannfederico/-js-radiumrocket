/* Al array anterior convertir la primera letra de cada palabra en mayúscula
 y mostrar una alerta por cada palabra modificada.*/

var months = ['january', 'february', 'march', 'april', 'may'];
for (let index = 0; index < months.length; index++) {
    months[index] = months[index].substring(0, 1).toUpperCase() + 
                    months[index].substring(1, months[index].length);
    alert(months[index]);
}
