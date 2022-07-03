const read_line = require('readline-sync')
let input = read_line.question("")

console.log('input:' + input)

const n = input.length;
let ans = 0;
for (let i = 0; i < 2 * n - 1; ++i) {
  let l = i / 2, r = i / 2 + i % 2;
  while (l >= 0 && r < n && input.charAt(l) == input.charAt(r)) {
      --l;
      ++r;
      ++ans;
  }
}
console.log(ans);
