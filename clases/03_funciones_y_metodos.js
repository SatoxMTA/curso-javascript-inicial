// Funciones
function calcularPromedio(notasArray, nombre) {
    let acumulador = 0
    let contador = 0
    for (let i = 0; i < notasArray.length; i++) {
        const nota = notasArray[i];
    
        acumulador += nota
        contador ++ 
    }
    console.log(`El promedio de ${nombre} es: ${acumulador/contador}`)
}

let notasJuan = [5, 7, 8, 6, 10]
let notasPablo = [5, 6, 10, 10, 9, 8, 3, 7]

calcularPromedio(notasJuan, 'Juan')
calcularPromedio(notasPablo, 'Pablo')


function suma(numero1, numero2) {
    var resultado =  numero1 + numero2
    return resultado
}

let resultado = suma(2, 9)
console.log(resultado)


// Clases y Objetos
class Alumno {
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }

    saludar() {
        console.log(`Hola a todos mi nombre es ${this.nombre }`)
    }
}

let alumno1 = new Alumno('Pablo', 25)
alumno1.saludar()


// Propiedades y Metodos en los Strings
let texto = "Hola Pablo, Como Estas?"
console.log("propiedad longitud de la cadena", texto.length)
console.log("metodo toUpperCase:", texto.toUpperCase())
console.log("metodo toLowerCase:", texto.toLowerCase())
console.log("metodo indexOf:", texto.indexOf('Mu'))
console.log("metodo substring:", texto.substring(5, 9))
let splited = texto.split(" ")
console.log("metodo split:", splited)
texto = texto.concat(" Muy Bien!")
console.log("metodo concat:", texto)

// Propiedades y Metodos en los Arrays
console.log(splited)
console.log("propiedad length:", splited.length)
console.log("metodo join", splited.join(" "))


