class Persona {
    nombre: string
    constructor(nombre: string) {
        this.nombre = nombre;
    }
}
var pepe = new Persona("pepe")

console.log(pepe.nombre)

var pepe = new Persona("Juan")

console.log(pepe.nombre)

