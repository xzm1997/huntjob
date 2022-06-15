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
  // console.log(res)
  if (sKey) {
    let ans = res.get(sKey)
    if (ans.length === 1) return ans[0]
    return ans;
  } else {
    return [...res.values()].flat();
  }
}

console.log(getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test1=4#hehe'))
