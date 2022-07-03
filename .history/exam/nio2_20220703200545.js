const read_line = require('readline-sync')
let s = read_line.question("")

const len = s.length;
const dp = new Array(len).fill(0).map(() => new Array(len).fill(false));
let res = 0;
for (let i = 0; i < len; i++) {
  for (let j = i; j >= 0; j--) {
    if (s[i] === s[j]) {
      if (i - j <= 1) {
        dp[i][j] = true;
      } else {
        dp[i][j] = dp[i - 1][j + 1];
      }
    }
    res += dp[i][j] ? 1 : 0;
  }
}
console.log(res);
