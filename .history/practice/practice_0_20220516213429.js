function reshape(num) {
  let elements = []
  while (num !== 0) {
    elements.push(num % 1000)
    num /= 1000
  }
  console.log(elements)
  let res = ''
  while (elements.length != 0) {
    res += elements.pop();
    res += ','
  }
  return res
}
reshape(10000)
// console.log(reshape(10000))

