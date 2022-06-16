function getUrlParam(sUrl, sKey) {
  let paramsStr = /.+\?(.+)$/.exec(sUrl);
  if (paramsStr) {
    paramsStr = /(.*)#.*/.exec(paramsStr);
    console.log(paramsStr);
  } else {
    // 无参数
  }
}


let ans, url;
url = 'http://www.nowcoder.com?key=1&key=2&key=3&test1=4#hehe'
url = 'http://www.nowcoder.com'
url = 'http://www.nowcoder.com?key=1&key=2&key=3&test1=4'
ans = getUrlParam(url)
// console.log(ans)
