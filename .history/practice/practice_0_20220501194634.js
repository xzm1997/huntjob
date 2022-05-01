const user = {
  name: 'IU',
  age:-1,
  sayHi() {
    console.log(this.name, this.age);
  }
}
// code begin

// code end

const me = Object.create(user)

me.name = 'UI';
me.age = 18

me.sayHi();