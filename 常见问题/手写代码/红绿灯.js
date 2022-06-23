const light = (lightColor, time, callback) => {
  setTimeout(() => {
    console.log(lightColor);
    callback();
  }, time);
}

const switchLight = () => {
  light('red', 1000, () => {
    light('green', 1000, () => {
      light('yellow', 1000, switchLight);
    })
  })
}

switchLight();
