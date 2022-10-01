//Veamos como se pueden manejar las distintas rutas en un servidor con Node.js

//Comenzamos importando el modulo http y lo almacenamos en una constante del mismo nombre
const http = require("http");

//Importamos el contenido del archivo cursos.js
const cursos = require("./cursos");

//Creamos una constante  llamada servidor para guardar nuestro servidor y utilizamos el método .createServer() de http para crear ese servidor y le pasamos como argumento una función flecha
//La funcion .createServer() contiene un funcion flecha que recibe dos parámetros req(request o solicitud http del cliente al servidor) y res(response o respuesta http del servidor al cliente que realizo la solicitud)
const servidor = http.createServer((req, res) => {
  //Extraemos el método de la solicitud
  const {method} = req;

  switch (method) {
    case "GET":
      return manejarSolicitudGET(req, res);
    case "POST":
      return manejarSolicitudPOST(req, res);
    default:
      res.statusCode = 501;
      res.end(`El método no puede ser manejado por el servidor: ${method}`);
      break;
  }
});

//Definimos la función manejarSolicitudGET
function manejarSolicitudGET(req, res) {
  //Extraemos la ruta o path
  const camino = req.url;

  if (camino === "/") {
    //Para configurar los valores de la cabecera de la respuesta utilizamos writeHead
    res.writeHead(200, {"Content-type": "application/json"});
    //Enviamos una respuesta
    return res.end("Bienvenidos a mi primer servidor y API creados con Node.js");
  } else if (camino === "/cursos") {
    //Enviamos una respuesta, en este caso sera la información de los cursos almacenada en el objeto infoCursos del archivo cursos.js pero en formato JSON
    return res.end(JSON.stringify(cursos.infoCursos));
  } else if (camino === "/cursos/programacion") {
    return res.end(JSON.stringify(cursos.infoCursos.programación));
  }

  //Respuesta si el usuario por error ingresa un camino o path que no esta siendo manejado por el servidor
  res.statusCode = 404; //404 Not Found o recurso no encontrado
  //Enviamos una respuesta
  res.end("El recurso solicitado no existe");
};


//Definimos la funcion manejarSolicitudPOST
function manejarSolicitudPOST(req, res) {
  //Extraemos la ruta o path
  const path = req.url;

  if (path === "/cursos/programacion") {
    return res.end(`El servidor recibió una solicitud POST para /cursos/programacion`);
  }
};


//Creamos una constante llamada "puerto" que almacena el número del puerto donde va a estar escuchando nuestro servidor, para luego pasarla como primer parámetro del método listen() 
const PUERTO = 3000;

//El método listen() recibe dos parámetros, el primero que permite que el Servidor escuche las peticiones a través de un puerto especifico, en este caso el puerto 3000, y el segundo parámetro es la acción que va a ocurrir cuando el servidor comience a ejecutarse por medio de una funcion flecha
servidor.listen(PUERTO, () => {
  console.log(`El servidor escuchando en el puerto ${PUERTO}...`);
});

