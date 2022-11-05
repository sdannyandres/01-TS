interface Int0{
    dato: number
    dato1: string
}

interface Iint1{
    a: number,
    b: string,
    c: Date,
    h: Int0,
}
interface Iint2 extends Iint1{
    d:number

}
var v1 : Iint2 = {
    
    a: 1,
    h:{
        dato:233,
        dato1:"aa"
        },
    b: "ALBERTO",
    c: new Date(),
    d: 12   
}
v1.a = 12
v1.h.dato1 = "aa"




