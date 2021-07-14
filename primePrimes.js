const primePrimes = n => {
    const prime = (n)=>{
        if(n==2){return true}
        if(n<2||!(n%2)){return  false}
        for(let i = 3 ;i<=Math.sqrt(n) ; i++){
          if(n%i===0){return false}
        }return true
      }
      let arr=[]
      for(let i = 2 ;i<=n ; i++){
        if(prime(i)){
            arr.push(i)
        }
      }
      let count = 0
      for(let i = 0 ;i<arr.length-1 ; i++){
        for(let k = 0 ;k<arr.length-1 ; k++){
          if(k!==i){
            count+=(arr[i]/arr[k])
            console.log(count)
          }
        }
      }console.log(count)
      return [arr.length,Math.floor(count)]
  };
  console.log(primePrimes(6), [3, 1]);