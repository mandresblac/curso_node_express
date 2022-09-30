const promesaCumplida = false;

//Creamos una promesa con new Promise() y la asignamos a la constante miPromesa
//La promesa tiene que saber como va a determinar si el proceso fue exitoso o no, y lo hace pasando una función como argumento
//resolve y reject son dos funciones, resolve nos indica si la promesa fue cumplida exitosamente y reject nos indica si la promesa fue rechazada y dependiendo cual sea la función que se llamo vamos a tener distintas formas de manejar ese resultado
const miPromesa = new Promise((resolve, reject) => {
  //Evento asíncrono
  setTimeout(() => {
    if(promesaCumplida) {
      resolve("¡Promesa cumplida!");
    } else {
      reject("Promesa rechazada...");
    }
  }, 3000);
});

//Manejamos el resultado si la promesa fue cumplida, es decir, si llamamos a resolve en lugar de reject, esto se hace con el método .them() que devuelve el valor "resolve" de la promesa
//.then() toma como argumento una funcion flecha
/* miPromesa.then((valor) => {
  console.log(valor);//Devuelve el valor "resolve" de la promesa, que en este caso es el string "¡Promesa cumplida!"
}); */

//Manejamos el resultado si la promesa fue cumplida
const manejarPromesaCumplida = (valor) => {
  console.log(valor);
};

//Manejamos el resultado si la promesa fue rechazada
const manejarPromesaRechazada = (razonRechazo) => {
  console.log(razonRechazo);
};

miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada);


