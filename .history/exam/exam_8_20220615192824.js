function getUrlParam(sUrl, sKey) {
  let regex = /^(\?).*(\#)?$/;
  let res = sUrl.match(regex);
  console.log(res)
}


let ans;
ans = getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test1=4#hehe')
// console.log(ans)
