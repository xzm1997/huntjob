const arrRandom = (arr) => {
  const getRandom = (max) => {
    return Math.floor(Math.random() * max);
  }

  for (let i = 0; i < arr.length; ++i) {
    let index = getRandom(arr.length);
    [arr[i], arr[index]] = [arr[index], arr[i]];
  }

  return arr;
}

arr = [1,2,3,4,5,6,7,8];
console.log(arrRandom(arr));
