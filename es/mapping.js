let x = ["a mission", "mission mission", "b mission", "c c mission"];

let z = {};
let y = x.map((e) => {
    t = e.split(' ');
    if (z[t[0]]) {
        z[t[0]] = [...z[t[0]], e]
    } else {
        z[t[0]] = [e]
    }
    return e.split(' ')
})

p = [];
x.forEach((e) => {
    t = e.split(' ');
    if (z[t[t.length - 1]]) {
        m = z[t[t.length - 1]];
        i = t.splice(0, t.length - 1);
        let j = [];
        m.forEach((l) => {
            if (l !== e) {
                j.push([...i, l].join(' '));
            }
        });
        p = [...p, ...j]
    }
})

return p



