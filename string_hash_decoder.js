function hash(s) {
    let h = 7;
    let ch = 37;
    let ls = "acdegilmnoprstuw";

    for (let i = 0; i < s.length; i++) {
        h = h * ch + ls.indexOf(s[i])
    }
    return h;
}

function decode_hash(h) {
    let baseHash = 7;
    let ch = 37;
    let ls = "acdegilmnoprstuw";
    let s = "";

    let flag = true;
    while (flag) {
        let i = h % ch;
        s = ls[i] + s;

        h = (h - i) / ch;

        // if (h < ch) flag = false;
        if (h == baseHash) flag = false;
    }
    return s;
}

/* let start_hash_scale = 7;
let compute_hash_scale = 37;
let letterSet = "acdegilmnoprstuw"; */

let x = hash('leepadg');
let y = decode_hash(680131659347);
let x1 = hash('asparagus');
let y1 = decode_hash(910897038977002);

console.log(x, y, x1, y1);