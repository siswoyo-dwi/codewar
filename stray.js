function stray(numbers) {
    for(let i = 0 ;i<numbers.length ; i++){
      let count=0
      for(let k = 0 ;k<numbers.length ; k++){
      if(numbers[k]==numbers[i]){
        count+=1
        }
      }if(count==1){return numbers[i]}
    }
  }
  console.log(stray([1, 1, 2]), 2);
 