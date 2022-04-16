// "use strict";        // 严格模式
console.log("---- JS for practice. ----");

function mergeSort(arr) {
    function merge(left, right) {
        var result = [];
        while (left.length && right.length) {
            if (left[0] <= right[0]) result.push(left.shift());
            else result.push(right.shift());
        }
        
    }
}

arr = [1,7,23,19,65,13,12,54,87,2];
// insertSort(arr);
console.log(arr);