let n = 10, p = 50, q = 50;
let arr = [23,43,12,54,76,34,56,87,56,32];
// for (let i = 0; i < n; ++i) {
//     arr.push(readInt());
// }
arr.sort((a,b)=>b-a);
let arr2 = [100];
for (let i = 1; i < n; ++i) {
    if (arr[i] < arr[i-1]) arr2.push(arr2[i]-1);
    else arr2.push(arr2[i]);
}

let count = 0;
for (let i = 0; i < n; ++i) {
    let score = (arr[i]*q + arr2[i]*p) / 100;
    if (score >= 60) ++count;
}

console.log(arr);
console.log(arr2);