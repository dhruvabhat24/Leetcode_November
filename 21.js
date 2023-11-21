/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function(nums) {
    const mod = 1000000007;
    const count = {};
    let total = 0;

    for (let i=0; i<nums.length; i++) {
        const diff = selfDiff(nums[i]);
        if (!count[diff]) count[diff] = 1;
        else count[diff]++;

        total = (total + count[diff] - 1) % mod;
    }

    return total;
};

function selfDiff (n) {
    if (n < 10) return 0;
    return n - Number(`${n}`.split('').reverse().join(''));
};
