String.prototype.repeatify = String.prototype.repeatify || function (times) {
    var str = "";
    for (let i = 0; i < times; i++) {
        str += this;
    }
    return str;
}

console.log('hello'.repeatify(3))

function sqrt(num) {
    const isGood = (guess) => {
        return Math.abs(guess * guess - num) / num < 0.001;
    }
    const improve = (guess) => {
        return (guess + num / guess) / 2
    }
    const check = (guess) => {
        return isGood(guess) ? guess : check(improve(guess))
    }
    return check(1.0)
}

console.log(sqrt(5), sqrt(64));

function perm1(str) {
    if (!str.length) return [str];
    let results = str.split('').reduce((results, c) => {
        let tail = str.split(c).join('');
        return results.concat(perm1(tail).map(p => c + p))
    }, []);
    return results;
}

console.log(perm1('abc'))

function isBalanced(str) {
    const findMatch = (chars, isBalanced, total) => {
        let b = !(!isBalanced || total < 0);
        if (!chars.length) return b;
        else if (chars[0] == '(') return findMatch(chars.slice(1), b, total + 1);
        else if (chars[0] == ')') return findMatch(chars.slice(1), b, total - 1);
        else return findMatch(chars.slice(1), b, total);
    }
    return findMatch(str.split(''), true, 0);
}

console.log(isBalanced("((d)on)e())("))

function map1(l, f) {
    for (var i = 0, r = []; i < l.length; r.push(f(l[i++]))) {

    }
    return r;
}