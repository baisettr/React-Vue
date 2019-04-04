const f1 = async () => "hello 1";
const f2 = async () => "hello 2";
const f3 = async () => "hello 3";

async function test() {
    const x1 = await f1();
    const x2 = await f2();
    const x3 = await f3();
    return x1 + x2 + x3;
}

const test1 = async () => {
    const x1 = await f1();
    const x2 = await f2();
    const x3 = await f3();
    console.log(x1, x2, x3);
}

/* test().then((mess) => {
    console.log(mess);
}).catch((err) => {
    console.log(err);
}); */
//test1();


async function multiply(a, b) {
    return a * b;
}
async function foo() {
    const result = await multiply(2, 5);
    return result;
}
/* 
foo().then((mess) => {
    console.log(mess);
}).catch((err) => {
    console.log(err);
}) */

/* (async function () {
    const result = await foo();
    console.log(result); // Logs 5
})();

(async function () {
    for (item of [1, 2, 3, 4, 5]) {

        const result = await foo();
        console.log(result); // Logs 5
    }
})(); */


let promises = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e) => { return Promise.resolve(e) })

let res = Promise.all(promises);

res.then((e) => {
    console.log(e);
});