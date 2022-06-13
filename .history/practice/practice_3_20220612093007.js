function Person(age){

  this.age = age;

}

Person.sing = function(){console.log('我会唱歌');}

Person.prototype.getAge = function(){console.log(this.age);}

Person.age = 20;

var p = new Person(18);

console.log(Person.prototype.constructor);
