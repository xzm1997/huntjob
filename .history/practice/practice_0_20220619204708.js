function debounce(fn,delay){
	let timer = null;
  return function(){
    if(timer){
      timer = null;
    }
    timer = setTimeout(fn,delay);
  }
}


debounce(console.log(1), 1000);
