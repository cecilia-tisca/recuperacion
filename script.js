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