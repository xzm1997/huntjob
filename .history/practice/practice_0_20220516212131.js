String.prototype._reverse = function() {
  let res = this.split('').reverse().join('')
  return res
}


str = '12345'
console.log(str._reverse())