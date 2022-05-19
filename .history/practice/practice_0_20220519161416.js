let arr
arr = [1,2,3,[[4,5],6],7,8,9]

let res = arr.reduce(function(sum, item) {
  sum += item
  return sum;
}, 5)
console.log(res)