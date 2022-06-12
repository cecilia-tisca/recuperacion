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