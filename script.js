/*FIND: Devuelve el valor del primer elemento
de arreglo que cumple la función de 
prueba proporcionada */

/*CASO DE USO: Tenemos un array de fechas del día
del mes donde se regirtran las reunionees a realizar,
se quiere consultar que día es la siguiente reunion
despues del día 15  */

const fecha = [6,8,15,23,26,30];

function getProxFecha(){
    const SigFecha = fecha.find((fechas) => fechas > 15);
    return SigFecha
}
console.log(getProxFecha());