function getArgSum() {
  let arg = [...arguments]
  return arg.reduce((sum, item) => {
    return sum+item
  }, 0)
}


getArgSum()