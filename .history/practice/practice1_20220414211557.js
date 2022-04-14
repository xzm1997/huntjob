// "use strict";        // 严格模式
console.log("---- JS for practice. ----");

function f() {
    this.a = 1;
    b = 2;
    console.log(this.a, b);
}

// var fn = new f();
let o = function() {
    console.log(1);
}