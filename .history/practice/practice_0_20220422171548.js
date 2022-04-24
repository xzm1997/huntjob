/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param number string字符串 n进制数值
 * @param n int整型 n进制
 * @param m int整型 m进制，要求输出m进制数值
 * @return string字符串
 */
 function convert( number ,  n ,  m ) {
  // write code here
  let res = parseInt(number, n)
  return res.toString(m).toUpperCase();
}
module.exports = {
  convert : convert
};