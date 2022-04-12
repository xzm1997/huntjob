// "use strict";        // 严格模式
console.log("---- JS for practice. ----");

function fn(value){
    console.log(arguments instanceof Array);
    console.log(arguments.length);
    console.log(value);
    var arr = [...arguments];
    console.log(arr);
}
fn(10, 2,3);