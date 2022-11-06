class Persona {
    private _nombre: string
    constructor(nombre: string) {
        this._nombre = nombre;
    }
    get nombre(): {
        return this._nombre
}
var pepe = new Persona("pepe")

console.log(pepe.nombre)

var pepe = new Persona("Juan")

console.log(pepe.nombre)

