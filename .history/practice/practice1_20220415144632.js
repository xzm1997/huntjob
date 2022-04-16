// "use strict";        // 严格模式
console.log("---- JS for practice. ----");

function selectSort(arr) {
    for (let i = 0; i < arr.length; ++i) {
        minIndex = i;
        for (let j = i; j < arr.length; ++j) {
            if (arr[j] < arr[i]) minIndex = j;
        }
        tmp = arr[j];
        arr[j] = arr[i];
        arr[i] = tmp;
    }
}

