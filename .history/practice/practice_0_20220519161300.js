arr = [1,2,3,4,5]

arr.reduce(function(sum, item) {
  sum += item
  return sum;
}, 0)
console.log(arr)