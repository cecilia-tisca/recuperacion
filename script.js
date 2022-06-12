/* MAP: Es una función que te permiete transformar 
los elementos de una lista y devuelve una nueva
lista con los elementos transformados.*/

/*CASO DE USO: Tenemos un array de costos de 
productos que se vendieron y se pagaron con tarjeta
vamos a obtener otro array que nos del el precio total
ya con el monto extra que cobra la terminal */ 

const cobros = [510,200,36,95,14];

const extra = 12;

function getCobroMasExtra(){
    const cobroMasExtra = cobros.map((cobro) => cobro + extra);
    return cobroMasExtra
}
console.log(getCobroMasExtra());

/*FILTER: Crea un nuevo arreglo con todos
los elementos que cumplen la condición
implemetada por la función dada/*

/*CASO DE USO: Se tiene un array con la
cantidad de productos de un stock y se 
necesita saber cuales son los que se necesita
surtir, son todos aquellos que tienen 
menos de 25 productos */

const productos = [
    {producto: "reloj", cantidad: 46},
    {producto: "anillos", cantidad: 20},
    {producto: "collares", cantidad: 80},
    {producto: "aretes", cantidad: 12},
    {producto: "lentes", cantidad: 3},
    {producto: "broches", cantidad: 58}

]; 

function getProductos(){
    const filStock = productos.filter((producto) => producto.cantidad < 25);
    return filStock
}
console.log(getProductos());


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

=======
/*REDUCE: Ejecuta una función de devolución de 
llamada "reductora" proprcionada por el usuario
en cada elemento de la matriz, en orden, pasando
el valor de retorno del cálculo en todos los elementos 
de la matriz es un valor unico */

/*CASO DE USO: Tenemos un Array de productos que
estan en bodega y los que estan en mostrador, por lo que
se quiere saber cuantos productos hay en total de cada uno*/

const product = [
    { reloj: 46},
    {anillos: 20},
    {collares: 80},
    {aretes: 12},
    {reloj: 3},
    {anillos: 58}

];

const grouped = product.reduce((acc, product) =>{
    for(let prop in product){
        if(acc.hasOwnProperty(prop)) acc[prop] += product[prop];
        else acc[prop] = product[prop];
    }
    return acc;
}, {});

console.log(grouped);

