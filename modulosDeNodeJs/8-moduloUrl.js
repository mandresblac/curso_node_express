//Para crear un objeto URL escribimos la palabra clave new y luego el nombre de la clase URL() que esta i de forma global, de la siguiente manera:
const miURL = new URL("https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1");


/* ****************** PARA EXTRAER CADA ELEMENTO QUE CONFORMA LA URL ****************** */
//hostname permite saber el nombre del host
console.log(miURL.hostname); //www.ejemplo.org

//pathname permite extraer la ruta o path
console.log(miURL.pathname); ///cursos/programación

//searchParams (parámetros de búsqueda) acceder a los parámetros query que tenemos al final de la url
console.log(miURL.searchParams);
//Para acceder a los valores del objeto URLSearchParams que crea searchParams 
console.log(miURL.searchParams.get("ordenar")); //vistas
console.log(miURL.searchParams.get("nivel")); //1


