/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function (piles) {
let sorted =piles.sort((a,b)=>b-a)
console.log(sorted)
let res =0
let yourChoices = piles.length /3
for(let j=0;j<=yourChoices+yourChoices-1;j++){
res+= sorted[j+1]
j++
}
return res
};
