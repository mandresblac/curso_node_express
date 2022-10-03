const express = require('express'); //Importamos express con require("express")

const {programacion} = require('../datos/cursos.js').infoCursos;

const routerProgramacion = express.Router(); //Para crear un router


//Middleware para procesar el cuerpo de las solicitudes en formato .json y poder trabajar con ese cuerpo de la solicitud en nuestro código como la propiedad body
//La funciones Middleware se ejecutan después de recibir una solicitud, pero antes de enviar una respuesta
//Los Middleware tienen acceso al objeto de la solicitud, al objeto de la respuesta y a next(), que es una función que se llama para ejecutar el proximo Middleware
routerProgramacion.use(express.json());


//Creamos otra ruta para obtener los cursos de programación solamente con el mismo método get de http
routerProgramacion.get('/', (req, res) => {
  //Enviamos una respuesta con res.send() solo de la información de los cursos que correspondan a programación
  res.json(programacion);
});


//Los dos puntos antes de lenguaje (:lenguaje) nos indican que va a ser un parámetro URL y esos parámetros los vamos a poder extraer del objeto de solicitud req (request)
routerProgramacion.get('/:lenguaje', (req, res) => {
  //Si queremos Extraer el lenguaje de programación y asignarlo a una constante (en este caso llamada lenguaje) tenemos que tomar el objeto de la solicitud req y acceder a su propiedad params (parámetros) y luego ponemos el nombre que le asignamos a ese parámetro en la ruta, que en este caso es :lenguaje
  const lenguaje = req.params.lenguaje;
  //Filtramos con .filter()
  const resultados = programacion.filter(curso => curso.lenguaje === lenguaje);

  if (resultados.length === 0) {
    //Con status() asignamos el estado de la respuesta http, que en este caso es 404
    return res.status(404).send(`No se encontraron cursos de ${lenguaje}.`);
  };

  //PARÁMETROS QUERY
  //Vamos a implementar una funcionalidad para poder ordenar los resultados de acuerdo al número de vistas
  if (req.query.ordenar === 'vistas') {
    return res.send(resultados.sort((a, b) => b.vistas - a.vistas));
  };

  //El estado por defecto es 200 OK
  res.json(resultados);
});


//URL con dos parámetros
routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
  const lenguaje = req.params.lenguaje;
  const nivel = req.params.nivel;

  //Filtramos con filter()
  const resultados = programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);

  if (resultados.length === 0) {
    //Con status() asignamos el estado de la respuesta http, que en este caso es 404
    return res.status(204).send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`);
  };

  //El estado por defecto es 200 OK
  res.json(resultados);
});


//Método post de http
routerProgramacion.post("/", (req, res) => {
  //Extraemos el cuerpo de la solicitud para poder incluir un curso nuevo en el arreglo de cursos de programación
  let cursoNuevo = req.body; //Extraemos el cuerpo de la solicitud con req.body
  programacion.push(cursoNuevo);
  res.json(programacion); //Enviamos  el nuevo array de cursos de programación al cliente
});

//Método PUT de http
routerProgramacion.put("/:id", (req, res) => {
  const cursoActualizado = req.body;
  const id = req.params.id; //Extraemos el "id" del curso

  //Para encontrar el indice del curso en el array 
  //El método findIndex() nos permite encontrar el indice de un elemento en un array  en base a un criterio
  const indice = programacion.findIndex(curso => curso.id == id);

  if (indice >= 0) {
    programacion[indice] = cursoActualizado;
  }

  res.send(programacion);
});

//Método PATCH de http
routerProgramacion.patch("/:id", (req, res) => {
  const infoActualizada = req.body;
  const id = req.params.id;

  const indice = programacion.findIndex(curso => curso.id == id);

  if (indice >= 0) {
    const cursoAModificar = programacion[indice];
    //El método assign() permite modificar solo algunas propiedades de un objeto
    Object.assign(cursoAModificar, infoActualizada);
  }

  res.json(programacion);
});


//Método DELETE de http
routerProgramacion.delete("/:id", (req, res) => {
  const id = req.params.id;
  const indice = programacion.findIndex(curso => curso.id == id);

  if (indice >= 0) {
    //Par elimina run elemento especifico de un array podemos utilizar el método .splice()
    programacion.splice(indice, 1);
  }

  res.json(programacion);
});

module.exports = routerProgramacion;
  
