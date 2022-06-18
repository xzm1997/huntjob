const arrRandom = (arr) => {
  const getRandom = (max) => {
    return Math.floor(Math.random() * max);
  }

  let index;
  for (let i = 0; i < arr.length; ++i) {
    index = getRandom(arr.length)
    // console.log(index);
    [arr[i], arr[index]] = [arr[index], arr[i]];
  }

  return arr;
}

arr = [1,2,3,4,5,6,7,8];
console.log(arrRandom(arr));
