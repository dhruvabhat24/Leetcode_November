/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumElementAfterDecrementingAndRearranging = function(arr) {
    arr.sort((a, b) => a - b);

    let max = 0;
    
    for (let i=0; i<arr.length; i++) {
        max = Math.min(arr[i], max+1);
    }

    return max;
};
