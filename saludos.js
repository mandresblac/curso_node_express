//Este es el modulo o archivo que contiene la definición de las funciónes que luego exportaremos al archivo apps.js

function saludar(nombre) {
  return `Hola ${nombre}`;
};

function saludarHolaMundo() {
  return "¡Hola mundo!";
}


//Para exportar elementos tenemos dos opciones: Exportar de uno en uno cada  elemento o,exportar todos los elementos de una sola vez, ambas formas son validas

//OPCION 1 - De uno en uno
//Para exportar un solo elemento, en este caso la funcion saludar
//El primer saludar es el nombre con que se va a exportar, se puede cambiar por cualquier nombre, el segundo saludar que esta a la derecha del igual es el nombre de la funcion y no se debe cambiar
module.exports.saludar = saludar;
module.exports.saludarHolaMundo = saludarHolaMundo;


//OPCION 2 - todos los elementos de una sola vez
//Para exportar varios elementos asignamos un objeto con las propiedades y valores que  deseemos
module.exports = {
  saludar: saludar,
  saludarHolaMundo: saludarHolaMundo
};
