/**
 * @param {string} s
 * @return {number}
 */
var countHomogenous = function(s) {
    let mod = Math.pow(10,9)+7;
    let count = 0;
    let i=0;
    let len = s.length;
    let r =1;
    if(len==1) return 1;
    for(let i= 0; i<len;i++){
        if(s[i+1]==s[i]){
            r++;
        }
        else {
            count = (count+sum(r))%mod;
            r=1;
        }
    }
    return count;
};

var sum =function(n) {
        return (n*(n+1))/2;
}
