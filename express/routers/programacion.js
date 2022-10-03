const express = require('express'); //Importamos express con require("express")

const {programacion} = require('../datos/cursos.js').infoCursos;

const routerProgramacion = express.Router(); //Para crear un router


//Creamos otra ruta para obtener los cursos de programación solamente con el mismo método get de http
routerProgramacion.get('/', (req, res) => {
  //Enviamos una respuesta con res.send() solo de la información de los cursos que correspondan a programación
  res.send(JSON.stringify(programacion));
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
    return res.send(JSON.stringify(resultados.sort((a, b) => b.vistas - a.vistas)));
  };

  //El estado por defecto es 200 OK
  res.send(JSON.stringify(resultados));
});



//URL con dos parámetros
routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
  const lenguaje = req.params.lenguaje;
  const nivel = req.params.nivel;

  //Filtramos con filter()
  const resultados = programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);

  if (resultados.length === 0) {
    //Con status() asignamos el estado de la respuesta http, que en este caso es 404
    return res.status(404).send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`);
  };

  //El estado por defecto es 200 OK
  res.send(JSON.stringify(resultados));
});


module.exports = routerProgramacion;
