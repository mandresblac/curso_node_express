//Importamos el archivo con nombre formatoJson.json y almacenamos su contenido en la constante curso
const curso = require("./formatoJson.json");

//Mostramos contenido de la variable curso
/* console.log(curso); */

//Accedemos a la información contenida en el archivo formatoJson.json a través de la nomenclatura del punto
/* console.log(curso.titulo);
console.log(curso.temas[0]);
console.log(curso.temas[1]); */


//Convertir un objeto Javascript a formato JSON utilizando el método JSON.stringify()
//Creamos un objeto Javascript que se almacena en una constante llamada infoCurso 
let infoCurso = {
  "titulo": "Aprende Node.js",
  "numeroVistas": 45642,
  "numeroLikes": 21123,
  "temas": [
    "JavaScript", 
    "Node.js"
  ],
  "esPublico": true
};


//Supongamos que queremos transformar el objeto anterior a un formato JSON para poder enviarlo al servidor y almacenarlo o guardarlo en un archivo, para eso utilizaamos el método JSON.stringify()
//Creamos una variable llamada infoCursoJSON
let infoCursoJSON = JSON.stringify(infoCurso);

//Mostramos lo que contiene la variable infoCursoJSON
/* console.log(infoCursoJSON);
console.log(typeof infoCursoJSON); */

//Si intentamos acceder a cualquiera de las propiedades del objeto no podremos y nos va arrojar "undefined" porque ahora es un string  
/* console.log(infoCursoJSON.titulo); */


//Ahora vamos a convertir la cadena JSON y en un objeto de JavaScript utilizando el método JSON.parse().
let infoCursoObjeto = JSON.parse(infoCursoJSON);

//Mostramos lo que contiene la variable infoCursoObjeto
console.log(infoCursoObjeto);
console.log(typeof infoCursoObjeto);

//Utilizamos la nomenclatura del punto para acceder a las propiedades del objeto
console.log(infoCursoObjeto.titulo);


