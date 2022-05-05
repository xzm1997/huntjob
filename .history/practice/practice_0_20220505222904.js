a = 1;
function printA(){
  console.log(this);
}
var obj={
  a:2,
  foo:printA,
  bar:function(){
    printA();
  }
}

obj.foo();
obj.bar();
var foo = obj.foo;
foo();