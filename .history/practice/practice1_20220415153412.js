// "use strict";        // 严格模式
console.log("---- JS for practice. ----");

function insertSort(arr) {
    let pre, cur;
    for (let i = 0; i < arr.length; ++i) {
        pre = i - 1;
        cur = arr[i];
        while (pre >= 0 && arr[pre] > cur) {
            arr[pre+1] = arr[pre];
            --pre;
        }
        arr[pre+1] = cur;
    }
}

arr = [1,7,23,19,65,13,12,54,87,2];
insertSort(arr);
console.log(arr);