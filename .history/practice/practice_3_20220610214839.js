let values = [1,5,11]
function minCoins (amount) {
  let min = amount

  if (amount < 1) {
    return 0
  }
  if (values.includes(amount)) {
    return 1
  }

  // 查找 values 中小于 amount 的所有值。
  let middle = values.filter(item => item < amount)

  for (let i = 0,len = middle.length; i < len; i++) {
    // 这里的 1 相当于先找一张，然后剩下的金额继续计算。
    let newMin = 1 + minCoins(amount - middle[i])
    if (newMin < min) {
      min = newMin
    }
  }
  return min
}
minCoins(15) // 3
