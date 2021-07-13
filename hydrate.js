function hydrate(s) {
  let drink =0
  let a =s.split(' ')
  for(let i = 0 ;i<a.length ; i++){
    if(isNaN(+a[i])===false) drink+=(+a[i])
  }return drink>1?`${drink} glasses of water`:`1 glass of water`
}
console.log(hydrate("1 beer"), "1 glass of water");
console.log(hydrate("2 glasses of wine and 1 shot"), "3 glasses of water");
console.log(hydrate("1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"), "10 glasses of water");
