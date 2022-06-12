/*FindIndex: Devuelve el Índice del primer elemento 
de un array que cumpla con la función de prueba proporcionada. */

/*CASO DE USO: Tenemos un Array de boletos que 
tiene un numero participador y cada indice es
un asiento, queremo saber que asiento es el del 
boleto numero 13 tomando en cuenta que el indice
 comienza desde el 0*/

const boletos = [30,56,21,28,13,70,146];

const winBoleto = boletos.findIndex((boleto) => boleto == 13);

console.log(winBoleto);