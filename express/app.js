//La primer línea  que vamos a escribir cuando se desarrolla una aplicación con express (en todos los archivos que lo requieran) es:
const express = require('express'); //Importamos express con require("express")

//Creamos una aplicación de express, en este caso con el nombre app
const app = express();

//Importamos el contenido del archivo cursos utilizando la sintaxis de desestructuración
const {infoCursos} = require('./datos/cursos.js');

//Routers (de Express) a programación
const routerProgramacion = require('./routers/programacion.js');
app.use('/api/cursos/programacion', routerProgramacion);

//Routers (de Express) a matemáticas
const routerMatematicas = require('./routers/matematicas.js');
app.use('/api/cursos/matematicas', routerMatematicas);


//Implementación de rutas o Routing o enrutamiento
//Método get http
//Para crear una ruta en Express primero escribimos el método http, en este caso get (app.get), como segundo argumento pasamos el camino que en este caso es la raíz "/" y como tercer argumento pasamos una función flecha que va a manejar esa ruta y que toma los parámetros req (request) y res (response)
app.get('/', (req, res) => {
  //Enviamos una respuesta con res.send()
  res.send('Mi primer servidor con Express. Cursos 💻.');  
});


//Creamos otra ruta con el mismo método get de http
app.get('/api/cursos', (req, res) => {
  //Enviamos una respuesta con res.send()
  res.send(JSON.stringify(infoCursos));
});

//Especificamos el puerto
//process.env.PORT va a conseguir el valor del puerto si esta definido como una variable en el ambiente (o environment) donde se esta ejecutando la aplicación de Node.js, si no esta definido entonces se va a asignar el puerto fijo que es 3000
const PUERTO = process.env.PORT || 3000;


app.listen(PUERTO, () => {
  console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
});


