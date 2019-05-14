/* class Test {
    constructor(var1) {
        this.var1 = var1;
    }

    printVar() {
        console.log(this.var1);
    }
}

let test1 = new Test();
test1.printVar();
//test1.prototype.printVar();

let test2 = new Test('Hello');
test2.printVar();
//test2.prototype.printVar();
 */

const x1 = (a) => {
    this.a = a;
    console.log(this);
    console.log(this.a, this.b);
    return x2 = (b) => {
        this.b = b;
        console.log(this);
        console.log(this.a, this.b);
        return a + b
    }
}

console.log(x1(2)(3));

function x3(a) {
    this.a = a;
    console.log(typeof this);
    console.log(this.a, this.b);
    return function x4(b) {
        this.b = b;
        //console.log(this);
        console.log(this.a, this.b);
        return a + b
    }
}

console.log(x3(2)(3));