/**
 * @param {string[]} nums
  * @return {string}
   */
   var findDifferentBinaryString = function(nums) {
       let ans = ""
           let target = nums[0].length
               let count = 0
                   while (ans.length < target){
                           let char = 0
                                   for (let i=0; i<nums.length; i++){
                                               if (nums[i][count] === "1") char++ // compares 1's and 0's
                                                           else char--
                                                                   }
                                                                           if (char > 0) ans += "0"
                                                                                   else ans += "1" // also triggered if nums is empty
                                                                                           nums = nums.filter((a)=> a[count] === ans[ans.length-1]) // updates array
                                                                                                   count++ // updates character getting evaluated
                                                                                                       }
                                                                                                           return ans
                                                                                                           }; 

