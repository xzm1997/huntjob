let flat = (arr, index) => {
  if (!index) {
    return arr;
  }
  let res = arr.map(item => {
    if (item.isArray()) {

    }
  })
  return res;
}


let arr = [1,2,[3,4,[5],[6,7,8,[9]],[10]],[11,12,13,[14]]];
console.log(flat(arr));
