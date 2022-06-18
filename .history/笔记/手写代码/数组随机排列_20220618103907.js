const arrRandom = (arr) => {
  const getRandom = (max) => {
    return Math.floor(Math.random() * max);
  }

  for (let i = 0; i < arr.length; ++i) {
    let index = arr(getRandom[arr.length])
    [arr[i], arr(index)] = [arr[index], arr[i]];
  }
}
