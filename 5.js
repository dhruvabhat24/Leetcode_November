var getWinner = function(arr, k) {
        if (k >= arr.length) {
        return Math.max(...arr);
    }
    let winMap = {};
    let n1 = arr[0];
    let n2 = undefined;
    for (let i = 1; i < arr.length; i++) {
        n2 = arr[i];
        if (n1 > n2) {
            winMap[n1] = (winMap[n1] || 0) + 1;
            if (winMap[n1] >= k) {
                return n1;
            }
        }
        else if (n1 < n2) {
            winMap[n2] = (winMap[n2] || 0) + 1;
            if (winMap[n2] >= k) {
                return n2;
            }

            n1 = n2;
        }
    }
    return Math.max(...arr);
};
