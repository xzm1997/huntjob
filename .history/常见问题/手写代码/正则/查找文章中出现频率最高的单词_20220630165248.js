function findMostWord(article) {
  if (!article) return;
  article = article.trim().toLowerCase();
  let wordList = article.match(/[a-z]+/g);
  let visited = [], maxNum = 0, maxWord = '';
  wordList.forEach(function(item) {
    if (visited.indexOf(item) < 0) {
      visited.push(item)
    }
  })
}
