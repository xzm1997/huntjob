let input = 'abcd';
let dir = input.split(''), res = [];
// console.log(dir);
const deal = (arr) => {
  if (arr.length === 1) return arr;
  let res = [];
  for (let i = 0; i < arr.length; ++i) {
    let point = arr.splice(i, 1)
    deal(arr);
    res.push()
  }
  return res;
}
