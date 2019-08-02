function mSub(a) {
    if (!a.length) {
        return undefined
    }
    let currentMax = a[0];
    let maxSoFar = a[0];
    let left = 0;
    let right = 0;

    for (let i = 1; i < a.length; i++) {
        if (a[i] > currentMax + a[i]) {
            left = i;
        }
        currentMax = Math.max(a[i], currentMax + a[i]);

        if (currentMax > maxSoFar) {
            right = i;
        }
        maxSoFar = Math.max(maxSoFar, currentMax)
    }

    return [maxSoFar, a.slice(left, right + 1)]
}

mSub([1, -3, 2, 1, -1])