//Objetos req (request o petición) y res (response o respuesta) del modulo http

//Para acceder al modulo http debemos requerirlo o importarlo a nuestro archivo con require y lo almacenamos en una constante del mismo nombre, http
const http = require("http");

//Creamos una constante  llamada servidor para guardar nuestro servidor y utilizamos el método .createServer() de http para crear ese servidor y le pasamos como argumento una función flecha
//La funcion .createServer() contiene un funcion flecha que recibe dos parámetros req(request o solicitud http del cliente al servidor) y res(response o respuesta http del servidor al cliente que realizo la solicitud)
const servidor = http.createServer((req, res) => {
  //req
  /* console.log("===> req (solicitud)"); */
  //El atributo url de req nos da el camino o path especifico de la solicitud
  /* console.log(req.url); */
  //El atributo method de req le va a decir al servidor cual es el propósito de esa solicitud get, post, put, delete o cualquier otro verbo http
  /* console.log(req.method); */
  //El atributo headers de req permite ver las cabeceras de la solicitud
  /* console.log(req.headers); */

  //res
  console.log("===> res (respuesta)"); 
  //El atributo statusCode de res devuelve los códigos de respuesta http
  console.log(res.statusCode);//Por defecto el código de respuesta es 200 OK
  //El atributo setHeader permite configurar un elemento de la cabecera (header), información adicional que vamos a enviarle al cliente, con content-type especificamos el tipo de contenido que estamos enviando
  res.setHeader("content-type", "application/json");
  //El atributo getHeaders() permite ver los elementos que contiene la cabecera
  console.log(res.getHeaders());

  res.end("Hola mundo");
});

const puerto = 3000;

servidor.listen(puerto, () =>{
  console.log(`El servidor esta escuchando en el puerto ${puerto}...`);
});


