/*CONCAT: Se usa para unir dos o más arrays. 
Este método no cambia los array existentes, sino 
que devuelve un nuevo array */

/*CASO DE USO: Se tienen dos arrays de filas 
de alumnos Y se necesitan integrar a una sola fila */

const fila1 = ['Toto','Karla','Diana'];
const fila2 = ['Karen','Ingrid','Fabiola'];
const fila = fila1.concat(fila2);

console.log(fila);