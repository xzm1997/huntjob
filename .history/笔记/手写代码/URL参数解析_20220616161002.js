function getUrlParam(sUrl, sKey) {
  let paramsStr = /.+\?(.+)$/.exec(sUrl);
  if (!paramsStr) {
    return;
  }
  let temp = /(.*)#.*/.exec(paramsStr[1]);
  if (temp) {
    paramsStr = temp[1]
  } else {
    paramsStr = paramsStr[1]
  }
  // console.log(paramsStr);
  let map = new Map(), dir = paramsStr.split('&');
  dir.forEach(item => {
    let temp = item.split('=');
    if (!map.has(temp[0])) {
      map.set(temp[0], [temp[1]]);
    } else {
      let value = map.get(temp[0]);
      value.push(temp[1]);
      map.set(temp[0], value);
    }
  })
  // console.log(map);
  let res = []
  if (!sKey) {
    map.forEach(item => {
      res.push(...item)
    })
    return res;
  }
  return map.get(sKey);
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
ans = getUrlParam(url, 'test1');
console.log(ans)
