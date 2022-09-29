//El modulo process es un modulo built-in y esta disponible de forma global, asi que solo escribiendo process tenemos acceso a ese modulo y nos da información sobre los procesos que esta ejecutando nuestra computadora

//console.log(process);
//console.log(process.env);// env significa environment o Ambiente en español y describe el ambiente de ejecución del programa

//Process nos permite acceder a los argumentos que se pasan en el terminal con argv
//console.log(process.argv[2]) 
//console.log(process.argv[3])


//con argv vamos a pode acceder a los indices del valor correspondiente
// [node, app.js, 6, 7]
//   0      1     2  3
//Para tomar un número indefinido de argumentos lo procesamos usando un ciclo for
for (let i = 2; i < process.argv.length; i++) {
  console.log(process.argv[i]);
}

//Con process se puede saber cuanta memoria se esta usando con el método memoryUsage()
console.log(process.memoryUsage());
