function reject(array, predicate) {
    //
    let arr=[]
    for(let i = 0 ;i<array.length ; i++){
        if(predicate(array[i])==false){
            arr.push(array[i])
        }
    }
    return arr
  }
  console.log(reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }), [1, 3, 5]);
 