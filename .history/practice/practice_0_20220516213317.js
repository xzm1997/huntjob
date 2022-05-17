function reshape(num) {
  let elements = []
  while (num !== 0) {
    elements.push(num % 1000)
    num /= 1000
  }
  let res = ''
  while (elements.length != 0) {
    res += elements.pop();
    res += ','
  }
  return res
}

console.log(reshape(1000))

