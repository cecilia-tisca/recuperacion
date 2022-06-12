/*FOR OF: Ejecuta un bloqueo de código para cada 
elemento de un objeto iterable, como lo son:
String, Array, objetos similares al array e iterables
definidos por el usuario.*/

/*CASO DE USO: Tenemos un Array de puntos y
a cada uno se le regalaran 5 puntos más */

let iterable = [60,12,48];

for (let value of iterable){
    value += 5;
    console.log(value);
}