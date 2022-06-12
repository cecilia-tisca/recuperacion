/*SHIFT: Elimina el primer elemento del array
y lo retorna. Este método significa la longitud del array*/

/*CASOS DE USO: Tenemos un Array de personas
donde cuando pase una se va recorriendo */

var person = ['Roberto','Jessica','Luis','Fernanda'];

console.log('La fila primero: ' + person);

var eliminado = person.shift();

console.log('La fila despues: ' + person);

console.log('Persona que paso: ' + eliminado);