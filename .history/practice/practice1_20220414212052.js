// "use strict";        // 严格模式
console.log("---- JS for practice. ----");

var o = function() {
    this.a = 1;
    b = 2;
}

var po = new o();

o.prototype.max = function() {
    console.log(a, this.a, b);
}
var po1 = max();