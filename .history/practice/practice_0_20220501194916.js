const user = {
  name: 'IU',
  age:-1,
  sayHi() {
    console.log(this.name, this.age);
  }
}
// code begin
function creates(obj) {
  function F() {}
  F.prototype = obj
  return F;
}


// code end

const me = Object.creates(user)

me.name = 'UI';
me.age = 18

me.sayHi();