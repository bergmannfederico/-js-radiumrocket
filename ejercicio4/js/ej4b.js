/* Crear una variable “Age” que contenga un número entero entre 0 y 100
 y muestre los siguientes mensajes de alerta:
    “Bebe” si la edad es menor a 2 años
    “Nino” si la edad es entre 2 y 12 años
    “Adolecente” si la edad es entre 13 y 19 años
    “Joven” si la edad está entre 20 y 30 años
    “Adulto” entre 31 y 60 años
    “Adulto mayor” entre 61 y 75 años
    “Anciano” si es mayor a 75 años
 */

var age = 24;
if (age < 2){
    alert('Bebe');
} else if (age <= 12){
    alert('Nino');
}else if (age <= 19){
    alert('Adolecente');
}else if (age <= 30){
    alert('Joven');
}else if (age < 60){
    alert('Adulto');
}else if (age < 75){
    alert('Adulto mayor');
}else{
    alert('Anciano');
}
