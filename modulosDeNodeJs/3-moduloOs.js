//Modulo os, su nombre viene de operating system o sistema operativo
//Este modulo nos permite obtener información sobre el sistema operativo en el cual se ejecuta nuestra aplicación de Nodejs

//El modulo OS no esta disponible de forma global por lo cual tendremos que importarlo o requerirlo con require
//Por convención los módulos se deben asignar a una constante "const"
const os = require("os");

//la función .type() o tipo en español nos permite acceder al tipo de sistema operativo en el caul se esta ejecutando nuestra aplicación de Nodejs, y retorna un string o cadena de caracteres
console.log(os.type());
console.log(`Tu sistema operativo es: ${os.type()}`);

//Para acceder al directorio home o directorio de trabajo del usuario utilizamos la funcion .homedir()
console.log(os.homedir());

//Para ver cuanto tiempo lleva ejecutándose el sistema operativo utilizamos la funcion .uptime(), la salida es el número de segundos desde que se inicio el sistema operativo
console.log(os.uptime());

//Para ver información sobre ele usuario utilizamos la funcion .userInfo()
console.log(os.userInfo());