let input = 'abcd';
let dir = input.split(''), res = [];
// console.log(dir);
const deal = (arr) => {
  if (arr.length === 1) return arr;
  for (let i = 0; i < arr.length; ++i) {
    deal(arr.splice(i, 1))
  }
}
