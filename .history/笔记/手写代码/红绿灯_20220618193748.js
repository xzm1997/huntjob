const redLight = (fn) => {
  console.log('red');
  fn();
}

const greenLight = (fn) => {
  console.log('green');
  fn();
}

const yellowLight = (fn) => {
  console.log('yellow');
  fn();
}

const lightSwitch = () => {
  setTimeout(() => {
    redLight(greenLight);
  }, 1000)
}
