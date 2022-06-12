/*REPLACE: Cambia el contenido de una matriz
eliminado elementos existentes y/o agregando 
nuevos elementos*/

/*CASO DE USO: Tenemos un Array de apellidos
Y se tiene que modificar uno que esta incorrecto */

var nombre = "Diana Reyes";
var arr = "Reyes";
var nombre2 = "Tiscareño";

var nuevoName = nombre.replace(arr, nombre2);

console.log(nuevoName);