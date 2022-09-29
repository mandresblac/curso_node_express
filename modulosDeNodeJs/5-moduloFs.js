//El modulo fs (File System) en español Sistema de archivos
//Este modulo contiene funcionalidades muy útiles para trabajar con el sistema de archivos

//Los métodos de este modulo todos son asíncronos por defecto, es decir no van a bloquear la ejecución del programa

//Operaciones útiles que se pueden realizar con este modulo:
//Leer un archivo
//Modificar un archivo
//Copiar un archivo
//Eliminar un archivo
//Cambiar nombre a un archivo
//Ademas permite crear y modificar directorios o carpetas


//Utilizamos Sync o Synchronous, asíncrono en ingles

//Mandamos a llamar el modulo fs
const fs = require('fs');


/* ****************************** LEER UN ARCHIVO ********************************** */

//Para leer el contenido del archivo index.html usamos el método readFile()
/* fs.readFile('index.html', "utf-8", (err, contenido) => {
  if (err) {
    throw err;//throw nos permite que ese error detenga la ejecución del programa y ver detalles de ese error en la terminal  
  }
  console.log(contenido);
});  */


/* ************************* CAMBIAR EL NOMBRE DE UN ARCHIVO ***************************** */

//Cambiar el nombre de un archivo con el método .rename(), vamos a cambiar el nombre del archivo index.html por main, el primer argumento es el path o ruta del archivo, luego el nuevo nombre del archivo, luego una función flecha
/* fs.rename("index.html", "main.html", (err) => {
  if (err) {
    throw err;
  }
  console.log("Nombre cambiado exitosamente.")
}); */


/* ******************** AGREGAR CONTENIDO AL FINAL DE UN ARCHIVO *********************** */

//Agregar contenido al final de un archivo, operación appendFile(), este método crea un archivo nuevo si no existe en la ubicación que indicamos.
//Parámetro uno, es la ruta del archivo que queremos modificar, segundo parámetro el contenido que queremos agregar al archivo en este caso "<p>Hola</p>", tercer parámetro es una función flecha
/* fs.appendFile("index.html", "<p>Hola</p>", (err) => {
  if (err) {
    throw err;
  }
  console.log("Archivo actualizado");
}); */


/* ******************** MODIFICAR CONTENIDO DE UN ARCHIVO *********************** */

//Reemplazar o modificar todo el contenido del archivo con el método .writeFile()
//Parámetro uno es la ruta del archivo que queremos modificar, segundo parámetro el contenido nuevo que queremos agregar al archivo, tercer parámetro es una función flecha
/* fs.writeFile("index.html", "Contenido nuevo", (err) => {
  if (err) {
    throw err;
  }
  console.log("Contenido Reemplazado exitosamente");
}); */


/* *************************** ELIMINAR UN ARCHIVO ******************************* */

//Eliminar archivos con el método unlink(), en el primer parámetro  se especifica el nombre o ruta del archivo a eliminar, segundo parámetro una arrow function
/* fs.unlink("main.html", (err) => {
  if (err) {
    throw err;//Lanzamos el error err y detenemos la ejecución con la palabra throw
  }
  console.log("Archivo eliminado");//Si no hay error mostramos el mensaje "Archivo eliminado"
}); */



//Los métodos anteriores tienen su version Sincronía, que podemos utilizar en caso de que no necesitamos que sean asíncronas, solo le agregamos la palabra Sync al final del nombre del método y no lleva ninguna funcion en su interior, por ejemplo:

//Para leer un archivo
//En esta caso el método readFileSync() nos retorna el contenido del archivo y podemos asignarlo a una constante y luego mostrarlo con un console.log
console.log("Antes de leer el archivo");

const archivo = fs.readFileSync('index.html', "utf-8"); 
console.log(archivo);

console.log("Después de leer el archivo");

//Para cambiar el nombre de un archivo
fs.renameSync("index.html", "main.html");
console.log("Después de cambiar nombre del archivo");

//Para agregar contenido al final de un archivo
fs.appendFileSync("index.html", "<p>Hola</p>");
console.log("Después de agregar contenido al archivo");

//para modificar contenido de un archivo
fs.writeFileSync("index.html", "Contenido nuevo");
console.log("Después de modificar el contenido del archivo");

//Par eliminar un archivo
fs.unlinkSync("main.html");
console.log("Después de eliminar el archivo");

