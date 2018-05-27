function swapper(s1, s2) {
    i = s1.length;
    j = s2.length;
    if (i != j) { return false; }
    var start = 0, end = 0;
    for (k = 0; k < i; k++) {
        if (s1[k] != s2[k]) {
            start = k;
            break;
        }
    }
    for (k = i - 1; k >= 0; k--) {
        if (s1[k] != s2[k]) {
            end = k;
            break;
        }
    }
    if (start == 0 && end == 0) { return false; }
    temp = s1[start];
    s1 = s1.substring(0, start) + s1[end] + s1.substring(start + 1, end) + s1[start] + s1.substring(end + 1)



    console.log("1")
    console.log(s1, s2, start, end);
    //s1[end] = [s1[start], s1[start] = s1[end]][0];
    for (k = 0; k < i; k++) {
        if (s1[k] != s2[k]) { console.log(s1[k]); return false; }
    }
    return true;

}

console.log(swapper("abcda", "dbcaa"));