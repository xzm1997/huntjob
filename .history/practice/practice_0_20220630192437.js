function findMostWord(article) {
  article = article.trim().toLowerCase();
  let wordList = article.split(' ');
  let map = new Map();
  wordList.forEach((item) => {
    if (!map.has(item)) {
      map.set(item, 1);
    } else {
      let value = map.get(item);
      map.set(value, value+1);
    }
  })
  let word = '', max = 0;
  map.forEach((value, key) => {
    if (value > max) {
      word = key;
      max = value;
    }
  })
  console.log(map);
  return word + ' ' + max
}

let article = 'The construction and equipment installation phases for the three A321XLR flight-test aircraft are rapidly nearing completion in the FAL in Hamburg before the first of these – MSN11000 – will be handed over to the flight-test team in the very near future. In parallel, ground based testing campaigns are in full swing at various Airbus sites to prepare for the start of the flight-test and certification programmes.'
article = 'the the the The'
console.log(findMostWord(article));
