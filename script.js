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