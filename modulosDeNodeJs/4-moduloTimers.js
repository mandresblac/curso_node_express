//El modulo timers (o temporizador o cronometro), contiene funciones que ejecutan código luego de un cierto periodo de tiempo, estas funciones nos van a permitir simular o crear procesos asíncronos

function mostrarTema(tema) {
  console.log(`Estoy aprendiendo ${tema}`);
};

/* ***************************** setTimeout() ************************* */
//setTimeout() es una funcion que permite ejecutar código luego de especificarle un numero de tiempo en milisegundos
//1 segundo = 1000 milisegundos
//sintaxis: La funcion setTimeout() toma 3 argumentos, a saber:
//setTimeout(nombre_funcion, retraso en milisegundos, argumentos_de_la_funcion)

//setTimeout(mostrarTema, 4000, "Node.js");//Ejemplo con un solo argumento al final


//Funcion que suma 2 valores
function sumar(a, b) {
  console.log(a + b);
};

//setTimeout(sumar, 3000, 5, 6);//Ejemplo con 2 argumentos al final


/* ***************************** setImmediate() ************************* */
//setImmediate() Immediate significa inmediato, es una funcion que permite ejecutar código asíncrono en la proxima iteración del ciclo de eventos de Node (lo mas pronto posible)
//setImmediate() se ejecuta después de que todo el código Síncrono se halla ejecutado
//sintaxis: setImmediate(funcion_a_ejecutar, argumento1, argumento2)

/* console.log("Antes de setImmediate()");
setImmediate(mostrarTema, "Node.js");
console.log("Después de setImmediate()"); */


/* ***************************** setInterval() ************************* */
//setInterval() es una funcion que permite ejecutar código un número infinito de veces con un retraso especifico de milisegundos
//sintaxis: setInterval(funcion_a_ejecutar, intervalo_en_milisegundos, argumento1, argumento2)

//setInterval(mostrarTema, 1500, "Node.js");//Ejemplo con un argumento

setInterval(sumar, 1500, 3, 4);//Ejemplo con dos argumentos
