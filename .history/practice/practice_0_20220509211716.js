let getSum = (item) => {
  if (typeof item == object) {
    let res = 0;
    item.forEach((itemNow) => {
      res += getSum(itemNow);
    })
    return res;
  }
  return item;
}
var arr = [1,2,3,[[4,5],6],7,8,9]
let res = getSum(arr)
console.log(res);