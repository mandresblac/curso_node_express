//Supongamos que tenemos una tienda de pizzas

//La constante estatusPedido almacena una funcion flecha que retorna el status del pedido, que puede ser verdadero si se completo exitosamente o falso si no se completo adecuadamente, es decir si fallo
const estatusPedido = () => {
  //Determinamos el estatus de éxito o fracaso a partir de un número aleatorio y lo retornamos
  return Math.random() < 0.8;
};

//Representamos el pedido de pizza como una promesa
//resolve y reject son las funciones  que tienen un valor automáticamente y son funciones para poder especificar se la promesa fue exitosa (resolve) o fue rechazada (reject)
const miPedidoDePizza = new Promise((resolve, reject) => {
  //Simulamos que es asíncrono con la función setTimeout()
  setTimeout( () => {
    //Condición
    if (estatusPedido()) {
      resolve("¡Pedido exitoso! Su pizza esta en camino");//Promesa cumplida 
    }else {
      reject("Ocurrió un error. Por favor intente nuevamente");//Promesa rechazada
    }
  }, 3000);//Retraso de 3000 milisegundos, es decir, 3 segundos
});


//Sintaxis alternativa que es mas usada
miPedidoDePizza
  //Manejamos el resultado si la promesa tuvo exito (fue cumplida) con .then()
  .then((mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion);
  })
  //Manejamos el resultado si la promesa fue rechazada con .catch()
  .catch((mensajeDeError) => {
    console.log(mensajeDeError);
  });





