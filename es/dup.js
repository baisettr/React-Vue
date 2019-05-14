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