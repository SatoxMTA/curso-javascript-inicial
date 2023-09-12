/*
      Tienes un grupo de estudiantes, y cada uno tiene un conjunto de notas.  A continuación esta el array con los estudiantes. 

      const estudiantes = [
      { nombre: "Juan", edad: 20, notas: [85, 98, 78, 88, 90] },
      { nombre: "María", edad: 21, notas: [75, 80, 92, 89, 78] },
      { nombre: "Carlos", edad: 22, notas: [95, 88, 76, 92, 84] },
      { nombre: "Pedro", edad: 21, notas: [80, 82, 88, 90, 85] },
      { nombre: "Daniel", edad: 21, notas: [85, 80, 61, 90, 82] }
      ];

      Realizar tres tareas:
      Calcular el promedio general de la clase. Para hacerlo, suma todas las notas de todos los estudiantes y luego divide esta suma por el total de notas en la clase. Puedes usar un bucle for para recorrer los estudiantes y otro bucle for anidado para sumar las notas de cada estudiante.
      Encontrar la nota más baja entre todos los estudiantes y mostrar el nombre del estudiante que obtuvo esa nota. Puedes utilizar una variable para realizar un seguimiento de la nota más baja mientras recorres los estudiantes.
      Encontrar la nota más alta entre todos los estudiantes y mostrar el nombre del estudiante que obtuvo esa nota. De manera similar al punto anterior, puedes usar una variable para realizar un seguimiento de la nota más alta durante el recorrido.

      Resultado Esperado:

      Promedio General de la Clase: [Valor del promedio]
      Estudiante con la Nota Más Baja: [Nombre del estudiante con la nota más baja]
      Estudiante con la Nota Más Alta: [Nombre del estudiante con la nota más alta]
*/


/*

Entrada:
   const estudiantes = [
      { nombre: "Juan", edad: 20, notas: [85, 98, 78, 88, 90] },
      { nombre: "María", edad: 21, notas: [75, 80, 92, 89, 78] },
      { nombre: "Carlos", edad: 22, notas: [95, 88, 76, 92, 84] },
      { nombre: "Pedro", edad: 21, notas: [80, 82, 88, 90, 85] },
      { nombre: "Daniel", edad: 21, notas: [85, 80, 61, 90, 82] }
   ];

Salida:
   1. Calcular el promedio general de la clase.
   2. Estudiante con la Nota Más Baja.
   3. Estudiante con la Nota Más Alta.

*/

const estudiantes = [
   { nombre: "Juan", edad: 20, notas: [85, 98, 78, 88, 90] },
   { nombre: "María", edad: 21, notas: [75, 80, 92, 89, 78] },
   { nombre: "Carlos", edad: 22, notas: [95, 88, 76, 92, 84] },
   { nombre: "Pedro", edad: 21, notas: [80, 82, 70, 90, 85] },
   { nombre: "Daniel", edad: 21, notas: [85, 80, 61, 90, 82] }
];


// for (let estudiante of estudiantes) {
//    console.log(estudiante);
// }


// estudiantes.forEach(estudiante => {
//    console.log(estudiante);
// });


// 1. Calcular el promedio general de la clase.
// 2. Estudiante con la Nota Más Baja.
// 3. Estudiante con la Nota Más Alta.

let acumulador = 0
let contador = 0
let notaMin = Infinity
let nombreNotaMasBaja
let notaMax = -Infinity
let nombreNotaMasAlta

for (let i = 0; i < estudiantes.length; i++) {
   const estudiante = estudiantes[i]
   const notas = estudiante.notas // Array con las notas del estudiante

   for (let j = 0; j < notas.length; j++) {

      // 1. Calcular el promedio general de la clase.
      const nota = notas[j]
      acumulador = acumulador + nota
      contador = contador + 1 // contador++


      // 2. Estudiante con la Nota Más Baja.
      if (nota <= notaMin) {
         notaMin = nota
         nombreNotaMasBaja = estudiante.nombre
      }

      // 3. Estudiante con la Nota Más Alta.
      if (nota >= notaMax) {
         notaMax = nota
         nombreNotaMasAlta = estudiante.nombre
      }

   }
}

console.log('Promedio general:', acumulador/contador)
console.log(`El estudiante con la nota mas baja es: ${nombreNotaMasBaja} y su nota es: ${notaMin}`)
console.log(`El estudiante con la nota mas alta es: ${nombreNotaMasAlta} y su nota es: ${notaMax}`)