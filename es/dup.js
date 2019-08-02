let names = ['Mike', 'Matt', 'Nancy', 'Adam', 'Jenny', 'Nancy', 'Carl']

let uniq = names
    .map((name) => {
        return { count: 1, name: name }
    })
    .reduce((a, b) => {
        a[b.name] = (a[b.name] || 0) + b.count
        return a
    }, {})

let sorted = Object.keys(uniq).sort((a, b) => uniq[a] < uniq[b])

console.log(sorted)

function fibonacci(num, memo) {
    memo = memo || {};

    if (memo[num]) return memo[num];
    if (num <= 1) return 1;

    return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}

function checkDup(arr) {
    let bit = 0;
    for (let e of arr) {
        //(bit >>> 0).toString(2) parseInt('110',2)
        let str = (bit).toString(2)
        let bck = str.length - 1
        //console.log(str, bck, e, str[bck - e])
        if (str[bck - e] === '1') return false
        bit = (1 << e) | bit
    }
    return true//(bit).toString(2)
}