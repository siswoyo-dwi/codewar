function numPrimorial(n){
    let arr=[]
    let final = 1
    for(let i = 2 ;i<=n+50 ; i++){
        let count = 0
        for(let k = 1 ;k<=i ; k++){
          if(i%k==0){count+=1}
        }if(count==2){arr.push(i)}
      }for(let i = 0 ;i<n ; i++){
        final*=arr[i]
      }return final
  }
  console.log(numPrimorial(3),30);
  console.log(numPrimorial(4),210);
  console.log(numPrimorial(5),2310);
  console.log(numPrimorial(8),9699690);
  console.log(numPrimorial(9),223092870);
