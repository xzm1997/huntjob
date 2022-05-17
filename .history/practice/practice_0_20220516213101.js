function reshape(num) {
  let elements = []
  while (num !== 0) {
    elements.push(num % 1000)
    num /= 1000
  }
}

