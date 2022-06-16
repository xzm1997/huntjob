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
switch(index) {
  case 0:
    url = 'http://www.nowcoder.com?key=1&key=2&key=3&test1=4#hehe'
    break;
  case 1:
    url = 'http://www.nowcoder.com';
    break;
  case 2:
    url=  'http://www.nowcoder.com?key=1&key=2&key=3&test1=4';
    break;
  default:
    url = '';
    break;
}
ans = getUrlParam(url)
// console.log(ans)
