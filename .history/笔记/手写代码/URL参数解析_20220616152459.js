function getUrlParam(sUrl, sKey) {
  let paramsStr = /.+\?(.+)$/.exec(sUrl);
  console.log(paramsStr)
}


let ans, url;
url = 'http://www.nowcoder.com?key=1&key=2&key=3&test1=4#hehe'
ans = getUrlParam(url)
// console.log(ans)
