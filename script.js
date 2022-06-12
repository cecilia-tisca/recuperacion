/*PROMESAS: Es un objeto que representa
la terminación o el fracaso de una operacion 
asíncrona. */

/*CASO DE USO: Tenemos que poner lasrespuestas 
depende de nuestra  condicion en este caso que sea mayor que 18
y si no se cumple la condición regresar un error  */

const promisedFunction = (number) => {
    return new Promise((resolve, reject) => {
        if(number>18){
          setTimeout(() =>{
            resolve(`Succes number: ${number}`);
        }, 1000);   
        } else {
            reject(`Error el numero ${number} es menor a 10`);
        }  
    });
};

promisedFunction(20)
.then((result) => {
        console.log(result);
    })
    .catch((result) => {
        console.error(error);
    })
    .finally(() => {
        console.log("finally");
    });

 console.log(promisedFunction(50));