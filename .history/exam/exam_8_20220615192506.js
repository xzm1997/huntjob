function getUrlParam(sUrl, sKey) {
  let regex = /^(\?\|\&).*(\&\|\#)$/g;
  let res = sUrl.match(regex)
}


let ans;
ans = getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test1=4#hehe').join('')
console.log(ans)
