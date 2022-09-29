//Métodos útiles del objeto console en Nodejs

//console.log() Muestra la información proporcionada en la consola Javascript.
console.log("¡Hola mundo!");

//console.info()  Equivalente al anterior. Se utiliza para mensajes de información.
console.info("Información importante"); 

//console.warn()  Muestra información de advertencia. Aparece en amarillo. errores leves.
console.warn("Advertencia");

//console.error() Muestra información de error. Aparece en rojo. errores graves.
console.error("¡Ocurrió un error!");


//console.assert() Se usa para hacer pequeñas pruebas básicas.
console.assert("Prueba");

//console.table() Muestra los datos como una tabla. Debe ser un array o un objeto.
console.table("tabla");

//Podemos pasar como argumento un objeto de error y nos da un mensaje mas descriptivo del error
console.error(new Error("Ocurrió u error"));
