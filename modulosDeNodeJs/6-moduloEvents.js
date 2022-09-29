//El modulo "events" nos permite definir, emitir y escuchar eventos para saber cuando ocurren 

//Creamos una constante con el nombre EventEmitter (emisor de eventos) donde requerimos o importamos el modulo "events"
const EventEmitter = require("events");//EventEmitter es una clase por eso inicia con una letra mayúscula

const emisorProductos = new EventEmitter();

//Definimos la acción que se va a realizar cuando ocurra el evento especifico que queremos manejar o detectar

//Event Handlers son funciones que están esperando a que ocurra el evento, están asociadas a ese  evento y cuando ocurre el evento se ejecutan
//El método on() define lo que debe ocurrir cuando ocurra el evento "compra"
emisorProductos.on("compra", (total, numProductos) => {
  console.log(`Total de la compra: $${total}`);
  console.log(`Número de productos: ${numProductos}`);
})

emisorProductos.emit("compra", 500, 5);


