function ordenarProducto(producto){
  return new Promise((resolve, reject) => {
    console.log(`Ordenando: ${producto} de FreeCodeCamp`);
    setTimeout(() => {
      //Condición
      if (producto === "taza") {
        resolve("Ordenando una taza con el logo de FreeCodeCamp...");
      }else {
        reject("Este producto no esta disponible actualmente");
      }
    }, 2000);
  });
}

function procesarPedido(respuesta){
  return new Promise(resolve => {
    console.log("Procesando respuesta...");
    console.log(`La respuesta fue: "${respuesta}"`);
    setTimeout(() => {
      resolve("Gracias por su compra. Disfruta tu producto de freeCodeCamp");
    }, 4000);
  });
};


/* ordenarProducto("lapiz")
  .then(respuesta => {
    console.log("Respuesta recibida");
    console.log(respuesta);
    return procesarPedido(respuesta);
  })
  .then(respuestaProcesada => {
    console.log(respuestaProcesada);
  })
  .catch(error => {
    console.log(error);
  }); */



//Código equivalente al que empieza en la línea 26
//async await
//async es una abreviación de la palabra en ingles asynchronous que significa asíncrono en español
//Todas las funciones con async (asíncronas) retornan una promesa
async function realizarPedido(producto) {
  try {
    const respuesta = await ordenarProducto(producto);
    console.log("Respuesta recibida");
    console.log(respuesta);
    const respuestaProcesada = await procesarPedido(respuesta);
    console.log(respuestaProcesada);
  }
  catch (error) {
    console.log(error);
  }
}

//Llamamos la función realizarPedido()
realizarPedido("taza");


