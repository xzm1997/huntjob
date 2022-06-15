function getUrlParam(sUrl, sKey) {
  let paramContent = /^*$/.match(sUrl);
  let dir = paramContent.split('&');
  let res = new Map();
  for (let i = 0; i < dir.length; ++i) {
      [key, value] = dir[i].split('=')
      if (res.has(key)) {
          res.set(key, res.get(key).push(value))
      } else {
          res.set(key, [value]);
      }
  }
  return res.get(sKey);
}
