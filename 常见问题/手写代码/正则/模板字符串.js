const template = (str, obj) => {
  for (const key of Reflect.ownKeys(obj)) {
    const regStr = `\\$\\{${key}\\}`;
    const reg = new RegExp(regStr, "g");
    str = str.replace(reg, obj[key]);
  }
  return str;
};
