var hotpo = function(n){
    let count=0
      do{
        if(n%2==0){n/=2}
        else if(n%2==1){n=3*n+1}
         count+=1
      }while(n>1)
        return count
  }

  console.log(hotpo(5), 5);
  console.log(hotpo(6), 8);
  console.log(hotpo(23), 15);