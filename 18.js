/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function(nums, k) {
    nums.sort((a,b)=>a-b);  //O(log N)
    let left =0;
    let right =0;
    let total =0;
    let res =0;
    while(right<nums.length){
        total+= nums[right];

        while(nums[right]*(right-left+1) > total+k){
            total-=nums[left];
            left+=1;
        }
        res = Math.max(res,right-left+1);
        right+=1;
    }
    return res;
};
