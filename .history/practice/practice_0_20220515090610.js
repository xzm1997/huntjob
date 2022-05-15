const user = {
  name: 'IU',
  sayHi() {
    console.log(this.name, this.age)
  }
}

const me = Object._create(user)

me.name = 'UI' // 继承的属性可以被覆盖
me.age = 18 // "age" 是设置在 me 上的属性，而不是设置在 user 上的属性

me.sayHi() // "UI" 18