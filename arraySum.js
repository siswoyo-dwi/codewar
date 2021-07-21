function arraySum(arr) {
    // sum ALL the things!
    let total = 0
    for(let i=0 ;i<arr.length ; i++){
        if(typeof arr[i]==='number'){
            total+=arr[i]
        }else{
            for(let k=0 ;k<arr[i].length ; k++){
                if(typeof arr[i][k]==='number'){
                total+=arr[i][k]}
                else{
                    for(let j=0 ;j<arr[i].length ; j++){
                        if(typeof arr[i][k][j]==='number'){
                        total+=arr[i][k][j]
                        }
                    }
                }
            }
        }
    }
return total
  }
console.log(arraySum([ 1, 2, [ 1, 2, 3, [ 5, 1, 0 ] ] ]), 15);
console.log(arraySum([1, 2, 3]), 6);
console.log(arraySum([1, 2, [1, 2]]), 6);
