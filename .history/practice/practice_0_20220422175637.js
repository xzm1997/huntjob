function NumOfTriangle( edges ) {
  // write code here
  const judge = (i, j, k) => {
      if (i + j < k && j + k < i && i + k < j) {
          return true;
      }
      return false;
  }
  if (edges.length < 3) return 0;
  let res = new Set(), n = edges.length;
  for (let i = 0; i < n-2; ++i) {
      for (let j = i + 1; j < n-1; ++j) {
          for (let k = 0; k < n; ++k) {
              if (judge(i,j,k)) {
                  let ans = [i,j,k];
                  res.add(ans.sort((a,b) => a-b));
              }
          }
      }
  }
  return res;
}

edge = [2,2,4,3];
console.log(NumOfTriangle(edge));