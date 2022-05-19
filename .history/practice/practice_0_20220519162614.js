function getArgSum() {
  let arg = [...arguments]
  return arg.reduce((sum, item) => {
    return sum+item*1
  }, 0)
}


console.log(getArgSum(1,2,3,4,'5',6,7,8,9))