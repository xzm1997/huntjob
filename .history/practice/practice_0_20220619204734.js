function debounce(fn,delay){
	let timer = null;
  return function(){
    if(timer){
      timer = null;
    }
    console.log(delay);
    timer = setTimeout(fn, delay);
  }
}


debounce(console.log(1), 1000);
