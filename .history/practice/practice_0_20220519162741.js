function getArgSum() {
  let sum = 0;
  Array.prototype.forEach.call(arguments, (item) => {
    sum += item*1
  })
  return sum
}


console.log(getArgSum(1,2,3,4,'5',6,7,8,9))