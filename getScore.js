function getScore(arr) {
    let total =0
    let count = 0
    for(let i = 0 ;i<arr.length ; i++){
        i>1?count+=arr[i-1]:count+=0
        let lvl=(Math.floor((count)/10))+1
        let num=0
      switch (arr[i]){
          case 4:num+=1200
          break
          case 3:num+=300
          break
          case 2:num+=100
          break
          case 1:num+=40
          break
         
      }
      total+=(num*lvl)
    } return total
  }
 
  console.log(getScore([0, 4, 0, 3, 4, 0, 2, 4, 3, 4, 0, 1, 0, 4, 0, 1, 2, 3, 4, 1, 2, 0, 1, 3, 0, 2, 3, 0, 4, 4, 1, 3, 2, 1], 41820))
  

