var knightDialer = function(n) {
    const MODULO = 10 ** 9 + 7;
    const dialerMap = {
       0: [4, 6],
       1: [6, 8],
       2: [7, 9],
       3: [4, 8],
       4: [0, 3, 9],
       5: [],
       6: [0, 1, 7],
       7: [2, 6],
       8: [1, 3],
       9: [2, 4], 
    };
    let dp = Array(10).fill(1);

    for (let index = 1; index < n; index++) {
        const nextDp = Array(10).fill(0);

        for (let num = 0; num < 10; num++) {
            for (const dialer of dialerMap[num]) {
                nextDp[num] += dp[dialer] % MODULO;
            }
        }
        dp = nextDp;
    }
    return dp.reduce((result, count) => (result + count) % MODULO);
};
