const _reapeat = (str, n) => {
  if (typeof str !== 'string')
  let res = '';
  for (let i = 0; i < n; ++i) {
    res += str
  }
  return res
}


console.log(_reapeat('123',20))