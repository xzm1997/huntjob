let values = [1,5,11]
let cache = [] // 缓存之前的结果
function minCoins (amount) {
  let min = amount

  if (amount < 1) {
    return 0
  }
  if (values.includes(amount)) {
    return 1
  }
  if (cache[amount]) return cache[amount] // 如果有缓存，直接取得缓存中的结果

  let middle = values.filter(item => item < amount)

  for (let i = 0,len = middle.length; i < len; i++) {
    let newMin = 1 + minCoins(amount - middle[i])
    if (newMin < min) {
      min = newMin
    }
  }
  cache[amount] = min // 将当前计算的最小值缓存下来。
  return min
}
