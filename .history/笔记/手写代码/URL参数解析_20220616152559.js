function getUrlParam(sUrl, sKey) {
  let paramsStr = /.+\?(.+)$/.exec(sUrl);
  if (paramsStr) {
    
  } else {
    // 无参数
  }
}


let ans, url;
url = 'http://www.nowcoder.com?key=1&key=2&key=3&test1=4#hehe'
url = 'http://www.nowcoder.com'
ans = getUrlParam(url)
// console.log(ans)
