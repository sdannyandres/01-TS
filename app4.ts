class C1 {
    private _a: number;
    private _b: number;
    constructor(a: number = 0, b?: number) {
        this._a = a;
        this._b = b === undefined ? 0 : b;
    }
    
    get a() {
        return this._a;
    }
    get b() {
        return this._b;
    }
}
var o1 = new C1(12,55);
console.log(o1.b, o1.a);