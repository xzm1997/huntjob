let input = 'abcd';
let dir = input.split('');
// console.log(dir);
const deal = (arr) => {
  if (arr.length === 1) return arr;
  let res = [];
  for (let i = 0; i < arr.length; ++i) {
    let point = arr.splice(i, 1)
    ans = deal(arr);
    res.push([...point.concat(ans)], [...ans.concat(point)]);
  }
  return res;
}

let res = deal(dir);

console.log(res);
