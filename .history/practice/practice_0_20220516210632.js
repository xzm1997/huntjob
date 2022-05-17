const _reapeat = (str, n) => {
  if (typeof str !== 'string') throw new Error("Invalid Input")
  if (typeof n !== 'number' || n < 0) throw new Error("number")
  let res = '';
  for (let i = 0; i < n; ++i) {
    res += str
  }
  return res
}


console.log(_reapeat('123',20))