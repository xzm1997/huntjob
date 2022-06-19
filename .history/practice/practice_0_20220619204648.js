
function debounce(fn,delay){
	let timer = null;
  return function(){
    if(timer){
      timer = null;
    }
    timer = setTimeout(fn,delay);
  }
}
