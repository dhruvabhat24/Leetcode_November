function findDiagonalOrder(A, ans = []) {
    // deep 1
    for (var i = 0; i < A.length; i++) {
        // deep 2
        for (var j = 0; j < A[i].length; j++) {
            // init
            ans.push([i, j, A[i][j]])
        }
    }
    // result by sort :p
    return ans.sort((a, b) => a[0] + a[1] === b[0] + b[1] ? a[1] - b[1] : (a[0] + a[1]) - (b[0] + b[1])).map(r => r[2])
}
