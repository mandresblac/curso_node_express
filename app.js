//Este es el modulo o archivo donde llamamos la funcion que esta en el archivo saludo.js


//Requerimos (require o importamos) el modulo o archivo saludos.js para poder utilizar su contenido y lo almacenamos en una constante del mismo nombre saludos 
//Dentro del require indicamos entre comillas el PATH o ruta de ubicación del archivo
const saludos = require("./saludos"); 


//Otra forma para requerir (o  importar) una o varias funciones especificas de un modulo o archivo, (en este caso las funciones saludar y saludarHolaMundo del modulo saludos) es  usando la sintaxis de desestructuración, dentro de los corchetes escribimos el/los elemento/s específicos que deseamos importar separados por coma
//OJO: Para usar la funcion ya no tenemos que mencionar el modulo de donde proviene ni almacenar el elemento importado en una constante
//Este método es muy util cuando cuando los módulos contienen muchos muchos elementos exportados 
const { saludar, saludarHolaMundo } = require("./saludos"); 

//Llamado a una funcion que esta definida en otro modulo o archivo, para eso traemos del modulo o archivo saludo la funcion saludar utilizando la notación del punto, es decir: saludo.saludar()
//console.log(saludos.saludar("Manuel"));
//console.log(saludos.saludarHolaMundo());

//Llamado de la funcion saludarHolaMundo definida a traves de la destructuración
console.log(saludar("Manuel"));
console.log(saludarHolaMundo());
