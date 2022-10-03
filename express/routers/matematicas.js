const express = require("express"); //Importamos express con require("express")

const {matematicas} = require("../datos/cursos.js").infoCursos;

const routerMatematicas = express.Router(); //Para crear un router

//Middleware
routerMatematicas.use(express.json());

//Creamos otra ruta para obtener los cursos de matemáticas solamente con el mismo método get de http
routerMatematicas.get("/", (req, res) => {
  //Enviamos una respuesta con res.send()
  res.send(JSON.stringify(matematicas));
});


//Parámetro URL para los cursos de matemáticas
routerMatematicas.get("/:tema", (req, res) => {
  const tema = req.params.tema;
  //Filtramos con .filter()
  const resultados = matematicas.filter(curso => curso.tema ===  tema);

  if (resultados.length === 0) {
    //Con status() asignamos el estado de la respuesta http, que en este caso es 404
    return res.status(404).send(`No se encontraron cursos de ${tema}.`);
  }

  //El estado por defecto es 200 OK
  res.send(JSON.stringify(resultados));
});

//Método post de http
routerMatematicas.post("/", (req, res) => {
  let cursoNuevo = req.body; //Extraemos el cuerpo de la solicitud con req.body
  matematicas.push(cursoNuevo);
  res.json(matematicas); //Enviamos  el nuevo array de cursos de programación al cliente
});


module.exports = routerMatematicas;
