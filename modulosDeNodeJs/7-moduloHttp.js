//El modulo http nos permite escribir un servidor que escuche las solicitudes
//Para acceder al modulo http debemos requerirlo o importarlo a nuestro archivo con require y lo almacenamos en una constante del mismo nombre, http
const http = require("http");

//Con tres líneas nada mas vamos a tener un servidor funcional muy básico

//Creamos una constante para guardar nuestro servidor y utilizamos el método .createServer() de http para crear ese servidor
//La funcion .createServer() contiene un funcion flecha que recibe dos parámetros req(request o solicitud http del cliente al servidor) y res(response o respuesta http del servidor al cliente que realizo la solicitud)
const servidor = http.createServer((req, res) => {
  //end() es un método de res (response) que significa finalizar o terminar y nos va a permitir enviar la respuesta al cliente, entre los paréntesis pasamos como argumento el resultado que queremos enviarle al cliente, en este caso el string "Hola mundo"
  res.end("Hola mundo");
}); 

//Podemos crear una constante llamada "puerto" que almacena el número del puerto donde va a estar escuchando nuestro servidor, para luego pasarla como primer parámetro del método listen() 
const puerto = 3000;

//El método listen() recibe dos parámetros, el primero que permite que el Servidor escuche las peticiones a través de un puerto especifico, en este caso el puerto 3000, y el segundo parámetro es la acción que va a ocurrir cuando el servidor comience a ejecutarse por medio de una funcion flecha
servidor.listen(puerto, () => {
  console.log(`El servidor esta escuchando en http://localhost:${puerto}...`);
});