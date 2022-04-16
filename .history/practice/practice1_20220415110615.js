// "use strict";        // 严格模式
console.log("---- JS for practice. ----");

function bubbleSort (arr) {
    for (let i = 0; i < arr.length-1; ++i) {
        for (let j = 0; j < arr.length-1-i; ++j) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
            }
        }
    }
}

let arr = [1,6,4,3,1,6,7,2,1];
bubbleSort(arr);
console.log(arr);