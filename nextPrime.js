function nextPrime(n){
    if(n<2){return 2}
    const prime = (n)=>{
        if(n<2||!(n%2)){return  false}
        for(let i = 3 ;i<=Math.sqrt(n) ; i++){
          if(n%i===0){return false}
        }return true
      }
    
      for(let i = n+1 ;i<n+50 ; i++){
        if(prime(i)==true){
            return i
        }
      }
  }
  console.log(nextPrime(0), 2);
  console.log(nextPrime(1), 2);
  console.log(nextPrime(2), 3);
  console.log(nextPrime(3), 5);
  console.log(nextPrime(5), 7);
  console.log(nextPrime(11), 13);
  console.log(nextPrime(17), 19);
  console.log(nextPrime(2971), 2999);