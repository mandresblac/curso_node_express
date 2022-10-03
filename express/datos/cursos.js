//En este archivo vamos a escribir la información sobre distintos cursos con los cuales vamos a trabajar

let infoCursos = {
  "programacion": [
    {
      id: 1,
      titulo: "Aprende Pyhon",
      lenguaje: "python",
      vistas: 15000,
      nivel: "basico"
    },
    {
      id: 2,
      titulo: "Python intermedio",
      lenguaje: "python",
      vistas: 13553,
      nivel: "intermedio"
    },
    {
      id: 3,
      titulo: "Aprende JavaScript",
      lenguaje: "javascript",
      vistas: 102223,
      nivel: "basico"
    }
  ],
  "matematicas": [
    {
      id: 1,
      titulo: "Aprende calculo",
      tema: "calculo",
      vistas: 12427,
      nivel: "basico"
    },
    {
      id: 2,
      titulo: "Aprende algebra",
      tema: "algebra",
      vistas: 15722,
      nivel: "intermedio"
    }
  ]
};

//Exportamos el objeto infoCursos
module.exports.infoCursos = infoCursos;

