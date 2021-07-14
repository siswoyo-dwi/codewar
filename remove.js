function remove(s){
    //coding and coding....
    let a = s.split('')
    for(let i=a.length-1;i>=0 ; i--){
        if(a[i]==='!'){
            a.splice([i],1)
        }
    }
    return a.join('')+'!'
  }
  console.log(remove("Hi!") , "Hi!")
console.log(remove("Hi!!!") ,"Hi!")
console.log(remove("!Hi") , "Hi!")
console.log(remove("!Hi!") , "Hi!")
console.log(remove("Hi! Hi!") , "Hi Hi!")
console.log(remove("Hi") , "Hi!")