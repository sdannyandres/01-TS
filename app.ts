interface Int0{
    dato: number
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
    b: "ALBERTO",
    h:{dato:233},
    c: new Date(),
    d: 12
   

}




