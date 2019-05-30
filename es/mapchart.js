let x = [{ a: [{ a1: 2 }, { a2: 3 }] }, { a: [{ a1: 1 }, { a2: 4 }] }];

const stack_colors = {
    "Dinner": "blue",
    "Snack": "red"
}
let label = stack_by_labels[i];

let final = {};
x.map((e) => {
    let eA = e.a;
    eA.map((y) => {
        let key = Object.keys(y)[0];
        if (!final[key]) {
            final[key] = [];
        }
        final[key].push(y[key]);
    })
})
console.log(final);