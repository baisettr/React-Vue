function filterMap(r) {
    return r.reduce((res, e) => {
        const prop = e.k;
        const val = res[prop];
        if (val) {
            val.push(e.v);
            res[prop] = val
        } else {
            res[prop] = [e.v]
        }
        return res
    }, {})
}

function filterProp(rMap, items) {
    for (const key of Object.keys(rMap)) {
        const values = rMap[key];
        items = items.filter(e => !values.includes(e[key]));
    }
    return items;
}

const items = [
    { color: 'red', type: 'tv', age: 18 },
    { color: 'red', type: 'phone', age: 20 },
    { color: 'silver', type: 'tv', age: 18 },
    { color: 'silver', type: 'phone', age: 20 }
];

const excludes = [
    { k: 'color', v: 'red' },
    { k: 'color', v: 'blue' },
    { k: 'type', v: 'phone' },
];


function filterProp1(excludes, items) {
    excludes.forEach((e) => {
        items = items.filter((el) => el[e.k] !== e.v)
    })
    return items;
}


let x = filterProp(filterMap(excludes), items);
let y = filterProp1(excludes, items);
console.log(x, y);

