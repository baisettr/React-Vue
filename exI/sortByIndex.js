const A = ['C', 'D', 'E', 'F', 'G'];
const B = [3, 0, 4, 1, 2];

function sort(x, y) {
    const a = [...x];
    const b = [...y];
    let resInd = {}; //index as key
    for (i = 0; i < b.length; i++) {
        resInd[b[i]] = a[i];
    }

    console.log(Object.values(resInd))

    let resVal = {}; //val as key
    for (i = 0; i < b.length; i++) {
        resVal[a[i]] = b[i];
    }

    //sort by value
    let rVal = Object.keys(resVal).sort((u, v) => resVal[u] - resVal[v]);

    console.log(rVal);
}

function sort1(x, y) {
    const a = [...x];
    const b = [...y];
    const swap = (a, i, j) => {
        let t = a[i];
        a[i] = a[j];
        a[j] = t;
    }

    for (let i = 0; i < b.length; i++) {
        let temp = i;
        while (b[temp] !== temp) {
            swap(a, b[temp], temp);
            swap(b, b[temp], temp);
            temp = b[temp]
        }
    }
    return a;
}

//sort(A, B);
//let x = sort1(A, B);
//console.log(x)

function removeSubstring(org, str) {
    let reg = new RegExp(str, 'g');
    return org.indexOf(str) !== -1 ? org.replace(reg, '') : -1
}

console.log(removeSubstring('ABCSC', 'ABC'));

function filterRes(arr, str) {
    return arr.filter(el => el.toLowerCase().indexOf(str.toLowerCase()) !== -1)
}