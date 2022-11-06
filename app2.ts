interface ICalculadora {
    sumar(a: number, b: number): number 
    restar(a: number, b: number): number
    mul(a: number, b: number): number
    div(a: number, b: number): number
}

class Calculadora implements ICalculadora {
    sumar = (a: number, b: number): number => a + b
    restar = (a: number, b: number): number => a - b
    mul = (a: number, b: number): number => a * b
    div = (a: number, b: number): number => a / b
}



var c1 = new Calculadora()
console.log(c1.sumar(1,3))

