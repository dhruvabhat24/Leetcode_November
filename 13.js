
/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function (s) {
  const n = s.length;
  const ans = new Array(n).fill();
  const set = new Set(['a', 'i', 'u', 'e', 'o']);
  const vowels = [];

  for (let i = 0; i < n; i++) {
    const isVowel = set.has(s[i].toLowerCase());
    if (isVowel) {
      vowels.push(s[i]);
    } else {
      ans[i] = s[i];
    }
  }

  vowels.sort((a, b) => a.charCodeAt() - b.charCodeAt());

  let j = 0;
  for (let i = 0; i < n; i++) {
    if (ans[i] !== undefined) continue;
    ans[i] = vowels[j++];
  }

  return ans.join('');
};
