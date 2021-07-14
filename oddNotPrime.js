function oddNotPrime(n){
    const prime = (n)=>{
        if(n<2||!(n%2)){return  false}
        for(let i = 3 ;i<=Math.sqrt(n) ; i++){
          if(n%i===0){return false}
        }return true
      }
    let a = []
    for(let i = 1 ;i<=n ; i++){
        if(i%2==1&&!prime(i)){a.push(i)}
    }return a.length
  }

  console.log(oddNotPrime(5),1);
  console.log(oddNotPrime(10),2);
  console.log(oddNotPrime(99),26);
  console.log(oddNotPrime(9),2);
  console.log(oddNotPrime(1),1);