var countSubstrings = function(s) {
  const n = s.length;
  let ans = 0;
  for (let i = 0; i < 2 * n - 1; ++i) {
      let l = i / 2, r = i / 2 + i % 2;
      while (l >= 0 && r < n && s.charAt(l) == s.charAt(r)) {
          --l;
          ++r;
          ++ans;
      }
  }
  return ans;
};

作者：LeetCode-Solution
链接：https://leetcode.cn/problems/a7VOhD/solution/hui-wen-zi-zi-fu-chuan-de-ge-shu-by-leet-ejfv/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
