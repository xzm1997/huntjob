function getUrlParam(sUrl, sKey) {
  let paramsStr = /.+\?(.+)$/.exec(sUrl);
  if (paramsStr) {
    console.log(paramsStr[1]);
    paramsStr = /(.*)#.*/.exec(paramsStr[1]);
    console.log(paramsStr);
  } else {
    // 无参数
  }
}


let ans, url, index = 0;
url = 'http://www.nowcoder.com?key=1&key=2&key=3&test1=4#hehe'
// url = 'http://www.nowcoder.com'
// url = 'http://www.nowcoder.com?key=1&key=2&key=3&test1=4'
switch(index) {
  
}
ans = getUrlParam(url)
// console.log(ans)
