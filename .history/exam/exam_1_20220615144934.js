function getUrlParam(sUrl, sKey) {
  // let paramContent = /^[?][/s]*[#]$/.match(sUrl);
  let paramContent = sUrl.split('?')[1].split('#')[0]
  let dir = paramContent.split('&');
  let res = new Map();
  for (let i = 0; i < dir.length; ++i) {
      [key, value] = dir[i].split('=')
      if (res.has(key)) {
        let valueNow = res.get(key)
        valueNow.push(value);
        res.set(key, valueNow)
      } else {
          res.set(key, [value]);
      }
  }
  if (sKey) {
    return res.get(sKey);
  } else {
    return res.value();
  }
}

console.log(getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe', 'key'))
