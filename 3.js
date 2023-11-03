/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    let result = [];
    for(let i=1; i<=n && i<=target[target.length - 1]; i++) {
        result.push("Push");
        if(!target.includes(i)) {
            result.push("Pop");
        }
    }
    return result;
};
