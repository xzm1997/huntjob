var arr = [1,2,3,4,5,6,7,8,9,10];

let sum = arr.reduce((a, b) => {
  a += b;
}, 0)

console.log(sum)