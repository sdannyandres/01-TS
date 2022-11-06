class Persona {
    private _nombre: string
    private _saldo:number
    constructor(nombre:string, saldo:number = 0) {
        this._nombre = nombre;
        this._saldo = saldo;
    }
    get nombre(){ return this._nombre; }
    get saldo(){ return this._saldo; }

    addSaldo(importe:number):void {
        this._saldo+= importe
    }

}

var pepe = new Persona("pepe", 200)
pepe.addSaldo(100)
console.log(pepe.saldo)