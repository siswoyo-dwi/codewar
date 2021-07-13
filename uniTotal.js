function uniTotal(a){
    let count=0
    if(a.length<1){return 0}
    for(let i = 0 ;i<a.length ; i++){
        count+=a.charCodeAt(i)
    }
    return count
  }
  console.log(uniTotal(""), 0);
  console.log(uniTotal("a"), 97);
  console.log(uniTotal("b"), 98);
  console.log(uniTotal("c"), 99);
  console.log(uniTotal("d"), 100);
  console.log(uniTotal("e"), 101);
  console.log(uniTotal("aaa"), 291);
  console.log(uniTotal("Mary Had A Little Lamb"),1873);  