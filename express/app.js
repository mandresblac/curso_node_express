//La primer línea  que vamos a escribir cuando se desarrolla una aplicación con express (en todos los archivos que lo requieran) es:
const express = require("express"); //Importamos express con require("express")

//Creamos una aplicación de express
const app = express();

//Importamos el contenido del archivo cursos utilizando la sintaxis de desestructuración
const {infoCursos} = require("./cursos.js");

console.log(infoCursos);

