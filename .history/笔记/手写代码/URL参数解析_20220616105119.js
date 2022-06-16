function getUrlParam(sUrl, sKey) {
  let paramsStr = /(.+)(\?)(.+)$/.exec(sUrl);
  console.log(paramsStr)
}


let ans;
ans = getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test1=4#hehe')
// console.log(ans)
