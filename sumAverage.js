const sumAverage = (arr) => {
    let result=[]
    let total = 0
    for(let i = 0 ; i<arr.length ; i++){
        let a = 0  
      for(let k = 0 ; k<arr[i].length ; k++){
            a+=arr[i][k]
      }
      result.push(a/arr[i].length)
    }
    for(let i = 0 ; i<result.length ; i++){
        total+=result[i]
    }return Math.floor(total)
  }
console.log(sumAverage([[3, 4, 1, 3, 5, 1, 4], [21, 54, 33, 21, 77]]), 44);
console.log(sumAverage([[-4, 3, -8, -2], [2, 9, 1, -5], [-7, -2, -6, -4]]), -6);
 