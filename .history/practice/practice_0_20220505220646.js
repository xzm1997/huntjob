// var length = 10;
// function fn() {
//     console.log(this.length);
// }

// var obj = {
//     length: 5,
//     method: function(fn) {
//         fn();
//         arguments[0]();
//     }
// };

// obj.method(fn, 1);

let fn = function() {
    console.log(arguments);
}

fn(1,2,3,4)