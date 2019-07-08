function flatten1(arr) {
    return arr.reduce((res, el) => {
        if (Array.isArray(ele)) {
            return res.concat(flatten1(ele));
        }
        res.push(el);
        return res;
    }, [])
}

function flatten2(arr) {
    const res = [];
    const stack = [...arr];

    while (stack.length) {
        const next = stack.pop();
        if (Array.isArray(next)) {
            stack.push(...next);
        } else {
            res.push(next)
        }
    }
    return res.reverse();
}

function flatten3(arr) {
    return [].concat.apply([], arr); //[].concat(...arr)
}

function flatten4(arr) {
    var res = [];
    !(function flat(arr) {
        arr.forEach((e) => {
            if (Array.isArray(e)) flat(e)
            else res.push(e)
        })
    })(arr);
    return res;
}