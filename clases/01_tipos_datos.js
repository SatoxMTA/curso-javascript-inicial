
let nombre = "Eduardo"
const fechaNacimiento = '06/10/1992'
const altura = '172'


let ejemploFloat = 20/6
let ejemploInteger = 20

let potencia = 2**3
let multiplicacion = 2*3
let modulo = 20%6


let edad = 15
let estado = 'sobrio'
console.log('Antes de crecer: ', edad)

// incrementar
edad = edad + 1
edad++
console.log('Despues de crecer: ', edad)

// operacion logica
let esMayorEdad = edad > 18
let estaSobrio = estado == 'sobrio'
console.log('Puede manejar?: ', esMayorEdad && estaSobrio)

// objeto
let persona = {
    nombre: "Eduardo",
    edad: 30,
    casado: false
}

console.log(persona.nombre, persona.edad, persona.casado)

// array
let dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]

console.log(dias[0], dias[6])
