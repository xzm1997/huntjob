function findMostWord(article) {
  article = article.trim().toLowerCase();
  let wordList = article.split(' ');
  wordList.sort();
  console.log(wordList);
}

let article = 'The construction and equipment installation phases for the three A321XLR flight-test aircraft are rapidly nearing completion in the FAL in Hamburg before the first of these – MSN11000 – will be handed over to the flight-test team in the very near future. In parallel, ground based testing campaigns are in full swing at various Airbus sites to prepare for the start of the flight-test and certification programmes.'
// article = 'the the the The'
console.log(findMostWord(article));
