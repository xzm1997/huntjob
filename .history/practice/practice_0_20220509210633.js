let getSum = (item) => {
  if (item.isArray) {
    let res = 0;
    item.forEach((itemNow) => {
      res += getSum(itemNow);
    })
    return res;
  }
  return item-0;
}
var arr = [1,2,3,[[4,5],6],7,8,9]
let res = getSum(arr)-0
console.log(res);