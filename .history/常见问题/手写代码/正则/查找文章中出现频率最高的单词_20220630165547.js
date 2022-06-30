function findMostWord(article) {
  if (!article) return;
  article = article.trim().toLowerCase();
  let wordList = article.match(/[a-z]+/g);
  let visited = [], maxNum = 0, maxWord = '';
  article = " " + wordList.join("  ") + " ";
  wordList.forEach(function(item) {
    if (visited.indexOf(item) < 0) {
      visited.push(item);
      let word = new RegExp(" " + item + " ", "g"),
      num = article.match(word).length;
      if (num > maxNum) {
        maxNum = num;
        maxWord = item;
      }
    }
  });
  return maxWord + "  " + maxNum;
}

let article = 'The construction and equipment installation phases for the three A321XLR flight-test aircraft are rapidly nearing completion in the FAL in Hamburg before the first of these – MSN11000 – will be handed over to the flight-test team in the very near future. In parallel, ground based testing campaigns are in full swing at various Airbus sites to prepare for the start of the flight-test and certification programmes.'
console.log(findMostWord(article));
