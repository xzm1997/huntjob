const flat = (arr, deepth) => {
  if (!Array.isArray(arr) || !deepth) {
    return arr;
  }
  return {
    arr.reduce({
      
    }, [])
  }
}


let arr = [1,2,[3,4,[5],[6,7,8,[9]],[10]],[11,12,13,[14]]];
console.log(flat(arr, 3));
