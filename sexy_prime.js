function sexy_prime(x, y){
   if((y-x)<6){return false}
        const prime = (n)=>{
        if(n<2||!(n%2)){return  false}
        for(let i = 3 ;i<=Math.sqrt(n) ; i++){
          if(n%i===0){return false}
        }return true
      }
      console.log(prime(x),prime(y))
        return (prime(x))&&(prime(y))
  }
  console.log(sexy_prime(269 ,263),true)
  console.log(sexy_prime(277, 271),true)
  console.log(sexy_prime(83, 89),true)
  console.log(sexy_prime(1, 11),false)