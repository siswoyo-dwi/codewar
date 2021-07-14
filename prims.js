function factorial(p){
  let a = 1
  let b = Math.pow(p,2)
  if(p==1){a}
  else{
    for(let i=2;i<p;i++){
      a*=i
    }
  }return (a+1)/b%1==0
}
console.log(factorial(5), true)
console.log(factorial(11), true)
console.log(factorial(16), false)